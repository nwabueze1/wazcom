export const capitalize = (param: string) => {
<<<<<<< HEAD
    const formattedParam = param?.replace(/\//g, "").replace(/-/g, " ");
    const pathSplits = formattedParam
        .split(" ")
        .map((slice) => slice.charAt(0).toUpperCase() + slice.slice(1).toLowerCase());
    return pathSplits.join(" ");
};
=======
  const formattedParam = param.replace(/\//g, "").replace(/-/g, " ");
  const pathSplits = formattedParam
    .split(" ")
    .map((slice) => slice.charAt(0).toUpperCase() + slice.slice(1).toLowerCase());
  return pathSplits.join(" ");
};
>>>>>>> develop
