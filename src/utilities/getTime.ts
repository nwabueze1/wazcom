export const getTimeFrom = (dt: number) => {
  const date = Date.now();
  const difference = date - dt;

  if (difference < 60000) {
    return `${Math.round(difference / 1000)}s`;
  }

  if (difference < 3600000) {
    return `${Math.round(difference / 60000)}m`;
  }

  if (difference < 86400000) {
    return `${Math.round(difference / 3600000)}h`;
  }

  return `${Math.round(difference / 86400000)}d`;
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
