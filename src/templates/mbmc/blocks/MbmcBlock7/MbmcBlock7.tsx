import { useMbmcBlock7Styles } from "./styles";
import { menuData } from "./data";
import clx from "classnames";

export const MbmcBlock7 = () => {
    const classes = useMbmcBlock7Styles();

    return (
        <div className={classes.root}>
            <div className={classes.headerContent}>
                <h3 className={classes.headerTitle}>Lorem Ipsum Dolor Sit.</h3>
                <p className={classes.headerDescription}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed <br />
                    diam nonumy eirmod tempor invidunt ut labore et dolore a….
                </p>
            </div>
            <div className={classes.headerCardContainer}>
                {menuData
                    .filter((_, idx) => idx < 5)
                    .map((menu, idx) => (
                        <img
                            key={idx}
                            src={menu.imageUrl}
                            className={clx(classes.imageContainer, idx === 4 && classes.flexGrow)}
                        />
                    ))}
            </div>
            <div className={classes.mobileCardContainer}>
                {menuData.map((menu, idx) => (
                    <img key={idx} src={menu.imageUrl} className={clx(classes.imageContainer)} />
                ))}
            </div>
        </div>
    );
};
