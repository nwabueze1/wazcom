import { Typography, InputAdornment } from "@material-ui/core";
import { ErrorOutline } from "@material-ui/icons";
import theme from "../../theme";
import React from "react";
import { Text } from "../Text";
import { useStyles } from "./styles";

const TextField = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography style={{ fontWeight: "bold" }} variant="h1">
          03. <span>Textfields </span>
        </Typography>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <div>
            <p>Label Status & Placeholder</p>
            <Text
              className={classes.inputsize}
              label="Label"
              name="status"
              source=""
              placeholder="placeholder"
            />
          </div>
        </div>
        <div className={classes.inputrule}>
          <ErrorOutline className={classes.icon} />
          <div>
            <div className={classes.input}>Input Rules:</div>
            Padding Left -&gt; 65px
            <br />
            Padding Top-Bottom -&gt; 16px
            <br />
            Padding Right(icon) -&gt; 16px
            <br />
            Label space -&gt; 16px
            <br />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: theme.spacing(6, 0),
        }}
      >
        <div>
          <p>Input Form + Label</p>
          <Text
            className={classes.inputsize}
            label="Label"
            type=""
            name="status"
            source=""
            placeholder="input text"
          />
        </div>
        <div>
          <p>Input Form + Label & Status </p>
          <Text
            className={classes.inputsize}
            label="Label"
            type=""
            name="status"
            source=""
            placeholder="input Text here"
          />
        </div>
        <div>
          <p>Input Form + Label + Status</p>
          <Text
            className={classes.inputsize}
            label="Label"
            type=""
            name="status"
            source=""
            placeholder="input Text icon"
          />
        </div>
      </div>
      <div style={{ marginTop: theme.spacing(5) }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Text
              style={{ width: "395px" }}
              label="Sub-domain"
              type=""
              name="status"
              source=""
              placeholder="Enter a sub-domain name"
            />
            <div>
              <Text
                style={{ width: "196px" }}
                label="price"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Kg</InputAdornment>
                  ),
                }}
                type="currency"
                source=""
                placeholder="Enter Price"
              />
              <Text
                style={{ width: "196px" }}
                type=""
                name="status"
                source=""
                placeholder="Enter price"
              />
              <Text
                style={{ width: "196px" }}
                type=""
                name="status"
                source=""
                placeholder="Enter price"
              />
            </div>
          </div>
          <div className={classes.textbox}>Enter Text here</div>
        </div>
      </div>
      <div
        style={{
          width: "50%",
          marginTop: theme.spacing(5),
        }}
      >
        <div>
          <Typography style={{ color: "red" }} variant="h4">
            States
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p>Focused State</p>
              <Text
                className={classes.inputsize}
                label="Label sample"
                type=""
                focused
                name="status"
                source=""
                placeholder="john Doe"
              />
            </div>
            <div>
              <div>
                <p>Disabled State</p>
                <Text
                  disabled={true}
                  className={classes.inputsize}
                  label="Label sample"
                  type=""
                  name="status"
                  source=""
                  placeholder="john Doe"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.bottominput}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
            paddingTop: theme.spacing(7),
          }}
        >
          <div>
            <Text
              className={classes.inputsize}
              label="Label Text"
              type=""
              name="status"
              source=""
              placeholder="placeholder"
            />
            <Text
              className={classes.inputsize}
              label="Label Text"
              type=""
              name="status"
              source=""
              placeholder="input text"
            />
          </div>
          <div>
            <Text
              className={classes.inputsize}
              label="Label Text"
              type=""
              source=""
              placeholder="input text"
            />
          </div>
        </div>
        <div className={classes.bottomright}>
          <Typography style={{ color: "red" }} variant="h4">
            Use Cases
          </Typography>
          <Text
            label="Password"
            type="Password"
            name="status"
            source=""
            placeholder="Enter your password"
          />
          <Text
            style={{ width: "320px", margin: theme.spacing(4) }}
            label="Email"
            type=""
            name="status"
            source=""
            placeholder="Enter your email"
          />
        </div>
      </div>
    </div>
  );
};

export default TextField;
