import { BsArrowRight } from "react-icons/bs";
import { useMbmbcStyles } from "../../mbmc/styles";
import { MbmcBlock1 } from "templates/mbmc/blocks/MbmcBlock1/MbmcBlock1";
import { MbmcBlock3 } from "templates/mbmc/blocks/MbmcBlock3/MbmcBlock3";
import { MbmcBlock4 } from "templates/mbmc/blocks/MbmcBlock4/MbmcBlock4";
import { MbmcBlock5 } from "templates/mbmc/blocks/MbmcBlock5/MbmcBlock5";
import { MbmcBlock6 } from "templates/mbmc/blocks/MbmcBlock6/MbmcBlock6";
import { MbmcBlock7 } from "templates/mbmc/blocks/MbmcBlock7/MbmcBlock7";

export const Mbmc = () => {
    const classes = useMbmbcStyles();

    return (
        <>
            <MbmcBlock1
                style="mbmc"
                heading="From Our <br /> Kitchen <br /> To Your Table"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                image="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/home/hero-food.webp"
                ctas={[
                    {
                        text: "Order now",
                        rIcon: <BsArrowRight className={classes.mbmc1CtaIcon} />,
                    },
                    {
                        text: "Contact us",
                        variant: "SECONDARY",
                    },
                ]}
                mode="edit"
                handleClick={(route: string) => alert(route)}
                activeElement="MbmcBlock1.image"
            />
            {/* <MbmcBlock4 style="mbmc" />
            <MbmcBlock3 style="mbmc" />
            <MbmcBlock7 style="mbmc" />
            <MbmcBlock6 style="mbmc" />
            <MbmcBlock5 style="mbmc" /> */}
        </>
    );
};
