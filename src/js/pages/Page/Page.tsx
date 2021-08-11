import React from "react";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

const Page = () => {
  const totalPage = 1;
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.pageNumber}>
        Page: {`${page} of ${totalPage}`}
      </Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </div>
  );

  return <div></div>;
};

export default Page;
