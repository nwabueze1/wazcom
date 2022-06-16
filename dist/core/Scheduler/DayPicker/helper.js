export var filterDaysOptions = function (days, scheduleData) {
    return days.filter(function (value) {
        var isWeekday = scheduleData.find(function (day) { return String(day.day) == "8"; });
        var isWeekend = scheduleData.find(function (day) { return String(day.day) == "9"; });
        if (isWeekday) {
            return !(Number(value.id) >= 2 && Number(value.id) <= 6) && Number(value.id) != 8 && Number(value.id) != 0;
        }
        if (isWeekend) {
            return Number(value.id) != 1 && Number(value.id) != 7 && Number(value.id) != 9 && Number(value.id) != 0;
        }
        return !(scheduleData === null || scheduleData === void 0 ? void 0 : scheduleData.some(function (item) { return String(item.day) == String(value.id); }));
    });
};
