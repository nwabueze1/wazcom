import { Schedule } from "..";

export const filterDaysOptions = (days: { id: number; name: string }[], scheduleData: Schedule[]) => {
    const isWeekdays = scheduleData.some((day) => String(day.day) == "8");
    const isWeekends = scheduleData.some((day) => String(day.day) == "9");
    const isAWeekday = scheduleData.some((day) => Number(day.day) >= 2 && Number(day.day) <= 6);
    const isAWeekEnd = scheduleData.some((day) => Number(day.day) == 1 ||  Number(day.day) == 7);

    return days.filter((value) => {
        if (scheduleData.length == 1) {
            return true
        }
        if (isWeekdays && !isWeekends) {
            return !(Number(value.id) >= 2 && Number(value.id) <= 6) && Number(value.id) != 8 && Number(value.id) != 0 && !scheduleData?.some((item) => String(item.day) == String(value.id))
        }
        if (isWeekends && !isWeekdays) {
            return Number(value.id) != 1 && Number(value.id) != 7 && Number(value.id) != 9 && Number(value.id) != 0 && !scheduleData?.some((item) => String(item.day) == String(value.id))
        }
        if (isWeekdays && isWeekends) {
            return Number(value.id) != 1 && Number(value.id) != 7 && Number(value.id) != 9 && !(Number(value.id) >= 2 && Number(value.id) <= 6) && Number(value.id) != 8 && Number(value.id) != 0 && !scheduleData?.some((item) => String(item.day) == String(value.id))
        }
        if (isAWeekday && !isAWeekEnd) {
            return Number(value.id) != 8 && Number(value.id) != 0 && !scheduleData?.some((item) => String(item.day) == String(value.id))
        }
        if (isAWeekEnd && !isAWeekday) {
            return Number(value.id) != 9 && Number(value.id) != 0 && !scheduleData?.some((item) => String(item.day) == String(value.id))
        }
        if (isAWeekday && isAWeekEnd) {
            return Number(value.id) != 9 && Number(value.id) != 8 && Number(value.id) != 0 && !scheduleData?.some((item) => String(item.day) == String(value.id))
        }
        if (isWeekdays && isAWeekEnd) {
            return Number(value.id) != 8 && Number(value.id) != 9 && Number(value.id) != 0 && !(Number(value.id) >= 2 && Number(value.id) <= 6) && !scheduleData?.some((item) => String(item.day) == String(value.id))
        }
       
        return !scheduleData?.some((item) => String(item.day) == String(value.id))
    })
} 

export const days: { id: number; name: string }[] = [
    { id: 0, name: "Everyday" },
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