import { useMbmcBlock4Styles } from "./styles";
import { MbmcCard } from "../../../../templates/mbmc/components/MbmcCard";
import { FC } from "react";
import { MbmcBlock4Props } from "./types";
import clx from "classnames";
import { handleElementClick } from "../../utilities";

export const MbmcBlock4: FC<MbmcBlock4Props> = ({
    mode = "view",
    index,
    activeElement = "",
    handleClick,
    heading,
    description,
    cards,
}) => {
    const classes = useMbmcBlock4Styles();

    const displayCards = () => {
        return (cards ?? []).map((card, cardIndex) => {
            const parentKey = String(index) + ".cards." + String(cardIndex);
            return (
                <MbmcCard
                    key={cardIndex}
                    {...card}
                    parentKey={parentKey}
                    mode={mode}
                    activeElement={activeElement}
                    handleClick={handleClick}
                    className={classes.block4Card}
                    classNames={{ heading: classes.block4CardHeading }}
                />
            );
        });
    };

    return (
        <div className={classes.root}>
            <div className={classes.block6Container}>
                <div className={classes.block4Content}>
                    <h3
                        className={clx(
                            classes.block4Heading,
                            activeElement === `${String(index)}.heading` &&
                                classes.block4ActiveElement,
                        )}
                        onClick={() => {
                            handleElementClick(mode, `${String(index)}.heading`, handleClick);
                        }}
                    >
                        {heading}
                    </h3>
                    <p
                        className={clx(
                            classes.block4Description,
                            activeElement === `${String(index)}.description` &&
                                classes.block4ActiveElement,
                        )}
                        onClick={() => {
                            handleElementClick(mode, `${String(index)}.description`, handleClick);
                        }}
                    >
                        {description}
                    </p>
                </div>
                <div className={classes.block4CardContainer}>{displayCards()}</div>
            </div>
        </div>
    );
};
