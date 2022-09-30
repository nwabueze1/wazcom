import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { getJsxContent } from ".";

const fileTypeExt = {
    xlsx: {
        fileType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
        extension: ".xlsx",
    },
    csv: {
        fileType: "text/csv;charset=utf-8;",
        extension: ".csv",
    },
};

export const exportToXlsx = (name: string, data: { [key: string]: string }[]) => {
    const parseData = data.map((item) => {
        const obj = {};
        Object.entries(item).map(([key, value]) => {
            const innerValue =
                value === null
                    ? ""
                    : typeof value == "object"
                    ? getJsxContent(value)
                    : value.toString();
            obj[key] = innerValue;
        });
        return obj;
    });
    const workSheet = XLSX.utils.json_to_sheet(parseData);
    const workBook = { Sheets: { data: workSheet }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(workBook, { bookType: "xlsx", type: "array" });
    const downloadData = new Blob([excelBuffer], {
        type: fileTypeExt["xlsx"].fileType,
    });
    FileSaver.saveAs(downloadData, name + fileTypeExt["xlsx"].extension);
};

export const exportToCSV = (filename: string, rows: { [key: string]: any }) => {
    const processRow = function (row: any) {
        let finalVal = "";
        Object.values(row).map((value: any, index: any) => {
            let innerValue =
                value === null
                    ? ""
                    : typeof value == "object"
                    ? getJsxContent(value)
                    : value.toString();
            if (value instanceof Date) {
                innerValue = value.toLocaleString();
            }
            let result = innerValue.replace(/"/g, '""');
            if (result.search(/("|,|\n)/g) >= 0) result = '"' + result + '"';
            if (index > 0) finalVal += ",";
            finalVal += result;
            return null;
        });
        return finalVal + "\n";
    };

    let csvFile = "";
    for (let i = 0; i < rows.length; i++) {
        csvFile += processRow(rows[i]);
    }

    const blob = new Blob([csvFile], { type: fileTypeExt["csv"].fileType });
    FileSaver.saveAs(blob, filename + fileTypeExt["csv"].extension);
};
