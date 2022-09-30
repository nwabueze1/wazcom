import React, { useCallback, useState, useEffect, useRef } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useMenuCategoryStyles } from "./styles";
import { useDisplayCategories } from "./helpers";
import { scroll } from "./helpers";
import { CoreMenuFields } from "templates/restaurant/types/CoreMenuFields";
import { CoreFosFields } from "templates/restaurant/types/CoreFosFields";

export const MenuCategories = (content: CoreFosFields) => {
    const classes = useMenuCategoryStyles();
    const displayCategoriesHook = useDisplayCategories();
    const { restaurant } = content;
    const [activeMenu, setActiveMenu] = useState<CoreMenuFields | null>(null);
    const [activeCategory, setActiveCategory] = useState(0);
    const categoryRef = useRef(null);
    const [scrollProps, setScrollProps] = useState<{ [key: string]: number }>({
        scrollWidth: 0,
        offsetWidth: 0,
    });
    const menus = [...(restaurant.activeMenus as CoreMenuFields[])];

    const isScrollable = categoryRef?.current && scrollProps?.scrollWidth > scrollProps.offsetWidth;

    useEffect(() => {
        setScrollProps(() => {
            return {
                scrollWidth: categoryRef.current?.["scrollWidth"] ?? 0,
                offsetWidth: categoryRef.current?.["offsetWidth"] ?? 0,
            };
        });
        if (menus && menus.length > 0) setActiveMenu(menus[0]);
    }, [categoryRef.current]);

    const displayCategories = useCallback(
        () =>
            displayCategoriesHook(activeMenu as CoreMenuFields, activeCategory, setActiveCategory),
        [activeMenu, activeCategory],
    );

    return (
        <div className={classes.categoryParent}>
            <div className={classes.categoryContainer}>
                {categoryRef.current && isScrollable && (
                    <ArrowBackIos
                        onClick={() => scroll(-200, categoryRef)}
                        className={classes.categoryArrow}
                    />
                )}
                <div ref={categoryRef} className={classes.menuCategories}>
                    {displayCategories()}
                </div>
                {categoryRef.current && isScrollable && (
                    <ArrowForwardIos onClick={() => scroll(200, categoryRef)} />
                )}
            </div>
        </div>
    );
};
