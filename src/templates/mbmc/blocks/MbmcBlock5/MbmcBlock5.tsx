import { useMbmcBlock5Styles } from "./styles";
import { footerData } from "./data";

export const MbmcBlock5 = () => {
    const classes = useMbmcBlock5Styles();

    return (
        <>
            <div className={classes.root}>
                <div className={classes.footerContainer}>
                    <div className={classes.logoContainer}>
                        <img
                            src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/chefLogo.svg"
                            alt="footer logo"
                        />
                    </div>
                    {footerData.map((footer, idx) => (
                        <div key={idx}>
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
        </>
    );
};
