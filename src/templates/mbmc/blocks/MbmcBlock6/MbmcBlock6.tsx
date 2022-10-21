import { useMbmcBlock6Styles } from "./styles";
import { ServiceCard } from "templates/mbmc/components/ServiceCard";
import { menuData } from "./data";
import { MenuCard } from "templates/mbmc/components/MenuCard";

export const MbmcBlock6 = () => {
    const classes = useMbmcBlock6Styles();

    return (
        <div className={classes.root}>
            <div className={classes.headerContent}>
                <h3 className={classes.headerTitle}>Explore Our Menu</h3>
                <p className={classes.headerDescription}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed <br />
                    diam nonumy eirmod tempor invidunt ut labore et dolore a….
                </p>
            </div>
            <div className={classes.scrollContainer}>
                <div className={classes.headerCardContainer}>
                    {menuData.map((menu, idx) => (
                        <MenuCard
                            key={idx}
                            image_url={menu.imageUrl}
                            name={menu.name}
                            description={menu.description}
                            price={menu.price}
                            startPrice={menu.startPrice}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
