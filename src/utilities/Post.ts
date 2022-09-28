export const stripHtml = (html: string): string => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return String(div.textContent);
};

export const truncate = (
    fullStr: string,
    strLen = 25,
    separator = "....",
    frontChars = 7,
    backChars = 9,
) => {
    if (fullStr.length <= strLen) return fullStr;

    return fullStr.substr(0, frontChars) + separator + fullStr.substr(fullStr.length - backChars);
};
