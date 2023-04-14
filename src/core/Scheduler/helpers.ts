import { Schedule } from "./types";

export const filterDayOptions = (
  days: { value: string; label: string }[],
  scheduleData: Schedule[],
) => {
  const isWeekdays = scheduleData.some((day) => String(day.day) == "8");
  const isWeekends = scheduleData.some((day) => String(day.day) == "9");
  const isAWeekday = scheduleData.some((day) => Number(day.day) >= 2 && Number(day.day) <= 6);
  const isAWeekEnd = scheduleData.some((day) => Number(day.day) == 1 || Number(day.day) == 7);

  return days.filter((value) => {
    if (scheduleData.length == 1) {
      return true;
    }
    if (isWeekdays && !isWeekends) {
      return (
        !(Number(value.value) >= 2 && Number(value.value) <= 6) &&
        Number(value.value) != 8 &&
        Number(value.value) != 0 &&
        !scheduleData?.some((item) => String(item.day) == String(value.value))
      );
    }
    if (isWeekends && !isWeekdays) {
      return (
        Number(value.value) != 1 &&
        Number(value.value) != 7 &&
        Number(value.value) != 9 &&
        Number(value.value) != 0 &&
        !scheduleData?.some((item) => String(item.day) == String(value.value))
      );
    }
    if (isWeekdays && isWeekends) {
      return (
        Number(value.value) != 1 &&
        Number(value.value) != 7 &&
        Number(value.value) != 9 &&
        !(Number(value.value) >= 2 && Number(value.value) <= 6) &&
        Number(value.value) != 8 &&
        Number(value.value) != 0 &&
        !scheduleData?.some((item) => String(item.day) == String(value.value))
      );
    }
    if (isAWeekday && !isAWeekEnd) {
      return (
        Number(value.value) != 8 &&
        Number(value.value) != 0 &&
        !scheduleData?.some((item) => String(item.day) == String(value.value))
      );
    }
    if (isAWeekEnd && !isAWeekday) {
      return (
        Number(value.value) != 9 &&
        Number(value.value) != 0 &&
        !scheduleData?.some((item) => String(item.day) == String(value.value))
      );
    }
    if (isAWeekday && isAWeekEnd) {
      return (
        Number(value.value) != 9 &&
        Number(value.value) != 8 &&
        Number(value.value) != 0 &&
        !scheduleData?.some((item) => String(item.day) == String(value.value))
      );
    }
    if (isWeekdays && isAWeekEnd) {
      return (
        Number(value.value) != 8 &&
        Number(value.value) != 9 &&
        Number(value.value) != 0 &&
        !(Number(value.value) >= 2 && Number(value.value) <= 6) &&
        !scheduleData?.some((item) => String(item.day) == String(value.value))
      );
    }

    return !scheduleData?.some((item) => String(item.day) == String(value.value));
  });
};
