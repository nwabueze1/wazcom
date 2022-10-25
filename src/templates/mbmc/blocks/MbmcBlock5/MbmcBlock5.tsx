import { useMbmcBlock5Styles } from "./styles";
import { footerData } from "./data";
import { FC } from "react";
import { MbmcBlock4Props } from "../MbmcBlock4/types";
import { MbmcBlock5Props } from "./types";

export const MbmcBlock5: FC<MbmcBlock5Props> = ({style}) => {
    const classes = useMbmcBlock5Styles();

    return (
        <div className={classes.mbmcContainer}>
            <div className={classes.root}>
                <div className={classes.footerContainer}>
                    <div className={classes.logoContainer}>
                        <img
                            src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/chefLogo.svg"
                            alt="footer logo"
                        />
                    </div>
                    {footerData.map((footer, idx) => (
                        <div key={idx} className={classes.listContainer}>
                            <p className={classes.footerTitle}>{footer.title}</p>
                            {footer.lists.map((list, listIdx) => (
                                <p key={listIdx} className={classes.footerList}>
                                    {list}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <p className={classes.footerNote}>
                2022 © All rights reserved . Mrbaker & Mrs cook . Proudly created by Hivedeck
            </p>
        </div>
    );
};
