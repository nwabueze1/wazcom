import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { ContactUsForm } from "Templates/Temp4/Component/ContactUsForm";
import { contactHeroData } from "Templates/Temp4/TemplateData";
import { Hero } from "../Menu/Hero/Hero";
import { useContactUsStyles } from "./styles";

export const ContactUs = () => {
  const classes = useContactUsStyles();
  return (
    <div className={classes.root}>
      <Hero heroData={contactHeroData} />
      <div className={classes.container}>
        <div className={classes.contactDetails}>
          <p className={classes.header}>Contact us</p>
          <p className={classes.info}>
            <p>2 W 25rd St, New York, NY 10019, USA</p>
            <p>+1 981-344-1230</p>
            <p> +1 230-555-1230</p>
          </p>
        </div>
        <div className={classes.contactDetails}>
          <p className={classes.header}>Social Media</p>
          <p className={classes.info}>
            Reach out to us on social media, we would love to hear from you
          </p>
          <p className={classes.icons}>
            <Facebook className={classes.icon} />
            <Twitter className={classes.icon} />
            <Instagram className={classes.icon} />
          </p>
        </div>
        <div className={classes.contactDetails}>
          <p className={classes.header}>Working Hours</p>
          <p className={classes.info}>
            <p>Monday - Friday</p>
            <p>07:00am - 09:00pm</p>
            <p>Saturday - Sunday</p>
            <p>08:00am - 07:00pm</p>
          </p>
        </div>
      </div>
      <ContactUsForm />
    </div>
  );
};
