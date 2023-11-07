import { createApolloClient, GET_BLOG_POSTS } from "../../helpers/graphQL";
import { TableNew, Button } from "../../core";
import { tableColumns, tableConditionFilters } from "./helpers";
import { useTableStyles } from "./styles";
import { getTableRows } from "stories/table";

export const TableView = () => {
  const classes = useTableStyles();

  return (
    <div className={classes.root}>
      <div className={classes.viewHeader}>
        <p className={classes.viewTitle}>Table</p>
        <p className={classes.viewDescription}>
          The table is recognized as one of the clearest and most efficient forms of presentation
          data. It is often used in conjunction with other interface elements such as sorting,
          searching, filtering, and paging, and is suitable for information collection and display,
          data analysis and induction, and manipulation of structured data. Its structure is simple,
          its separation and induction are clear, the information is easier to compare, and the
          user’s receiving efficiency and understanding of the information is greatly improved.
        </p>
      </div>

      <div className={classes.viewOptions}>
        <Button className={classes.viewOptionsButtons}>Description</Button>
      </div>

      <TableNew
        columns={tableColumns}
        getRows={getTableRows}
        query={{
          name: GET_BLOG_POSTS,
          client: createApolloClient("https://ploutonion.hivedeck.com/graphql"),
          variables: { blog_uuid: "28c2de0d-fb9f-4e80-b106-86d1af53defc" },
          dataKey: "getPostsByBlogUuid",
        }}
        conditionFilters={tableConditionFilters}
        showFilters={true}
        emptyState={{
          message: "You currently do not have any posts created yet",
        }}
      />
    </div>
  );
};
