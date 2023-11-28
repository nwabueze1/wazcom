import { FC } from "react";
import { SplashScreenPropsType } from "./type";
import { useSplashScreenStyles } from "./useSplashScreenStyles";
import { Button } from "../../Button";
import clx from "classnames";

export const SplashScreen: FC<SplashScreenPropsType> = ({
  cta,
  header,
  body,
  classNames,
  connecting,
}) => {
  const classes = useSplashScreenStyles();

  return (
    <section className={clx(classes.root, classNames?.root)}>
      {header && (
        <header className={clx(classes.header, classNames?.header)}>
          <h2 className={clx(classes.heading, classNames?.heading)}>{header.title}</h2>
          <p className={clx(classes.subheading, classNames?.subheading)}>{header.subtitle}</p>
        </header>
      )}
      {body && (
        <article className={clx(classes.body, classNames?.body)}>
          {body.image && (
            <img
              src={body.image.src}
              alt={body.image.alt}
              height={body.image.height}
              width={body.image.width}
              className={clx(classes.image, classNames?.image)}
            />
          )}
          <div className={clx(classes.bodyTextContainer, classNames?.bodyTextContainer)}>
            {body.title && (
              <h4 className={clx(classes.heading, classNames?.heading)}>{body.title}</h4>
            )}
            {body.subtitle && (
              <p
                className={clx(classes.subheading, classes.bodySubtitle, classNames?.bodySubtitle)}
              >
                {body.subtitle}
              </p>
            )}
          </div>
          {connecting && (
            <div className={classes.track}>
              <div className={classes.trackLoader} />
            </div>
          )}
          {cta && cta.title && (
            <Button onClick={cta.onClick} className={clx(classes.button, classNames?.button)}>
              {cta.title}
            </Button>
          )}
        </article>
      )}
    </section>
  );
};
