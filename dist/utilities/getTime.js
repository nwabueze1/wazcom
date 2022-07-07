export var getTimeFrom = function (timestamp) {
    var date = Date.now();
    var newDate = new Date(timestamp).getTime();
    var difference = date - newDate;
    if (difference < 60000) {
        return "".concat(Math.round(difference) > 1 ? " seconds" : " second");
    }
    if (difference < 3600000) {
        return "".concat(Math.round(difference / 60000)).concat(Math.round(difference) > 1 ? "minutes" : "minute");
    }
    if (difference < 86400000) {
        return "".concat(Math.round(difference / 3600000)).concat(Math.round(difference) > 1 ? " years" : " year", " hours");
    }
    if (difference < 604800000)
        return "".concat(Math.round(difference / 86400000)).concat(Math.round(difference) > 1 ? " hours" : " hour", " days");
    if (difference < 2419200000)
        return "".concat(Math.round(difference / 604800000)).concat(Math.round(difference) > 1 ? " weeks" : " week");
    if (difference < 29030400000)
        return "".concat(Math.round(difference / 2419200000)).concat(Math.round(difference) > 1 ? " months" : " month");
    return "".concat(Math.round(difference / 29030400000)).concat(Math.round(difference) > 1 ? " years" : " year");
};
var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
export var getDay = function (datetime) {
    var date = new Date(datetime);
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    return "".concat(months[month], " ").concat(day, ", ").concat(year);
};
export var parseDate = function (dt) {
    var date = new Date(dt);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = String(date.getDate()).length === 1
        ? "0" + String(date.getDate())
        : date.getDate();
    return "".concat(months[month - 1], " ").concat(day, ", ").concat(year);
};
