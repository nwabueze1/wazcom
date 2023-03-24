import { BsArrowRight } from "react-icons/bs";
import { useMbmbcStyles } from "../../mbmc/styles";
import { MbmcBlock1 } from "templates/mbmc/blocks/MbmcBlock1/MbmcBlock1";
import { MbmcBlock13 } from "templates/mbmc/blocks/MbmcBlock13/MbmcBlock13";

export const Mbmc = () => {
  const classes = useMbmbcStyles();

  return (
    <>
      <MbmcBlock13
        logo={{
          src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/Logo%402x.png",
          url: "/",
        }}
        links={[
          { text: "About us", url: "/about" },
          { text: "Menus", url: "/menu" },
          { text: "Contact us", url: "/contact-us" },
        ]}
        ctas={[
          {
            text: "Order now",
            handleClick: () => console.log("clicked"),
          },
        ]}
        site_uuid={"896466aa-bacc-4817-b577-436a52540eff"}
        handleClick={() => null}
      />
      <MbmcBlock1
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
    </>
  );
};
