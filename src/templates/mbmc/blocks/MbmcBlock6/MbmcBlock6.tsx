import { FC, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useMbmcBlock6Styles } from "./styles";
import { MbmcBlock6Props } from "./types";
import { GET_MENU_BY_UUID } from "./graphql";
import { MbmcCard, MbmcCardProps } from "../../../../templates/mbmc/components/MbmcCard";
import clx from "classnames";
import { handleElementClick } from "../../utilities";
import { createApolloClient } from "helpers/graphQL";

const client = createApolloClient('https://ofambegbe-ambrosia.wazobia.uk/graphql');

export const MbmcBlock6: FC<MbmcBlock6Props> = ({
    mode = "view",
    activeElement,
    handleClick,
    // services,
    // integratedService,
    index,
    heading,
    description,
    menu_uuid,
}) => {
    const classes = useMbmcBlock6Styles();
    const [categories, setCategories] = useState<MbmcCardProps[]>([]);
    // const client = useMemo(
    //     () => createApolloClient(services ? services[integratedService] : ""),
    //     [],
    // );
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
        categories.map((category, index) => <MbmcCard key={index} {...category} />);

    return (
        <div className={classes.root}>
            <div className={classes.block6Container}>
                <div className={classes.block6Content}>
                    <h3
                        className={clx(
                            classes.block6Heading,
                            activeElement === `${String(index)}.heading` &&
                                classes.block6ActiveElement,
                        )}
                        onClick={() =>
                            handleElementClick(mode, `${String(index)}.heading`, handleClick)
                        }
                    >
                        {heading}
                    </h3>
                    <p
                        className={clx(
                            classes.block6Description,
                            activeElement === `${String(index)}.description` &&
                                classes.block6ActiveElement,
                        )}
                        onClick={() =>
                            handleElementClick(mode, `${String(index)}.description`, handleClick)
                        }
                    >
                        {description}
                    </p>
                </div>
                <div
                    className={clx(
                        classes.block6ScrollContainer,
                        activeElement === `${String(index)}.menu_uuid` &&
                            classes.block6ActiveElement,
                    )}
                    onClick={() => handleElementClick(mode, `${String(index)}.menu_uuid`, handleClick) }
                >
                    {displayCategories()}
                </div>
            </div>
        </div>
    );
};
