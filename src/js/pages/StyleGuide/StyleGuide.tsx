import React from "react";
import { useStyles } from "./style";
import { LargeDiv } from "./LargeDiv";
import { SmallDiv } from "./SmallDiv";
import { Typography } from "@material-ui/core";
import theme from "contexts/theme";
export const StyleGuide = () => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <div className={classes.top}>
          <Typography variant="h2" className={classes.topNumber}>
            01.
          </Typography>
          <Typography variant="h2" className={classes.topText}>
            Colors
          </Typography>
        </div>
      </div>
      <div>
        <Typography className={classes.colorType}>Brand Colors</Typography>
        <div>
          <LargeDiv
            color={theme.design.colors.primaryblue}
            text="Primary/#4c7495"
          />

          <div className={classes.smallPrimaryDiv}>
            <SmallDiv
              color={theme.design.colors.blu50}
              text="Blu 50 #2F85F3"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.blu40}
              text="Blu 40 #7090AA"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.blu30}
              text="Blu 30 #94ACBF"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.blu20}
              text="Blu 20 #B7C7D5"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.blu10}
              text="Blu 10 #DBE3EA"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.blu60}
              text="Blu 60 #1771E6"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.blu70}
              text="Blu 70 #1465CE"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.blu80}
              text="Blu 80 #1153A9"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.blu90}
              text="Blu 90 #0D4185"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.blu100}
              text="Blu 100 #0D4185"
              isNotBrandColor={false}
            />
          </div>
        </div>
        <div>
          <LargeDiv
            color={theme.design.colors.secondaryblue}
            text="Secondary/#26547C"
          />
          ;
          <div className={classes.smallPrimaryDiv}>
            <SmallDiv
              color={theme.design.colors.darkblu50}
              text="Dark Blu 50 #2F85F3"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.darkblu40}
              text="Dark Blu 40 #7090AA"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.darkblu30}
              text="Dark Blu 30 #94ACBF"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.darkblu20}
              text="Dark Blu 20 #B7C7D5"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.darkblu10}
              text="Dark Blu 10 #DBE3EA"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.darkblu60}
              text="Dark Blu 60 #1771E6"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.darkblu70}
              text="Dark Blu 70 #1465CE"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.darkblu80}
              text="Dark Blu 80 #1153A9"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.darkblu90}
              text="Dark Blu 90 #0D4185"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.darkblu100}
              text="Dark Blu 100 #0A3061"
              isNotBrandColor={false}
            />
          </div>
          <Typography className={classes.colorType}>Accent Color</Typography>;
          <div className={classes.smallPrimaryDiv}>
            <SmallDiv
              color={theme.design.colors.primaryOrange}
              text="Orange #E2B93B"
              isNotBrandColor={true}
            />
          </div>
          <Typography className={classes.colorType}>State Colors</Typography>;
          <div className={classes.smallPrimaryDiv}>
            <SmallDiv
              color={theme.design.colors.primaryblue}
              text="Primary blu #1877F2"
              isNotBrandColor={true}
            />
            <SmallDiv
              color={theme.design.colors.primaryGreen}
              text="Light green #27AE60"
              isNotBrandColor={true}
            />
            <SmallDiv
              color={theme.design.colors.warning}
              text="Warning #E2B93B"
              isNotBrandColor={true}
            />
            <SmallDiv
              color={theme.design.colors.red}
              text="error #E2B93B"
              isNotBrandColor={true}
            />
            <SmallDiv
              color={theme.design.colors.lightOrange}
              text="Light Orange #2F80ED"
              isNotBrandColor={true}
            />
            <SmallDiv
              color={theme.design.colors.darkGreen}
              text="Success #27AE60"
              isNotBrandColor={true}
            />
            <SmallDiv
              color={theme.design.colors.lemon}
              text="lemon #EB5757"
              isNotBrandColor={true}
            />
            ;
          </div>
          <Typography className={classes.colorType}>Black Colors</Typography>;
          <div className={classes.smallPrimaryDiv}>
            <SmallDiv
              color={theme.design.colors.black1}
              text="Black 1 #000000"
              isNotBrandColor={true}
            />
            <SmallDiv
              color={theme.design.colors.black2}
              text="Black 2 #1D1D1D"
              isNotBrandColor={true}
            />

            <SmallDiv
              color={theme.design.colors.black3}
              text="Black 3 #282828"
              isNotBrandColor={true}
            />

            <SmallDiv
              color={theme.design.colors.white}
              text="White #282828"
              isNotBrandColor={true}
            />
          </div>
          <Typography className={classes.colorType}>Grey Colors</Typography>;
          <div className={classes.smallPrimaryDiv}>
            <SmallDiv
              text="Dark Shade"
              isNotBrandColor={true}
              hasGradient={true}
              gradientName="darkshade #9FA7AF"
            />
            <SmallDiv
              text="Light Shade"
              isNotBrandColor={true}
              gradientName="lightshade #CFD3D7"
            />

            <SmallDiv
              color={theme.design.colors.lightestblu}
              text="Lighest Blu #ECF3F9 "
              isNotBrandColor={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
