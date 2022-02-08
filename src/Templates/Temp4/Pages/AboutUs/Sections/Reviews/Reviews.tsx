import { useReviewsStyles } from "./styles";
import { FC } from "react";
import { ReviewProps } from "./types";
import { reviewsData } from "Templates/Temp4/TemplateData";

export const Reviews = () => {
  const classes = useReviewsStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <p className={classes.header}>Customers Reviews</p>
        <div className={classes.reviews}>
          {reviewsData.map((review, index) => (
            <Review
              key={index}
              img={{
                src: review.img.src,
                alt: undefined,
              }}
              name={review.name}
              feedback={review.feedback}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Review: FC<ReviewProps> = ({ name, img, feedback }) => {
  const classes = useReviewsStyles();
  return (
    <div className={classes.cardBox}>
      <div className={classes.imageContainer}>
        <img src={img.src} alt={img.alt} className={classes.img} />
      </div>
      <div className={classes.details}>
        <p className={classes.name}>{name}</p>
        <p className={classes.detail}>{feedback}</p>
      </div>
    </div>
  );
};
