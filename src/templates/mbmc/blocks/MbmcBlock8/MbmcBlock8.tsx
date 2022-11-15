import { useMbmcBlock8Styles } from "./styles";
import { TestimonialCard } from "../../../../templates/mbmc/components/TestimonialCard";
import { Carousel2 } from "../../../../core/Carousel2";
import { FC } from "react";
import { MbmcBlock8Props } from "./types";
import { sliceIntoChunks } from "../../../../utilities/mbmcblock";

export const MbmcBlock8: FC<MbmcBlock8Props> = ({ heading, description, cards }) => {
    const classes = useMbmcBlock8Styles();
    const splitData: {
        content: string;
        name: string;
        role: string;
    }[][] = sliceIntoChunks(cards, 2);

    return (
        <div className={classes.root}>
            <div className={classes.headerContainer}>
                <div className={classes.headerContent}>
                    <h3 className={classes.headerTitle}>{heading}</h3>
                    <p className={classes.headerDescription}>{description}</p>
                </div>
                <div className={classes.headerCardContainer}>
                    <Carousel2
                        classNames={{ button: classes.navigationButton }}
                        items={splitData.map((data) => {
                            return {
                                component: (
                                    <div className={classes.carouselComponent}>
                                        {data.map((item, idx) => {
                                            return (
                                                <TestimonialCard
                                                    key={idx}
                                                    text={item.content}
                                                    name={item.name}
                                                    type={item.role}
                                                />
                                            );
                                        })}
                                    </div>
                                ),
                            };
                        })}
                        className={classes.carousel}
                    />
                </div>
                <div className={classes.headerCardContainerMobile}>
                    <Carousel2
                        items={cards.map((item, idx) => ({
                            component: (
                                <div className={classes.carouselComponent}>
                                    <TestimonialCard
                                        key={idx}
                                        text={item.content}
                                        name={item.name}
                                        type={item.role}
                                    />
                                </div>
                            ),
                        }))}
                        className={classes.carousel}
                        classNames={{ button: classes.navigationButton, arrow: classes.arrow }}
                    />
                </div>
            </div>
        </div>
    );
};
