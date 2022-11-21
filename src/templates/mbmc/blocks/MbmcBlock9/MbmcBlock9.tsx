import { useMbmcBlock9Styles } from "./styles";
import { FC, useState } from "react";
import clx from "classnames";
import { MbmcBlock9Props } from "./types";
import { handleElementClick } from "../../utilities";

export const MbmcBlock9: FC<MbmcBlock9Props> = ({
    mode = "view",
    handleClick,
    activeElement,
    index,
    heading,
    description,
    steps,
}) => {
    const classes = useMbmcBlock9Styles();
    const [active, setActive] = useState(0);

    return (
        <div className={classes.root}>
            <div className={classes.headerContainer}>
                <div className={classes.textContainer}>
                    <div className={classes.headerContent}>
                        <h3
                            className={clx(
                                classes.headerTitle,
                                activeElement === `${String(index)}.heading` &&
                                    classes.block9ActiveElement,
                            )}
                            onClick={() => {
                                handleElementClick(mode, `${String(index)}.heading`, handleClick);
                            }}
                        >
                            {heading}
                        </h3>
                        <p
                            className={clx(
                                classes.headerDescription,
                                activeElement === `${String(index)}.description` &&
                                    classes.block9ActiveElement,
                            )}
                            onClick={() => {
                                handleElementClick(
                                    mode,
                                    `${String(index)}.description`,
                                    handleClick,
                                );
                            }}
                        >
                            {description}
                        </p>
                    </div>
                    <div className={classes.directionContainerMobile}>
                        <img
                            className={classes.imageStep}
                            src={steps[active].image}
                            alt={steps[active].heading}
                        />
                    </div>
                    <div className={classes.headerCardContainer}>
                        {steps.map((step, idx) => {
                            const key = String(index) + ".steps." + String(idx);
                            return (
                                <div
                                    onClick={() => setActive(idx)}
                                    key={idx}
                                    className={classes.pointContainer}
                                >
                                    <div
                                        className={clx(
                                            classes.point,
                                            active == idx && classes.activePoint,
                                        )}
                                    >
                                        {idx + 1}
                                    </div>
                                    <div className={classes.pointTextContainer}>
                                        <p
                                            className={clx(
                                                classes.pointTitle,
                                                active === idx && classes.activeTitle,
                                                activeElement === key + ".heading" &&
                                                    classes.block9ActiveElement,
                                            )}
                                            onClick={() => {
                                                handleElementClick(
                                                    mode,
                                                    key + ".heading",
                                                    handleClick,
                                                );
                                            }}
                                        >
                                            {step.heading}
                                        </p>
                                        <p
                                            className={clx(
                                                classes.pointDescription,
                                                activeElement === key + ".description" &&
                                                    classes.block9ActiveElement,
                                            )}
                                            onClick={() => {
                                                handleElementClick(
                                                    mode,
                                                    key + ".description",
                                                    handleClick,
                                                );
                                            }}
                                        >
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={classes.directionContainer}>
                    <img
                        src={steps[active].image}
                        alt={steps[active].heading}
                        className={clx(
                            classes.imageStep,
                            activeElement === `${String(index)}.steps.${String(active)}.image` &&
                                classes.block9ActiveElement,
                        )}
                        onClick={() => {
                            handleElementClick(
                                mode,
                                `${String(index)}.steps.${String(active)}.image`,
                                handleClick,
                            );
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
