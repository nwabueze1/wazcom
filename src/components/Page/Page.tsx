import React from "react";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

export const Page = () => {
  const totalPages = 4;
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.description}>Pagination</Typography>
      <Typography className={classes.pageNumber}>
        Page: {`${page} of ${totalPages}`}
      </Typography>
      <Pagination count={4} page={page} onChange={handleChange} />
    </div>
  );
};
