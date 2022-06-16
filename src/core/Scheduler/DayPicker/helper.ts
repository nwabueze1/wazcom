import { Schedule } from "..";

export const filterDaysOptions = (days: { id: number; name: string }[], scheduleData: Schedule[]) => {
    return days.filter((value) => {
        const isWeekday = scheduleData.find((day) => String(day.day) == "8");
        const isWeekend = scheduleData.find((day) => String(day.day) == "9");
        if (isWeekday) {
          return !(Number(value.id) >= 2 && Number(value.id) <= 6) && Number(value.id) != 8 && Number(value.id) != 0
        }
    
        if (isWeekend) {
          return Number(value.id) != 1 && Number(value.id) != 7 && Number(value.id) != 9 && Number(value.id) != 0
        }
    
        return !scheduleData?.some((item) => String(item.day) == String(value.id))
      })
} 