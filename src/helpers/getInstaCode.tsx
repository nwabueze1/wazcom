export const getCodeFromUrl = () => {
    const url = location.search;
    const newUrl = new URLSearchParams(url);
    return newUrl.get("code");
};
