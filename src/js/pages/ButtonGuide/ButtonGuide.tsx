import React from "react";
import { useStyles } from "./style";
import Button from "../Button/Button";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import AddIcon from "@material-ui/icons/Add";

interface ButtonGuideProps {
  size?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ButtonGuide: React.FC<ButtonGuideProps> = ({ size }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.buttonWrapper}>
        <div className={classes.buttonTop}>
          <div>
            <div className={classes.pageDescription}>
              04. <span>Buttons</span>
            </div>
            <p className={classes.itemDesc}>color</p>
            <p className={classes.buttonDesc}>Primary</p>

            <Button size="medium" color="secondary">
              Button Sample
            </Button>

            <div className={classes.buttonRulesWrapper}>
              <div className={classes.ruleInfo}>
                <div className={classes.warningIcon}>
                  <ErrorOutlineIcon />
                </div>
                <div className={classes.ruleDetails}>
                  <div className={classes.ruleHead}>Button Rules (Small): </div>
                  <br />
                  Padding Left Right -&gt; 65px <br />
                  Padding Top Bottom -&gt; 16px
                </div>
              </div>
              <div className={classes.ruleInfo}>
                <div className={classes.warningIcon}>
                  <ErrorOutlineIcon />
                </div>
                <div className={classes.ruleDetails}>
                  <div className={classes.ruleHead}>Button Rules (Normal):</div>
                  <br />
                  Padding Left Right -&gt; 80px <br />
                  Padding Top Bottom -&gt; 16px
                </div>
              </div>
              <div className={classes.ruleInfo}>
                <div className={classes.warningIcon}>
                  <ErrorOutlineIcon />
                </div>
                <div className={classes.ruleDetails}>
                  <div className={classes.ruleHead}>Button Rules (Medium):</div>
                  <br />
                  Padding Left Right -&gt; 88px <br />
                  Padding Top Bottom -&gt; 18px
                </div>
              </div>
              <div className={classes.ruleInfo}>
                <div className={classes.warningIcon}>
                  <ErrorOutlineIcon />
                </div>
                <div className={classes.ruleDetails}>
                  <div className={classes.ruleHead}>Button Rules (Large): </div>
                  <br />
                  Padding Left Right -&gt; 100px <br />
                  Padding Top Bottom -&gt; 20px
                </div>
              </div>
            </div>
          </div>
          <div className={classes.buttonMiddle}>
            <p className={classes.itemDesc}>Size</p>
            <p className={classes.buttonDesc}>Small</p>
            <Button size="small">Button Sample</Button>

            <p className={classes.buttonDesc}>Normal</p>
            <Button size="medium">Button Sample</Button>

            <p className={classes.buttonDesc}>Medium</p>
            <Button size="medium">Button Sample</Button>

            <p className={classes.buttonDesc}>Large</p>
            <Button size="large">Button Sample</Button>
          </div>
          <div className={classes.buttonRight}>
            <div className={classes.ruleInfo}>
              <div className={classes.warningIcon}>
                <ErrorOutlineIcon />
              </div>
              <div className={classes.ruleDetails}>
                <div className={classes.ruleHead}>Button Rules (Small): </div>
                <br />
                Padding Left Right -&gt; 103px <br />
                Padding Top Bottom -&gt; 16px
              </div>
            </div>
            <p className={classes.itemDesc}>Full-width</p>
            <p className={classes.buttonDesc}>Default</p>
            <Button size="large">Button Sample</Button>
            <p className={classes.buttonDesc}>Hover</p>
            <Button size="large" status="hover">
              Button Sample
            </Button>

            <p className={classes.buttonDesc}>Active</p>
            <Button size="large" status="active">
              Button Sample
            </Button>

            <p className={classes.buttonDesc}>Disable</p>
            <Button size="large" status="disable">
              Button Sample
            </Button>
          </div>
        </div>

        <div className={classes.buttonBottomWrapper}>
          <p className={classes.itemDescBottom}>Variant</p>
          <div className={classes.buttonBottom}>
            <p className={classes.buttonDescIcon}>Default</p>

            <div className={classes.buttonItem}>
              <p className={classes.buttonDescIcon}>Normal</p>
              <Button size="large">Button Sample</Button>
            </div>
            <div className={classes.buttonItem}>
              <p className={classes.buttonDescIcon}>Outline</p>
              <Button size="large" status="transparent">
                Button Sample
              </Button>
            </div>
            <div className={classes.buttonItem}>
              <p className={classes.buttonDescIcon}>Icon Text</p>
              <Button size="large" status="">
                <AddIcon /> Button Sample
              </Button>
            </div>
            <div className={classes.buttonItem}>
              <p className={classes.buttonDescIcon}>Icon</p>
              <AddIcon className={classes.addIcon} />
            </div>
          </div>
          <div className={classes.buttonBottom}>
            <p className={classes.statusDesc}>Hover</p>

            <div className={classes.buttonItemBottom}>
              <Button size="large" status="hover">
                Button Sample
              </Button>
            </div>
            <div className={classes.buttonItemBottom}>
              <Button size="large" status="hoveroutline">
                Button Sample
              </Button>
            </div>
            <div className={classes.buttonItemBottom}>
              <Button size="large" status="hover">
                <AddIcon />
                Button Samples
              </Button>
            </div>
            <div className={classes.buttonItemBottom}>
              <AddIcon
                className={`${classes.addIcon} ${classes.addIconHover}`}
              />
            </div>
          </div>
          <div className={classes.buttonBottom}>
            <p className={classes.statusDesc}>Active</p>

            <div className={classes.buttonItemBottom}>
              <Button size="large">Button Sample</Button>
            </div>
            <div className={classes.buttonItemBottom}>
              <Button size="large" status="activeoutline">
                Button Sample
              </Button>
            </div>
            <div className={classes.buttonItemBottom}>
              <Button size="large">
                <AddIcon />
                Button Sample
              </Button>
            </div>
            <div className={classes.buttonItemBottom}>
              <AddIcon
                className={`${classes.addIcon} ${classes.addIconactive}`}
              />
            </div>
          </div>
          <div className={classes.buttonBottom}>
            <p className={classes.statusDesc}>Disable</p>
            <div className={classes.buttonItem}>
              <Button size="large" status="disable">
                Button Sample
              </Button>
            </div>
            <div className={classes.buttonItem}>
              <Button size="large" status="disableoutline">
                Button Sample
              </Button>
            </div>
            <div className={classes.buttonItem}>
              <Button size="large" status="disable">
                Button Sample
              </Button>
            </div>
            <div className={classes.buttonItem}>
              <AddIcon
                className={`${classes.addIcon} ${classes.addIconDisable}`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ButtonGuide;
