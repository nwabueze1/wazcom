import { FC, useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { MbmcBlock61Props } from "./types";
import { useMbmcBlock61Styles } from "./styles";
import clx from "classnames";
import { MbmcCard, OrderDialog } from "../../components";
import { getCurrency } from "../../../../utilities";
import { TAppState } from "../../../types";
import { CoreMenuFields, CoreMenuFields_menuCategories } from "../../models";

export const MbmcBlock61: FC<MbmcBlock61Props> = ({
  heading,
  description,
}) => {
  const { restaurant } = useSelector<TAppState, TAppState>((state) => state);
  const classes = useMbmcBlock61Styles();
  const [activeCategory, setActiveCategory] = useState<CoreMenuFields_menuCategories>();
  const [itemUuid, setItemUuid] = useState<string>();

  const menu = restaurant?.menu as CoreMenuFields;

  const categoryItems = useMemo(
    () =>
      menu?.menuItems?.filter(
        (item) => item?.menuCategory?.id.toString() === activeCategory?.id?.toString(),
      ),
    [activeCategory?.id],
  );

  useEffect(() => {
    const { menuCategories } = menu;
    const queryParams = new URLSearchParams(window.location.search);
    let activeMenuCategory = menuCategories.length > 0 ? menuCategories[0] : undefined;

    if (queryParams.get("category_uuid")) {
      activeMenuCategory = menuCategories.find(
        (category: any) => category.uuid === queryParams.get("category_uuid"),
      );
    }

    menuCategories.length > 0 && setActiveCategory(activeMenuCategory ?? menuCategories[0]);
  }, []);

  const displayCategories = () =>
    menu?.menuCategories?.map(({ title, id, uuid }, index) => (
      <div
        key={index}
        className={clx(
          classes.block61Category,
          id.toString() === activeCategory?.id?.toString() && classes.block61CategoryActive,
        )}
        onClick={() => {
          handleCategoryChange({ title, id: String(id), uuid });
        }}
      >
        {title}
      </div>
    ));

  const displayItems = () =>
    categoryItems?.map(({ uuid, name, description, image_url, price }, index) => (
      <MbmcCard
        key={index}
        heading={
          <div className={classes.block61ItemHeading}>
            <p>{name}</p>{" "}
            <p className={classes.block61ItemPrice}>
              {getCurrency(menu?.restaurant?.bank_info?.currency ?? "")}
              {price}
            </p>
          </div>
        }
        description={description}
        image={image_url ?? ""}
        className={classes.block61Item}
        url={name}
        handleClick={(route: string) => {
          console.log(route);
          setItemUuid(uuid);
        }}
      />
    ));

  const handleCategoryChange = (category: CoreMenuFields_menuCategories) => {
    setActiveCategory(category);
  };

  return (
    <div className={classes.root} id="menu">
      <div className={classes.block61Container}>
        <h3 className={classes.block61Title}>{heading}</h3>
        <p className={classes.block61Description}>{description}</p>

        {categoryItems && categoryItems?.length > 0 && (
          <>
            <div className={classes.block61Categories}>{displayCategories()}</div>
            <div className={classes.block61Items}>{displayItems()}</div>
          </>
        )}
        <OrderDialog
          itemUuid={itemUuid}
          handleClose={() => {
            setItemUuid(undefined);
          }}
        />
      </div>
    </div>
  );
};
