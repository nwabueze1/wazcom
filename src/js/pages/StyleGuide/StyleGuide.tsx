import React from "react";
import { useStyles } from "./style";
import { LargeDiv } from "./LargeDiv";
import { SmallDiv } from "./SmallDiv";
import { Typography } from "@material-ui/core";
import theme from "js/theme";
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
            color={theme.design.colors.primary}
            text="Primary/#FF4C4C/Red 70"
          />

          <div className={classes.smallPrimaryDiv}>
            <SmallDiv
              color={theme.design.colors.red100}
              text="Warning #FF0000"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.red90}
              text="Red 90 #FF1919"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.red80}
              text="Red 80 #FF3333"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.red70}
              text="Red 70 #FF4C4C"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.red60}
              text="Red 60 #FF6666"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.red50}
              text="Red 50 #FF8080"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.red40}
              text="Red 40 #FF9999"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.red30}
              text="Red 30 #FFB2B2"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.red20}
              text="Red 20 #FFCCCC  "
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.red10}
              text="Red 10 #FFE5E5"
              isNotBrandColor={false}
            />
          </div>
        </div>
        <div className={classes.spacediv}></div>
        <div className={classes.top}>
          <Typography variant="h2" className={classes.topText}>
            State Colors
          </Typography>
        </div>

        <div>
          <div className={classes.smallPrimaryDiv}>
            <SmallDiv
              color={theme.design.colors.info}
              text="Info #2F80ED"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.success}
              text="Success #27AE60"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.warning}
              text="Warning #E2B93B"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.error}
              text="Error #FF0000"
              isNotBrandColor={false}
            />
          </div>
          <Typography className={classes.colorType}>Black Colors</Typography>
          <div className={classes.smallPrimaryDiv}>
            <SmallDiv
              color={theme.design.colors.simpleblack}
              text="Simple Black"
              isNotBrandColor={true}
            />
            <SmallDiv
              color={theme.design.colors.pureblack}
              text="Pure Black"
              isNotBrandColor={true}
            />
          </div>
          <Typography className={classes.colorType}>Gray Colors</Typography>
          <div className={classes.smallPrimaryDiv}>
            <SmallDiv
              color={theme.design.colors.gray100}
              text="Gray 100 #333333"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.gray80}
              text="Gray 80 #5C5C5C"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.gray60}
              text="Gray 60 #ADADAD"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.gray40}
              text="Gray 40 #D6D6D6"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.gray30}
              text="Gray 30 #E5E5E5"
              isNotBrandColor={false}
            />{" "}
            <SmallDiv
              color={theme.design.colors.gray20}
              text="Gray 20 #EBEBEB"
              isNotBrandColor={false}
            />
            <SmallDiv
              color={theme.design.colors.gray10}
              text="Gray 10 #F5F5F5"
              isNotBrandColor={false}
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
