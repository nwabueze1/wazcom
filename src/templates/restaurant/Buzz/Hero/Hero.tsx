import { FC } from "react";
import { restaurantCoverImagePlaceholder } from "../../../../utilities";
import { useHeroStyles } from "./styles";
import { HeroProps } from "./types";
import clx from "classnames";

export const Hero: FC<HeroProps> = ({ className }) => {
    const classes = useHeroStyles();
    return (
        <div className={clx(className)}>
            <div className={classes.container}>
                <img
                    src={restaurantCoverImagePlaceholder}
                    alt=""
                    className={classes.restaurantCoverImg}
                />
            </div>
        </div>
    );
};
