import { useOurChefsStyles } from "./styles";
import { OurChefCard } from "Templates/Temp4/Component/OurChefCard/OurChef";
import { ourChefsData } from "Templates/Temp4/TemplateData";


export const OurChefs = () => {
  const classes = useOurChefsStyles();

  const displayOurChefs = () =>
    ourChefsData.map((chef, index) => {
      return  <OurChefCard name={chef.name} details={chef.details} key={index} img={{
        src: chef.img.src,
        alt: undefined
      }} />;
    });

  return (
    <div className={classes.root}>
        <p className={classes.header}>Meet Our Chefs</p>
      <div className={classes.chefs}>{displayOurChefs()}</div>
    </div>
  );
};
