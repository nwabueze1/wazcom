import { FC, useCallback } from "react";
import clx from "classnames";
import { HiOutlineArrowUp, HiOutlineArrowDown } from "react-icons/hi";

import { Tag } from "../../core";
import { CardProps } from "./types";
import { Button } from "..";
import { useCardStyles } from "./styles";


export const Card: FC<CardProps> = ({
  className,
  title,
  content,
  image,
  tags,
  variant,
  imageClassname,
  primaryButtonProps,
  secondaryButtonProps,
  secondaryButtonText,
  primaryButtonText,
  status,
  icon,
  rate,
  label,
  footer
}) => {
  const classes = useCardStyles();

  const getCardVariant = useCallback((type: string) => {
    let variantClass: { root?: string, title?: string, content?: string } = {};
    switch (variant) {
      case "template":
        variantClass = { root: classes.templateRoot, title: classes.templateCardTitle, content: classes.templateContent };
        break;
      case "service-template":
        variantClass = { root: classes.serviceTemplateRoot, title: classes.serviceTemplateCardTitle, content: classes.serviceTemplateContent };
        break;
      case "service":
        variantClass = { root: classes.serviceRoot, title: classes.serviceCardTitle, content: classes.serviceContent };
        break;
      case "overview":
        variantClass = { root: classes.overviewRoot, title: classes.overviewCardTitle, content: classes.overviewContent };
        break;
      default:
        variantClass = { root: classes.templateRoot, title: classes.templateCardTitle, content: classes.templateContent };
    }
    return variantClass[type as keyof typeof variantClass];
  }, []);





  return (
    <div className={clx(classes.root, getCardVariant("root"), className)}>
      {icon && variant === "overview" && icon}
      <div className={clx(classes.column)}>
        {image?.src && variant.includes("template") && <img src={image?.src} alt={image?.alt} className={imageClassname} />}
        {icon && variant === "service" && icon}

        <div className={classes.contentContainer}>
          {label &&
            <span className={clx(classes.cardLabel)} >
              {label}
            </span>
          }
          <div className={clx(classes.justifyBetween, classes.titleContainer)}>
            <span className={clx(classes.cardTitle, getCardVariant("title"))} >
              {title}
            </span>
            {status?.name && <Tag {...status} />}
            {variant === "overview" && rate?.trend &&
              <div className={clx(classes.justifyStart, classes.rateContainer)}>
                <div className={clx(
                  rate?.trend === "ascending" ?
                    classes.ascendingRate :
                    rate?.trend === "descending" ?
                      classes.descendingRate :
                      "", classes.rateContent
                )} >
                  {rate?.trend === "ascending" ?
                    <HiOutlineArrowUp /> : rate?.trend === "descending" ?
                      <HiOutlineArrowDown /> : null}
                  {rate.value}
                </div>

                <p className={clx(classes.cardContent, getCardVariant("content"))}>
                  {content}
                </p>
              </div>
            }
          </div>
          {variant !== "overview" &&
            <p className={clx(classes.cardContent, getCardVariant("content"))}>
              {content}
            </p>}
        </div>
        {tags?.length && tags?.length > 1 &&
          <div className={clx(classes.justifyStart, classes.tagsContainer)}>
            {tags?.map((tag) => <Tag {...tag} />)}
          </div>}
        {footer?.text &&
          <div className={clx(classes.justifyStart, classes.buttonsContainer, classes.ascendingRate)}>
            {<span>
              {footer?.text}
            </span>}
            {footer?.icon && footer?.icon}
          </div>}
        {variant.includes("template") &&
          <div className={clx(classes.justifyStart, classes.buttonsContainer)}>
            {primaryButtonText && <Button {...primaryButtonProps}>
              {primaryButtonText}
            </Button>}
            {secondaryButtonText && <Button {...secondaryButtonProps}>
              {secondaryButtonText}
            </Button>}
          </div>}
      </div>
    </div>
  );
};
