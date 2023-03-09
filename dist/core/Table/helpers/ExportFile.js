var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { getJsxContent } from ".";
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
    var parseData = data.map(function (item) {
        var obj = {};
        Object.entries(item).map(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var innerValue = value === null ? "" : typeof value == "object" ? getJsxContent(value) : value.toString();
            obj[key] = innerValue;
        });
        return obj;
    });
    var workSheet = XLSX.utils.json_to_sheet(parseData);
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
            var innerValue = value === null ? "" : typeof value == "object" ? getJsxContent(value) : value.toString();
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
