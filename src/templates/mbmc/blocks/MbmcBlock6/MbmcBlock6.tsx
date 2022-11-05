import { FC, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useMbmcBlock6Styles } from "./styles";
import { MbmcBlock6Props } from "./types";
import { GET_MENU_BY_UUID } from "./graphql";
import { Card, CardProps } from "templates/mbmc/components/Card";

export const MbmcBlock6: FC<MbmcBlock6Props> = ({
    style,
    heading,
    description,
    client,
    menu_uuid,
}) => {
    const classes = useMbmcBlock6Styles();
    const [categories, setCategories] = useState<CardProps[]>([]);
    const { data, error } = useQuery(GET_MENU_BY_UUID, {
        client,
        variables: { uuid: menu_uuid },
    });

    useEffect(() => {
        if (data) {
            const {
                menu: { activeMenuCategories },
            } = data;
            const parsedCategories = [];

            for (const category of activeMenuCategories) {
                const parsedCategory: any = {
                    heading: category["title"],
                    image: category["menuItems"][0]["image_url"],
                    ctas: [{ text: "Order now", size: "sm" }],
                };
                parsedCategories.push(parsedCategory);
            }

            setCategories(parsedCategories);
        }
    }, [data, error]);

    const displayCategories = () =>
        categories.map((category, index) => <Card key={index} {...category} scrollableParent={true} />);

    return (
        <div className={classes.root}>
            <div className={classes.block6Container}>
                <div className={classes.block6Content}>
                    <h3 className={classes.block6Title}>{heading}</h3>
                    <p className={classes.block6Description}>{description}</p>
                </div>
                <div className={classes.block6ScrollContainer}>
                    {displayCategories()}
                </div>
            </div>
        </div>
    );
};
