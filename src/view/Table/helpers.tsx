import { TableColumn, TableConditionFilter } from "../../core/TableNew";

export const getTableRows = (data: any[], classes?: any) => {
    const parsedRows: { [key: string]: JSX.Element | string | number }[] = [];

    for (const row of data) {
        const parsedRow: { [key: string]: JSX.Element | string | number } = {};
        parsedRow["title"] = <p style={{ fontWeight: 'bold' }}>{row["title"]}kskk</p>;
        parsedRow["author.name"] = row["author"]["name"];
        parsedRow["likes"] = Number((Math.random() * 1000).toFixed(0));
        parsedRow["category.name"] = row?.category?.name ?? "None";
        parsedRow["updated_at"] = row["updated_at"];
        parsedRows.push(parsedRow);
    }

    return parsedRows;
};


export const tableColumns: TableColumn[] = [
    { name: "Title", key: "title", type: "string" },
    { name: "Author", key: "author.name", type: "string" },
    { name: "Likes", key: "likes", type: "number" },
    { name: "Category", key: "category.name", type: "string" },
    { name: "Last Modified", key: "updated_at", type: "date" },
]

export const tableConditionFilters: TableConditionFilter[] = [
    { name: "All Posts", condition: (posts: any) => posts },
    {
        name: "Published",
        condition: (posts: any) => posts.filter((post: any) => post.status),
    },
    {
        name: "Drafted",
        condition: (posts: any) => posts.filter((post: any) => !post.status),
    },
]
