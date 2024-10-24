export const getTableRows = (data: any[]) => {
  const parsedRows: { [key: string]: JSX.Element | string | number }[] = [];

  for (const row of data) {
    const parsedRow: { [key: string]: JSX.Element | string | number } = {};
    parsedRow["title"] = <p style={{ fontWeight: "bold", margin: 0 }}>{row["title"]}</p>;
    parsedRow["author.name"] = row?.["author"]?.["name"] ?? "";
    parsedRow["slug"] = row?.slug ?? "None";
    parsedRow["category.name"] = row?.category?.name ?? "None";
    parsedRow["updated_at"] = row["updated_at"];
    parsedRow["identifier"] = row["uuid"];
    parsedRows.push(parsedRow);
  }

  console.log(parsedRows);
  return parsedRows;
};
