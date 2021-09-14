import { FC, useState, ChangeEvent } from "react";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { pageProps } from "./types";

export const Page: FC<pageProps> = () => {
  const totalPages = 4;
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const handleChange = (_: ChangeEvent<unknown>, value: number) => {
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
