import React from "react";
import { useMbmcBlock14Styles } from "./styles";
import { CartItems, Checkout } from "./components";
import { MbmcBlock14Props } from "./types";

export const MbmcBlock14: React.FC<MbmcBlock14Props> = ({ client, cart_uuid }) => {
    const classes = useMbmcBlock14Styles();

    return (
        <div className={classes.root}>
            <div className={classes.block14Container}>
                <CartItems />
                <span className={classes.block14Divider} />
                <Checkout />
            </div>
        </div>
    );
};
