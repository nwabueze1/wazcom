import { useMbmcBlock7Styles } from "./styles";
import clx from "classnames";
import { FC, useEffect, useMemo, useState } from "react";
import { MbmcBlock7Props } from "./types";
import { LazyImage } from "../../../../core";
import { GET_INSTAGRAM_IMAGES } from "./graphql";
import { createApolloClient } from "../../../../helpers/graphQL";
import { useQuery } from "@apollo/client";

export const MbmcBlock7: FC<MbmcBlock7Props> = ({
    heading,
    description,
    images = [],
    services,
    integratedService,
    site_uuid,
}) => {
    const classes = useMbmcBlock7Styles();
    const client = useMemo(
        () => createApolloClient(services ? services[integratedService] : ""),
        [],
    );
    const { data } = useQuery(GET_INSTAGRAM_IMAGES, {
        client,
        variables: {
            uuid: site_uuid,
            platform: "Instagram",
            sociable_type: "site",
        },
    });
    const [instagramImages, setInstagramImages] = useState([]);

    useEffect(() => {
        if (data) {
            setInstagramImages(data.getInstagramImages.images);
        }
    }, [data]);

    return (
        <div className={classes.root}>
            <div className={classes.headerContent}>
                <h3 className={classes.headerTitle}>{heading}</h3>
                <p className={classes.headerDescription}>{description}</p>
            </div>
            <div className={classes.mobileCardContainer}>
                {([] as string[])
                    .concat(instagramImages.length > 0 ? instagramImages : images)
                    .map((image, idx) => (
                        <LazyImage key={idx} src={image} className={clx(classes.imageContainer)} />
                    ))}
            </div>
        </div>
    );
};
