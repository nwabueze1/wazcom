import { FC } from "react";
import { TagProps } from "./types";
import { useTagStyles } from "./styles";
import clx from "classnames";
import { capitalize } from "./helpers";
import { FaTimes } from "react-icons/fa";

export const Tag: FC<TagProps> = ({ name, status, handleRemove }) => {
    const classes = useTagStyles();

    return (
        <div
            className={clx(
                classes.root,
                status ? classes.tagActive : classes.tagInactive,
                handleRemove && classes.taggable,
            )}
        >
            <p>{capitalize(name)}</p>
            {handleRemove && (
                <p className={classes.tagIconParent} onClick={handleRemove}>
                    <FaTimes />
                </p>
            )}
        </div>
    );
};
