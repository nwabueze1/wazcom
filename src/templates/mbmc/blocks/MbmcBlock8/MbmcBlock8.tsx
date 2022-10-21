import { useMbmcBlock8Styles } from "./styles";
import { menuData } from "./data";
import { MenuCard } from "templates/mbmc/components/MenuCard";
import { TestimonialCard } from "templates/mbmc/components/TestimonialCard";
import { Carousel2 } from "core/Carousel2";

export const MbmcBlock8 = () => {
    const classes = useMbmcBlock8Styles();

    return (
        <div className={classes.root}>
            <div className={classes.headerContent}>
                <h3 className={classes.headerTitle}>Testimonial</h3>
                <p className={classes.headerDescription}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed <br />
                    diam nonumy eirmod tempor invidunt ut labore et dolore a….
                </p>
            </div>
            <div className={classes.headerCardContainer}>
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
                />
            </div>
        </div>
    );
};
