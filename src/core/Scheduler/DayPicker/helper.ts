import { Schedule } from "..";

export const filterDaysOptions = (days: { id: number; name: string }[], scheduleData: Schedule[]) => {
    return days.filter((value) => {
        const isWeekdays = scheduleData.find((day) => String(day.day) == "8");
        const isWeekends = scheduleData.find((day) => String(day.day) == "9");
        const isAWeekday = scheduleData.find((day) => Number(day.day) >= 2 && Number(day.day) <= 6);
        const isAWeekEnd = scheduleData.find((day) => Number(day.day) == 1 || Number(day.day) == 7);

        if (isWeekdays) {
            return !(Number(value.id) >= 2 && Number(value.id) <= 6) && Number(value.id) != 8 && Number(value.id) != 0
        }
        if (isWeekends) {
            return Number(value.id) != 1 && Number(value.id) != 7 && Number(value.id) != 9 && Number(value.id) != 0
        }
        if (isAWeekday) {
            return Number(value.id) != 8 && Number(value.id) != 0
        }
        if (isAWeekEnd) {
            return Number(value.id) != 9 && Number(value.id) != 0
        }
        if (value.id != 0) {
            return !scheduleData?.some((item) => String(item.day) == String(value.id))
        }
        return
      })
} 