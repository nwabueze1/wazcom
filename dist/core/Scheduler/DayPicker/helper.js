export var filterDaysOptions = function (days, scheduleData) {
    return days.filter(function (value) {
        var isWeekdays = scheduleData.find(function (day) { return String(day.day) == "8"; });
        var isWeekends = scheduleData.find(function (day) { return String(day.day) == "9"; });
        var isAWeekday = scheduleData.find(function (day) { return Number(day.day) >= 2 && Number(day.day) <= 6; });
        var isAWeekEnd = scheduleData.find(function (day) { return Number(day.day) == 1 || Number(day.day) == 7; });
        if (scheduleData.length == 1) {
            return true;
        }
        if (isWeekdays) {
            return !(Number(value.id) >= 2 && Number(value.id) <= 6) && Number(value.id) != 8 && Number(value.id) != 0;
        }
        if (isWeekends) {
            return Number(value.id) != 1 && Number(value.id) != 7 && Number(value.id) != 9 && Number(value.id) != 0;
        }
        if (isAWeekday) {
            return Number(value.id) != 8 && Number(value.id) != 0;
        }
        if (isAWeekEnd) {
            return Number(value.id) != 9 && Number(value.id) != 0;
        }
        if (value.id != 0) {
            return !(scheduleData === null || scheduleData === void 0 ? void 0 : scheduleData.some(function (item) { return String(item.day) == String(value.id); }));
        }
        return;
    });
};
