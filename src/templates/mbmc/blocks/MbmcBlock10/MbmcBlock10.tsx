import { useMbmcBlock10Styles } from "./styles";
import { FC } from "react";
import { MbmcBlock10Props } from "./types";

export const MbmcBlock10: FC<MbmcBlock10Props> = () => {
    const classes = useMbmcBlock10Styles();

    return (
        <div className={classes.root}>
            <div className={classes.menuContainer}>
                <p>
                    <img
                        src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/chefLogo.svg"
                        alt=""
                    />{" "}
                    EXPERTLY PREPARED
                </p>
                <p className={classes.border}>
                    {" "}
                    <img
                        src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/foodIcon.svg"
                        alt=""
                    />
                    FRESH & AUTHENTIC
                </p>
                <p>
                    {" "}
                    <img
                        src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/deliveryIcon.svg"
                        alt=""
                    />
                    UK WIDE DELIVERY
                </p>
            </div>
        </div>
    );
};
