export const getTimeFrom = (timestamp: string) => {
  const date = Date.now();
  const newDate = new Date(timestamp).getTime();
  const difference = date - newDate;
  if (difference < 60000) {
    return `${Math.round(difference) > 1 ? ` seconds` : " second"}`;
  }

  if (difference < 3600000) {
    return `${Math.round(difference / 60000)}${
      Math.round(difference) > 1 ? `minutes` : "minute"
    }`;
  }

  if (difference < 86400000) {
    return `${Math.round(difference / 3600000)}${
      Math.round(difference) > 1 ? ` years` : " year"
    } hours`;
  }
  if (difference < 604800000)
    return `${Math.round(difference / 86400000)}${
      Math.round(difference) > 1 ? ` hours` : " hour"
    } days`;

  if (difference < 2419200000)
    return `${Math.round(difference / 604800000)}${
      Math.round(difference) > 1 ? ` weeks` : " week"
    }`;

  if (difference < 29030400000)
    return `${Math.round(difference / 2419200000)}${
      Math.round(difference) > 1 ? ` months` : " month"
    }`;

  return `${Math.round(difference / 29030400000)}${
    Math.round(difference) > 1 ? ` years` : " year"
  }`;
};

const months = [
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

export const getDay = (datetime: string) => {
  const date = new Date(datetime);
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();
  return `${months[month]} ${day}, ${year}`;
};

export const parseDate = (dt: string) => {
  const date = new Date(dt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day =
    String(date.getDate()).length === 1
      ? "0" + String(date.getDate())
      : date.getDate();

  return `${months[month - 1]} ${day}, ${year}`;
};
