import CssBaseline from "@material-ui/core/CssBaseline";
import {
  jssPreset,
  StylesProvider,
  ThemeProvider,
} from "@material-ui/core/styles";
import { create } from "jss";
import jssPluginExtend from "jss-plugin-extend";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import theme from "./theme";
import Toggle from "./pages/Toggle/Toggle";
import Home from "./pages/Home";
import Selector from "./pages/Selector/Selector";
import ButtonGuide from "./pages/ButtonGuide/ButtonGuide";
import TextField from "./pages/Textfield/TextField";
import { StyleGuide } from "./pages/StyleGuide/StyleGuide";
import { Typography } from "../js/pages/Typography/Typography";
import ZxBreadCrumb from "./pages/ZxBreadcrumbs/ZxBreadCrumb";
import { paths } from "./pages/ZxBreadcrumbs/mock";
import Page from "../js/pages/Page/Page";
import CardPage from "./pages/Cards/CardPage/Card";
import Notification from "../js/pages/Notifications/Notification";

const jss = create({
  plugins: [...jssPreset().plugins, jssPluginExtend()],
});

interface Props {
  className?: string;
}

const App: React.FC<Props> = () => {
  const taskList = ["Reaxt", "Recta", "RAect"];
  return (
    <CssBaseline>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/textfields">
                <TextField />
              </Route>
              <Route exact path="/pagination">
                <Page />
              </Route>
              <Route exact path="/notification">
                <div
                  style={{
                    display: "flex",
                    padding: "20px",
                  }}
                >
                  <Notification
                    status="success"
                    uploadStatus="Image successfully uploaded."
                    uploadFeedBack="Profile image successfully changed."
                    statusAlert="Success notification"
                  />
                  <Notification
                    status="failed"
                    uploadStatus="Image upload failed"
                    uploadFeedBack="profile image couldn't be uploaded"
                    statusAlert="Failed / alert Notification"
                  />
                  <Notification
                    status="plain"
                    uploadFeedBack="Site successfully created"
                    statusAlert="Plain notification "
                  />
                </div>
              </Route>
              <Route exact path="/buttonguide">
                <ButtonGuide />
              </Route>
              <Route exact path="/toggle">
                <Toggle />
              </Route>
              <Route exact path="/breadcrumb">
                <ZxBreadCrumb paths={paths} />
              </Route>
              <Route exact path="/card">
                <CardPage />
              </Route>
            </Switch>
            <Route path="/selector">
              <Selector
                items={taskList}
                styles={{ borderRadius: "10px", width: "200px" }}
              />
              <Selector
                items={taskList}
                styles={{ borderRadius: "10px", width: "200px" }}
              />
            </Route>
            <Route path="/styleguide/colors">
              <StyleGuide />
            </Route>
            <Route path="/styleguide/typography">
              <Typography />
            </Route>
          </Router>
        </ThemeProvider>
      </StylesProvider>
    </CssBaseline>
  );
};
export default App;
