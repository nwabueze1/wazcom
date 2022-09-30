import React from "react";
import clx from "classnames";
import { CoreMenuFields } from "templates/restaurant/types/CoreMenuFields";
import { CoreMenuItemFields } from "templates/restaurant/types/CoreMenuItemFields";
import { useMenuCategoryStyles } from ".";

export const useDisplayCategories = () => {
    return (
        activeMenu: CoreMenuFields,
        activeCategory: number,
        setActiveCategory: (index: number) => void,
        searchValue?: string,
    ) => {
        const classes = useMenuCategoryStyles();

        const categories =
            searchValue && searchValue.length > 0
                ? Object.keys(findCategories(activeMenu, searchValue))
                : [...(activeMenu?.activeMenuCategories?.map((category) => category?.title) ?? [])];

        return categories?.map((category, index) => {
            return (
                <div
                    key={index}
                    className={clx(
                        classes.restaurantCategory,
                        activeCategory === index && classes.active,
                    )}
                    onClick={() => setActiveCategory(index)}
                >
                    <p
                        className={`${classes.restaurantMenuCategory} ${
                            activeCategory === index && classes.textActive
                        }`}
                    >
                        <a
                            href={`#${category.toLowerCase()}`}
                            className={clx(
                                activeCategory === index
                                    ? classes.textActive
                                    : classes.categoryLink,
                            )}
                        >
                            {category}
                        </a>
                    </p>
                </div>
            );
        });
    };
};

export const findCategories = (menu: CoreMenuFields, searchValue: string) => {
    const menuItems = (menu?.activeMenuItems as CoreMenuItemFields[]).filter((menuItem) =>
        menuItem.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
    const categories = [...new Set(menuItems.map((menuItem) => menuItem?.menuCategory?.title))];
    const response: { [key: string]: CoreMenuItemFields[] } = {};
    categories.forEach((category) => {
        response[category as string] = menuItems.filter(
            (menuItem) => menuItem?.menuCategory?.title.toString() === category?.toString(),
        );
    });
    return response;
};

export const scroll = (
    scrollOffset: number,
    ref: React.MutableRefObject<HTMLDivElement | null>,
) => {
    if (ref.current) ref.current.scrollLeft += scrollOffset;
};
