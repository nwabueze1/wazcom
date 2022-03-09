import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
var fileTypeExt = {
    xlsx: {
        fileType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
        extension: ".xlsx",
    },
    csv: {
        fileType: "text/csv;charset=utf-8;",
        extension: ".csv",
    },
};
export var exportToXlsx = function (name, data) {
    var workSheet = XLSX.utils.json_to_sheet(data);
    var workBook = { Sheets: { data: workSheet }, SheetNames: ["data"] };
    var excelBuffer = XLSX.write(workBook, { bookType: "xlsx", type: "array" });
    var downloadData = new Blob([excelBuffer], {
        type: fileTypeExt["xlsx"].fileType,
    });
    FileSaver.saveAs(downloadData, name + fileTypeExt["xlsx"].extension);
};
export var exportToCSV = function (filename, rows) {
    var processRow = function (row) {
        var finalVal = "";
        Object.values(row).map(function (value, index) {
            var innerValue = value === null ? "" : value.toString();
            if (value instanceof Date) {
                innerValue = value.toLocaleString();
            }
            var result = innerValue.replace(/"/g, '""');
            if (result.search(/("|,|\n)/g) >= 0)
                result = '"' + result + '"';
            if (index > 0)
                finalVal += ",";
            finalVal += result;
            return null;
        });
        return finalVal + "\n";
    };
    var csvFile = "";
    for (var i = 0; i < rows.length; i++) {
        csvFile += processRow(rows[i]);
    }
    var blob = new Blob([csvFile], { type: fileTypeExt["csv"].fileType });
    FileSaver.saveAs(blob, filename + fileTypeExt["csv"].extension);
};
