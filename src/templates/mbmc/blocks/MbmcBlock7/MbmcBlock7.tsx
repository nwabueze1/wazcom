import { FC, useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useMbmcBlock7Styles } from "./styles";
import clx from "classnames";
import { MbmcBlock7Props } from "./types";
import { LazyImage } from "../../../../core";
import { GET_INSTAGRAM_IMAGES } from "./graphql";
import { createApolloClient } from "../../../../helpers/graphQL";
import { useQuery } from "@apollo/client";
import { handleElementClick } from "../../utilities";
import { TAppState } from "../../../types";

export const MbmcBlock7: FC<MbmcBlock7Props> = ({
  mode = "view",
  activeElement = "",
  handleClick,
  index,
  heading,
  description,
  images = [],
  site_uuid,
}) => {
  const { gatewayUrl } = useSelector<TAppState, TAppState>((state) => state);
  const classes = useMbmcBlock7Styles();
  const client = useMemo(() => createApolloClient(gatewayUrl ?? ""), []);
  const { data, loading } = useQuery(GET_INSTAGRAM_IMAGES, {
    client,
    variables: {
      uuid: site_uuid,
      platform: "Instagram",
      sociable_type: "site",
    },
  });
  const [instagramImages, setInstagramImages] = useState<string[]>([]);

  useEffect(() => {
    if (data) {
      setInstagramImages(() => {
        const images: string[] = data.getInstagramImages.images;
        return images.filter((image) => {
          const imageFileTypes = ["jpeg", "jpg", "gif", "png"];
          const imageUrl = image.split("?")[0];
          const ext = imageUrl.substring(imageUrl.lastIndexOf(".") + 1);
          return imageFileTypes.includes(ext);
        });
      });
    }
  }, [data]);

  return (
    <div className={classes.root}>
      <div className={classes.headerContent}>
        <h3
          className={clx(
            classes.headerTitle,
            activeElement === `${String(index)}.heading` && classes.block7ActiveElement,
          )}
          onClick={() => handleElementClick(mode, `${String(index)}.heading`, handleClick)}
        >
          {heading}
        </h3>
        <p
          className={clx(
            classes.headerDescription,
            activeElement === `${String(index)}.description` && classes.block7ActiveElement,
          )}
          onClick={() => handleElementClick(mode, `${String(index)}.description`, handleClick)}
        >
          {description}
        </p>
      </div>
      <div className={classes.mobileCardContainer}>
        {!loading ? (
          instagramImages.length > 0 ? (
            instagramImages
              .slice(0, 9)
              .map((image, idx) => (
                <LazyImage
                  key={idx}
                  src={image}
                  mode={mode}
                  className={clx(classes.imageContainer)}
                />
              ))
          ) : (
            images.map((image, idx) => (
              <LazyImage key={idx} src={image} className={clx(classes.imageContainer)} />
            ))
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
