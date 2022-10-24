import { FC } from "react";
import { useRestaurantDetailsStyles } from "./styles";
import { GoMail } from "react-icons/go";
import { BiPhone } from "react-icons/bi";
import { getCurrency, menuImagePlaceholder } from "utilities/restaurant";
import { RestaurantDetailsProps } from "./types";

export const RestaurantDetails: FC<RestaurantDetailsProps> = ({ restaurant }) => {
    const classes = useRestaurantDetailsStyles();
    return (
        <div className={classes.detailsContainer}>
            <div className={classes.logoContainer}>
                <div className={classes.logoWrapper}>
                    <img
                        src={restaurant.restaurant.cover_image ?? menuImagePlaceholder}
                        alt=""
                        className={classes.logoImg}
                    />
                </div>
            </div>
            <div className={classes.locationParent}>
                <p className={classes.restaurantLocation}>
                    <p>{restaurant.restaurant?.name}&nbsp;</p>&#45;
                    <span>&nbsp;{restaurant.restaurant?.location?.state}</span>
                </p>
                <div className={classes.restaurantDetails}>
                    <div className={classes.openingTime}>
                        <span className={classes.bullet} />
                        <p>Open: {restaurant.restaurant.openingTimes}</p>
                    </div>
                    <div className={classes.openingDetails}>
                        <span className={classes.bullet} />
                        <p>
                            Delivery fee:{" "}
                            {getCurrency(restaurant.restaurant.bank_info?.currency as string)}{" "}
                            {restaurant.restaurant.bank_info?.delivery_fee}
                        </p>
                    </div>
                    <div className={classes.openingDetails}>
                        <GoMail className={classes.detailsIcon} />
                        <a
                            className={classes.mailLink}
                            href={`mailto:${restaurant.restaurant.email}`}
                        >
                            {restaurant.restaurant.email}
                        </a>
                    </div>
                    <div className={classes.openingDetails}>
                        <BiPhone className={classes.detailsIcon} />
                        <a href="tel:{restaurant.phone}" className={classes.mailLink}>
                            {restaurant.restaurant.phone}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
