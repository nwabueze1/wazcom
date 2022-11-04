import { useMbmcBlock8Styles } from "./styles";
import { menuData } from "./data";
import { TestimonialCard } from "templates/mbmc/components/TestimonialCard";
import { Carousel2 } from "core/Carousel2";
import { FC } from "react";
import { MbmcBlock8Props } from "./types";

export const MbmcBlock8: FC<MbmcBlock8Props> = () => {
    const classes = useMbmcBlock8Styles();

    return (
        <div className={classes.root}>
            <div className={classes.headerContent}>
                <h3 className={classes.headerTitle}>Testimonial</h3>
                <p className={classes.headerDescription}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                </p>
            </div>
            <div className={classes.headerCardContainer}>
                <Carousel2
                    classNames={{ button: classes.navigationButton }}
                    items={menuData.map((menu, idx) => ({
                        component: (
                            <div className={classes.carouselComponent}>
                                <TestimonialCard
                                    key={idx}
                                    text={menu.text}
                                    author={menu.author}
                                    type={menu.type}
                                />
                                <TestimonialCard
                                    key={idx}
                                    text={menu.text}
                                    author={menu.author}
                                    type={menu.type}
                                />
                            </div>
                        ),
                    }))}
                    className={classes.carousel}
                />
            </div>
            <div className={classes.headerCardContainerMobile}>
                <Carousel2
                    items={menuData.map((menu, idx) => ({
                        component: (
                            <div className={classes.carouselComponent}>
                                <TestimonialCard
                                    key={idx}
                                    text={menu.text}
                                    author={menu.author}
                                    type={menu.type}
                                />
                            </div>
                        ),
                    }))}
                    className={classes.carousel}
                    classNames={{ button: classes.navigationButton, arrow: classes.arrow }}
                />
            </div>
        </div>
    );
};
