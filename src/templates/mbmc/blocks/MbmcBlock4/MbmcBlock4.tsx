import { useMbmcBlock4Styles } from "./styles";
import { MbmcCard } from "templates/mbmc/components/MbmcCard";
import { FC } from "react";
import { MbmcBlock4Props } from "./types";

export const MbmcBlock4: FC<MbmcBlock4Props> = ({ heading, description, cards }) => {
    const classes = useMbmcBlock4Styles();

    const displayCards = () =>
        (cards ?? []).map((card, index) => (
            <MbmcCard
                key={index}
                {...card}
                className={classes.block4Card}
                classNames={{ heading: classes.block4CardHeading }}
            />
        ));

    return (
        <div className={classes.root}>
            <div className={classes.block6Container}>
                <div className={classes.block4Content}>
                    <h3 className={classes.block4Title}>{heading}</h3>
                    <p className={classes.block4Description}>{description}</p>
                </div>
                <div className={classes.block4CardContainer}>{displayCards()}</div>
            </div>
        </div>
    );
};
