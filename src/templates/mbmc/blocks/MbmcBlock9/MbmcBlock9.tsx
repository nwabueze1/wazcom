import { useMbmcBlock9Styles } from "./styles";
import { menuData } from "./data";
import { useState } from "react";
import clx from "classnames";

export const MbmcBlock9 = () => {
    const classes = useMbmcBlock9Styles();
    const [active, setActive] = useState(0);

    return (
        <div className={classes.root}>
            <div className={classes.textContainer}>
                <div className={classes.headerContent}>
                    <h3 className={classes.headerTitle}>How It Works</h3>
                    <p className={classes.headerDescription}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed{" "}
                        <br className={classes.mobileHide} />
                        diam nonumy eirmod tempor invidunt ut labore et dolore a….
                    </p>
                </div>
                <div className={classes.directionContainerMobile}>
                    <div className={classes.directions}>
                        <img
                            src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/direction1.svg"
                            alt="location"
                            className={classes.imgDirection1}
                        />
                        <img
                            src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/direction2.svg"
                            alt="location"
                            className={classes.imgDirection2}
                        />
                        <img
                            src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/direction3.svg"
                            alt="location"
                            className={classes.imgDirection3}
                        />
                        <img
                            src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/direction4.svg"
                            alt="location"
                            className={classes.imgDirection4}
                        />
                    </div>
                </div>
                <div className={classes.headerCardContainer}>
                    {menuData.map((menu, idx) => (
                        <div
                            onClick={() => setActive(idx)}
                            key={idx}
                            className={classes.pointContainer}
                        >
                            <div
                                className={clx(classes.point, active == idx && classes.activePoint)}
                            >
                                {idx + 1}
                            </div>
                            <div className={classes.pointTextContainer}>
                                <p
                                    className={clx(
                                        classes.pointTitle,
                                        active === idx && classes.activeTitle,
                                    )}
                                >
                                    {menu.title}
                                </p>
                                <p className={classes.pointDescription}>{menu.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={classes.directionContainer}>
                <div className={classes.directions}>
                    <img
                        src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/direction1.svg"
                        alt="location"
                        className={classes.imgDirection1}
                    />
                    <img
                        src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/direction2.svg"
                        alt="location"
                        className={classes.imgDirection2}
                    />
                    <img
                        src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/direction3.svg"
                        alt="location"
                        className={classes.imgDirection3}
                    />
                    <img
                        src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/direction4.svg"
                        alt="location"
                        className={classes.imgDirection4}
                    />
                </div>
            </div>
        </div>
    );
};
