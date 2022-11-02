import { useMbmcBlock10Styles } from "./styles";
import { FC } from "react";
import { MbmcBlock10Props } from "./types";

export const MbmcBlock10: FC<MbmcBlock10Props> = ({ tags }) => {
    const classes = useMbmcBlock10Styles();

    return (
        <div className={classes.root}>
            <div className={classes.menuContainer}>
                {tags.map((tag, idx) => {
                    return (
                        <p key={idx} className={`${tags.length - 1 !== idx && classes.border}`}>
                            <img src={tag.icon} alt={tag.text} /> {tag.text}
                        </p>
                    );
                })}
            </div>
        </div>
    );
};
