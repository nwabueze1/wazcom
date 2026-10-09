export function generateUniqueId(prefix?: string) {
  const timestamp = Date.now().toString(36);
  const randomNum = Math.random().toString(36).substring(2, 5);
  const uniqueId = timestamp + randomNum;
  return prefix ? `${prefix}${uniqueId}` : "_" + uniqueId;
}
