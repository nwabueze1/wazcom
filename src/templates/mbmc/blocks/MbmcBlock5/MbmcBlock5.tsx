import { useMbmcBlock5Styles } from "./styles";
import { footerData } from "./data";
import { FC } from "react";
import { MbmcBlock5Props } from "./types";

export const MbmcBlock5: FC<MbmcBlock5Props> = ({ logo, sections }) => {
    const classes = useMbmcBlock5Styles();

    return (
        <div className={classes.mbmcContainer}>
            <div className={classes.root}>
                <div className={classes.footerContainer}>
                    <div className={classes.logoContainer}>
                        <img src={logo} alt="footer logo" />
                    </div>
                    {sections?.map((footer, idx) => (
                        <div key={idx} className={classes.listContainer}>
                            <p className={classes.footerTitle}>{footer.heading}</p>
                            <div className={classes.footerLinks}>
                                {footer.links.map((link, listIdx) => (
                                    <a key={listIdx} href={link.url} className={classes.footerList}>
                                        {link.heading}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <p className={classes.footerNote}>
                <span>
                    2022 © All rights reserved . Mrbaker & Mrs cook . Proudly created by Hivedeck
                </span>
            </p>
        </div>
    );
};
