import { FC } from "react";
import { EmptyStateProps } from "./types";
import { useEmptyStateStyles } from "./styles";
import clx from "classnames";

export const EmptyStateV2: FC<EmptyStateProps> = ({
  heading,
  message = "There is no information to display",
  image = "https://sytbuildr.s3.eu-west-2.amazonaws.com/blog+illustration.svg",
}) => {
  const classes = useEmptyStateStyles();

  return (
    <div className={classes.root}>
      <div className={classes.emptyContainer}>
        <img src={image} alt="Empty Table" />
        {heading && <p className={clx(classes.emptyHeading, "v2")}>{heading}</p>}
        <p className={clx(classes.emptyMessage, "v2")}>{message}</p>
      </div>
    </div>
  );
};
