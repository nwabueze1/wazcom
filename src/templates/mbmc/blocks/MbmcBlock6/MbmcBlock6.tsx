import { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { useMbmcBlock6Styles } from "./styles";
import { MbmcBlock6Props, TCategory } from "./types";
import { MbmcCard } from "../../../../templates/mbmc/components/MbmcCard";
import clx from "classnames";
import { handleElementClick } from "../../utilities";
import { TAppState } from "../../../types";
import { CoreMenuFields } from "../../models";

export const MbmcBlock6: FC<MbmcBlock6Props> = ({
  mode = "view",
  activeElement,
  handleClick,
  index,
  heading,
  description,
}) => {
  const classes = useMbmcBlock6Styles();
  const { restaurant } = useSelector<TAppState, TAppState>((state) => state);
  const categories = useMemo(() => {
    const menu = restaurant?.menu as CoreMenuFields;
    const menuCategories = menu?.menuCategories as unknown as TCategory[];

    const parsedCategories = [];

    for (const category of menuCategories) {
      const parsedCategory: any = {
        heading: category?.title,
        image: category["menuItems"][0]["image_url"],
        ctas: [
          {
            text: "Order now",
            size: "sm",
            url: `/menu?category_uuid=${category.uuid}#menu`,
          },
        ],
      };
      parsedCategories.push(parsedCategory);
    }

    return parsedCategories;
  }, []);

  const displayCategories = () =>
    categories.map((category, index) => (
      <MbmcCard key={index} {...category} mode={mode} handleClick={handleClick} />
    ));

  return (
    <div className={classes.root}>
      <div className={classes.block6Container}>
        <div className={classes.block6Content}>
          <h3
            className={clx(
              classes.block6Heading,
              activeElement === `${String(index)}.heading` && classes.block6ActiveElement,
            )}
            onClick={() => handleElementClick(mode, `${String(index)}.heading`, handleClick)}
          >
            {heading}
          </h3>
          <p
            className={clx(
              classes.block6Description,
              activeElement === `${String(index)}.description` && classes.block6ActiveElement,
            )}
            onClick={() => handleElementClick(mode, `${String(index)}.description`, handleClick)}
          >
            {description}
          </p>
        </div>
        <div
          className={clx(
            classes.block6ScrollContainer,
            activeElement === `${String(index)}.menu_uuid` && classes.block6ActiveElement,
          )}
          onClick={() => handleElementClick(mode, `${String(index)}.menu_uuid`, handleClick)}
        >
          {displayCategories()}
        </div>
      </div>
    </div>
  );
};
