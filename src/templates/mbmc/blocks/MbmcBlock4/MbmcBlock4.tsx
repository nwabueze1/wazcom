import { useMbmcBlock4Styles } from "./styles";
import { ServiceCard } from "templates/mbmc/components/ServiceCard";
import { services } from "./data";
import { FC } from "react";
import { MbmcBlock4Props } from "./types";

export const MbmcBlock4: FC<MbmcBlock4Props> = ({ style }) => {
    const classes = useMbmcBlock4Styles();

    return (
        <div className={classes.root}>
            <div className={classes.headerContent}>
                <h3 className={classes.headerTitle}>Our Premium Services</h3>
                <p className={classes.headerDescription}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed <br />
                    diam nonumy eirmod tempor invidunt ut labore et dolore a….
                </p>
            </div>
            <div className={classes.headerCardContainer}>
                {services.map((service, idx) => (
                    <ServiceCard
                        key={idx}
                        image_url={service.imageUrl}
                        name={service.name}
                        description={service.description}
                    />
                ))}
            </div>
        </div>
    );
};
