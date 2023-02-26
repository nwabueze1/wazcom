import { useMbmcBlock8Styles } from "./styles";
import { TestimonialCard } from "../../../../templates/mbmc/components/TestimonialCard";
import { Carousel2 } from "../../../../core/Carousel2";
import { FC } from "react";
import { MbmcBlock8Props } from "./types";
import { sliceIntoChunks } from "../../../../utilities/mbmcblock";
import clx from "classnames";
import { handleElementClick } from "../../utilities";

export const MbmcBlock8: FC<MbmcBlock8Props> = ({
  mode = "view",
  handleClick,
  activeElement,
  index,
  heading,
  description,
  cards,
}) => {
  const classes = useMbmcBlock8Styles();
  const splitData: {
    content: string;
    name: string;
    role: string;
  }[][] = sliceIntoChunks(cards, 2);

  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <div className={classes.headerContent}>
          <h3
            className={clx(
              classes.headerTitle,
              activeElement === `${String(index)}.heading` && classes.block8ActiveElement,
            )}
            onClick={() => {
              handleElementClick(mode, `${String(index)}.heading`, handleClick);
            }}
          >
            {heading}
          </h3>
          <p
            className={clx(
              classes.headerDescription,
              activeElement === `${String(index)}.description` && classes.block8ActiveElement,
            )}
            onClick={() => {
              handleElementClick(mode, `${String(index)}.description`, handleClick);
            }}
          >
            {description}
          </p>
        </div>
        <div className={classes.headerCardContainer}>
          <Carousel2
            classNames={{ button: classes.navigationButton }}
            items={splitData.map((data, splitIndex) => {
              return {
                component: (
                  <div className={classes.carouselComponent}>
                    {data.map((item, cardIndex) => {
                      const parentKey =
                        String(index) + ".cards." + String(cardIndex + splitIndex * 2);
                      return (
                        <TestimonialCard
                          key={cardIndex}
                          text={
                            item.content.length > 135
                              ? item.content.slice(0, 133) + "..."
                              : item.content
                          }
                          name={item.name}
                          type={item.role}
                          parentKey={parentKey}
                          mode={mode}
                          handleClick={handleClick}
                          activeElement={activeElement}
                        />
                      );
                    })}
                  </div>
                ),
              };
            })}
            className={classes.carousel}
          />
        </div>
        <div className={classes.headerCardContainerMobile}>
          <Carousel2
            items={cards.map((item, idx) => ({
              component: (
                <div className={classes.carouselComponent}>
                  <TestimonialCard
                    key={idx}
                    text={
                      item.content.length > 135 ? item.content.slice(0, 133) + "..." : item.content
                    }
                    name={item.name}
                    type={item.role}
                  />
                </div>
              ),
            }))}
            className={classes.carousel}
            classNames={{ button: classes.navigationButton, arrow: classes.arrow }}
          />
        </div>
      </div>
    </div>
  );
};
