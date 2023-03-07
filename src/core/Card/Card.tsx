import { FC, useCallback } from "react";
import clx from "classnames";

import { Tag } from "core";
import { CardProps } from "./types";
import { Button } from "..";
import { useCardStyles } from "./styles";


export const Card: FC<CardProps> = ({
  className,
  title,
  content,
  image: { src, alt },
  tags,
  align = "left",
  variant,
  imageClassname,
  primaryButtonProps,
  secondaryButtonProps,
  secondaryButtonText,
  primaryButtonText,
  status,
  icon,
}) => {
  const classes = useCardStyles();

  const getRootVariant = useCallback(() => {
    let variantClass;
    switch (variant) {
      case "template":
        variantClass = classes.templateRoot;
        break;
      case "service-template":
        variantClass = classes.serviceTemplateRoot;
        break;
      case "service":
        variantClass = classes.serviceRoot;
        break;
      case "overview":
        variantClass = classes.overviewRoot;
        break;
      default:
        variantClass = classes.templateRoot;
    }

    return variantClass;
  }, [align]);
  const getAlignVariant = useCallback(() => {
    let variantClass;
    switch (align) {
      case "left":
        variantClass = classes.leftAlign;
        break;
      case "center":
        variantClass = classes.centerAlign;
        break;
      case "right":
        variantClass = classes.rightAlign;
        break;
      default:
        variantClass = classes.leftAlign;
    }

    return variantClass;
  }, [align]);


  return (
    <div className={clx(classes.root, getRootVariant(), className, getAlignVariant())}>
      {src && variant.includes("template") && <img src={src} alt={alt} className={imageClassname} />}
      <div className={classes.contentContainer}>
        <div className={clx(classes.justifyBetween)}>
          <span className={classes.cardTitle} >
            {title}
          </span>
          {status?.name && <Tag {...status} />}
        </div>
        <p className={classes.cardContent}>{content}</p>
      </div>
      <div className={clx(classes.justifyStart, classes.tagsContainer)}>
        {tags?.map((tag) => <Tag {...tag} />)}
      </div>
      <div className={clx(classes.justifyStart, classes.buttonsContainer)}>
        <Button {...primaryButtonProps}>
          {primaryButtonText}
        </Button>
        <Button {...secondaryButtonProps}>
          {secondaryButtonText}
        </Button>
      </div>
    </div>
  );
};
