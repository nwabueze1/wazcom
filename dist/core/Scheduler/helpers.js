export var filterDayOptions = function (days, scheduleData) {
    var isWeekdays = scheduleData.some(function (day) { return String(day.day) == "8"; });
    var isWeekends = scheduleData.some(function (day) { return String(day.day) == "9"; });
    var isAWeekday = scheduleData.some(function (day) { return Number(day.day) >= 2 && Number(day.day) <= 6; });
    var isAWeekEnd = scheduleData.some(function (day) { return Number(day.day) == 1 || Number(day.day) == 7; });
    return days.filter(function (value) {
        if (scheduleData.length == 1) {
            return true;
        }
        if (isWeekdays && !isWeekends) {
            return (!(Number(value.value) >= 2 && Number(value.value) <= 6) &&
                Number(value.value) != 8 &&
                Number(value.value) != 0 &&
                !(scheduleData === null || scheduleData === void 0 ? void 0 : scheduleData.some(function (item) { return String(item.day) == String(value.value); })));
        }
        if (isWeekends && !isWeekdays) {
            return (Number(value.value) != 1 &&
                Number(value.value) != 7 &&
                Number(value.value) != 9 &&
                Number(value.value) != 0 &&
                !(scheduleData === null || scheduleData === void 0 ? void 0 : scheduleData.some(function (item) { return String(item.day) == String(value.value); })));
        }
        if (isWeekdays && isWeekends) {
            return (Number(value.value) != 1 &&
                Number(value.value) != 7 &&
                Number(value.value) != 9 &&
                !(Number(value.value) >= 2 && Number(value.value) <= 6) &&
                Number(value.value) != 8 &&
                Number(value.value) != 0 &&
                !(scheduleData === null || scheduleData === void 0 ? void 0 : scheduleData.some(function (item) { return String(item.day) == String(value.value); })));
        }
        if (isAWeekday && !isAWeekEnd) {
            return (Number(value.value) != 8 &&
                Number(value.value) != 0 &&
                !(scheduleData === null || scheduleData === void 0 ? void 0 : scheduleData.some(function (item) { return String(item.day) == String(value.value); })));
        }
        if (isAWeekEnd && !isAWeekday) {
            return (Number(value.value) != 9 &&
                Number(value.value) != 0 &&
                !(scheduleData === null || scheduleData === void 0 ? void 0 : scheduleData.some(function (item) { return String(item.day) == String(value.value); })));
        }
        if (isAWeekday && isAWeekEnd) {
            return (Number(value.value) != 9 &&
                Number(value.value) != 8 &&
                Number(value.value) != 0 &&
                !(scheduleData === null || scheduleData === void 0 ? void 0 : scheduleData.some(function (item) { return String(item.day) == String(value.value); })));
        }
        if (isWeekdays && isAWeekEnd) {
            return (Number(value.value) != 8 &&
                Number(value.value) != 9 &&
                Number(value.value) != 0 &&
                !(Number(value.value) >= 2 && Number(value.value) <= 6) &&
                !(scheduleData === null || scheduleData === void 0 ? void 0 : scheduleData.some(function (item) { return String(item.day) == String(value.value); })));
        }
        return !(scheduleData === null || scheduleData === void 0 ? void 0 : scheduleData.some(function (item) { return String(item.day) == String(value.value); }));
    });
};
