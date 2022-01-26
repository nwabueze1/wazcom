import classNames from "classnames";
import React from "react";
import { useIntroStyles } from "./styles";

const Intro = () => {
  const classes = useIntroStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.textBox}>
          <div className={classes.text}>
            <p className={classes.introHeader}>Hello, I’m Frank Bjorne</p>
            <p className={classes.introDetails}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </div>
        <div className={classes.imageBox}>
          <img
            className={classes.img}
            src="https://s3.eu-west-2.amazonaws.com/medusa.com/templates/redcharlie-t-7KEq9M0b0-unsplash+1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
