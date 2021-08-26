import React from "react";
import { Typography as MuiTypography } from "@material-ui/core";
import { useStyles } from "./style";
import BigHeadingA from "../../../images/BigHeadingA.png";
import SmallHeadingA from "../../../images/SmallHeadingA.png";
export const Typography = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.top}>
        <MuiTypography variant="h2" className={classes.topNumber}>
          02
        </MuiTypography>
        <MuiTypography variant="h2" className={classes.topText}>
          MuiTypography
        </MuiTypography>
      </div>
      <div className={classes.ralewaydiv}>
        <MuiTypography variant="h2" className={classes.raleway}>
          Raleway
        </MuiTypography>
      </div>

      <div className={classes.headerdiv}>
        <div className={classes.divimg}>
          <img src={BigHeadingA} alt="" />
          <img src={SmallHeadingA} alt="" />
        </div>

        <div className={classes.table}>
          <div className={classes.row}>
            <MuiTypography className={classes.notheading}>Name</MuiTypography>

            <MuiTypography className={classes.notheading}>
              Font Size
            </MuiTypography>

            <MuiTypography className={classes.notheading}>
              Line Height
            </MuiTypography>
          </div>
          <div className={classes.row}>
            <MuiTypography className={classes.heading1}>
              Heading 1
            </MuiTypography>

            <MuiTypography className={classes.notheading}>40px</MuiTypography>

            <MuiTypography className={classes.notheading}>140%</MuiTypography>
          </div>
          <div className={classes.row}>
            <MuiTypography className={classes.heading2}>
              Heading 2
            </MuiTypography>

            <MuiTypography className={classes.notheading}>32px</MuiTypography>

            <MuiTypography className={classes.notheading}>140%</MuiTypography>
          </div>
          <div className={classes.row}>
            <MuiTypography className={classes.heading3}>
              Heading 3
            </MuiTypography>

            <MuiTypography className={classes.notheading}>24px</MuiTypography>

            <MuiTypography className={classes.notheading}>140%</MuiTypography>
          </div>
          <div className={classes.row}>
            <MuiTypography className={classes.heading4}>
              Heading 4
            </MuiTypography>

            <MuiTypography className={classes.notheading}>20px</MuiTypography>

            <MuiTypography className={classes.notheading}>140%</MuiTypography>
          </div>
        </div>
      </div>
      <div className={classes.spaceDiv}></div>
      <div className={classes.top}>
        <MuiTypography variant="h2" className={classes.topNumber}>
          02
        </MuiTypography>
        <MuiTypography variant="h2" className={classes.topText}>
          MuiTypography
        </MuiTypography>
      </div>
      <div className={classes.ralewaydiv}>
        <MuiTypography variant="h2" className={classes.raleway}>
          Raleway
        </MuiTypography>
      </div>
      <div className={classes.headerdiv}>
        <div>
          <img src={BigHeadingA} alt="" />
          <img src={SmallHeadingA} alt="" />
        </div>
      </div>
      <div className={classes.table}>
        <div className={classes.row}>
          <MuiTypography className={classes.notheading}>Name</MuiTypography>

          <MuiTypography className={classes.notheading}>
            Font Size
          </MuiTypography>

          <MuiTypography className={classes.notheading}>
            Line Height
          </MuiTypography>
        </div>
        <div className={classes.row}>
          <MuiTypography className={classes.heading1}>Heading 1</MuiTypography>

          <MuiTypography className={classes.notheading}>40px</MuiTypography>

          <MuiTypography className={classes.notheading}>140%</MuiTypography>
        </div>
        <div className={classes.row}>
          <MuiTypography className={classes.heading2}>Heading 2</MuiTypography>

          <MuiTypography className={classes.notheading}>32px</MuiTypography>

          <MuiTypography className={classes.notheading}>140%</MuiTypography>
        </div>
        <div className={classes.row}>
          <MuiTypography className={classes.heading3}>Heading 3</MuiTypography>

          <MuiTypography className={classes.notheading}>24px</MuiTypography>

          <MuiTypography className={classes.notheading}>140%</MuiTypography>
        </div>
        <div className={classes.row}>
          <MuiTypography className={classes.heading4}>Heading 4</MuiTypography>

          <MuiTypography className={classes.notheading}>20px</MuiTypography>

          <MuiTypography className={classes.notheading}>140%</MuiTypography>
        </div>
      </div>
    </div>
  );
};
