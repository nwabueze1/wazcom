import { useMbmcBlock4Styles } from "./styles";
import { Card } from "templates/mbmc/components/Card";
import { FC } from "react";
import { MbmcBlock4Props } from "./types";

export const MbmcBlock4: FC<MbmcBlock4Props> = ({ style, heading, description, cards }) => {
    const classes = useMbmcBlock4Styles();

    const displayCards = () => (cards ?? []).map((card, index) => <Card key={index} {...card} />);

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
