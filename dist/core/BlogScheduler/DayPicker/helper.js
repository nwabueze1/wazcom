export var filterDaysOptions = function (days, scheduleData) {
    var isWeekdays = scheduleData.some(function (day) { return String(day.day) == "8"; });
    var isWeekends = scheduleData.some(function (day) { return String(day.day) == "9"; });
    var isAWeekday = scheduleData.some(function (day) { return Number(day.day) >= 2 && Number(day.day) <= 6; });
    var isAWeekEnd = scheduleData.some(function (day) { return Number(day.day) == 1 || Number(day.day) == 7; });
    return days.filter(function (value) {
        if (scheduleData.length == 1) {
            return true;
        }
        if (isWeekdays && !isWeekends) {
            return !(Number(value.id) >= 2 && Number(value.id) <= 6) && Number(value.id) != 8 && Number(value.id) != 0 && !(scheduleData === null || scheduleData === void 0 ? void 0 : scheduleData.some(function (item) { return String(item.day) == String(value.id); }));
        }
        if (isWeekends && !isWeekdays) {
            return Number(value.id) != 1 && Number(value.id) != 7 && Number(value.id) != 9 && Number(value.id) != 0 && !(scheduleData === null || scheduleData === void 0 ? void 0 : scheduleData.some(function (item) { return String(item.day) == String(value.id); }));
        }
        if (isWeekdays && isWeekends) {
            return Number(value.id) != 1 && Number(value.id) != 7 && Number(value.id) != 9 && !(Number(value.id) >= 2 && Number(value.id) <= 6) && Number(value.id) != 8 && Number(value.id) != 0 && !(scheduleData === null || scheduleData === void 0 ? void 0 : scheduleData.some(function (item) { return String(item.day) == String(value.id); }));
        }
        if (isAWeekday && !isAWeekEnd) {
            return Number(value.id) != 8 && Number(value.id) != 0 && !(scheduleData === null || scheduleData === void 0 ? void 0 : scheduleData.some(function (item) { return String(item.day) == String(value.id); }));
        }
        if (isAWeekEnd && !isAWeekday) {
            return Number(value.id) != 9 && Number(value.id) != 0 && !(scheduleData === null || scheduleData === void 0 ? void 0 : scheduleData.some(function (item) { return String(item.day) == String(value.id); }));
        }
        if (isAWeekday && isAWeekEnd) {
            return Number(value.id) != 9 && Number(value.id) != 8 && Number(value.id) != 0 && !(scheduleData === null || scheduleData === void 0 ? void 0 : scheduleData.some(function (item) { return String(item.day) == String(value.id); }));
        }
        if (isWeekdays && isAWeekEnd) {
            return Number(value.id) != 8 && Number(value.id) != 9 && Number(value.id) != 0 && !(Number(value.id) >= 2 && Number(value.id) <= 6) && !(scheduleData === null || scheduleData === void 0 ? void 0 : scheduleData.some(function (item) { return String(item.day) == String(value.id); }));
        }
        return !(scheduleData === null || scheduleData === void 0 ? void 0 : scheduleData.some(function (item) { return String(item.day) == String(value.id); }));
    });
};
export var days = [
    { id: 0, name: "Select Day" },
    { id: 1, name: "Sunday" },
    { id: 2, name: "Monday" },
    { id: 3, name: "Tuesday" },
    { id: 4, name: "Wednesday" },
    { id: 5, name: "Thursday" },
    { id: 6, name: "Friday" },
    { id: 7, name: "Saturday" },
    { id: 8, name: "Weekdays" },
    { id: 9, name: "Weekends" },
];
