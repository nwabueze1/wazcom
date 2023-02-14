import { FC } from "react";
import { EmptyStateProps } from "./types";
import { useEmptyStateStyles } from "./styles";

export const EmptyState: FC<EmptyStateProps> = ({
    heading,
    message = "There is no information to display",
}) => {
    const classes = useEmptyStateStyles();

    return (
        <div className={classes.root}>
            <div className={classes.emptyContainer}>
                <img
                    src="https://sytbuildr.s3.eu-west-2.amazonaws.com/blog+illustration.svg"
                    alt="Empty Table"
                />
                {heading && <p className={classes.emptyHeading}>{heading}</p>}
                <p className={heading ? classes.emptyMessage : classes.emptyMessagePadded}>
                    {message}
                </p>
            </div>
        </div>
    );
};
