import { useMbmcBlock4Styles } from "./styles";
import { Card } from "templates/mbmc/components/Card";
import { FC } from "react";
import { MbmcBlock4Props } from "./types";

export const MbmcBlock4: FC<MbmcBlock4Props> = ({ style, heading, description, cards }) => {
    const classes = useMbmcBlock4Styles();

    const displayCards = () => (cards ?? []).map((card, index) => <Card key={index} {...card} />);

    return (
        <div className={classes.root}>
            <div className={classes.headerContent}>
                <h3 className={classes.headerTitle}>{heading}</h3>
                <p className={classes.headerDescription}>{description}</p>
            </div>
            <div className={classes.headerCardContainer}>
                {displayCards()}
            </div>
        </div>
    );
};
