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
import ButtonGuide from "./pages/ButtonGuide/ButtonGuide";
import TextField from "./pages/Textfield/TextField";
import { StyleGuide } from "./pages/StyleGuide/StyleGuide";
import { Typography } from "../js/pages/Typography/Typography";
import ZxBreadCrumb from "./pages/ZxBreadcrumbs/ZxBreadCrumb";
import { paths } from "./pages/ZxBreadcrumbs/mock";
import Page from "../js/pages/Page/Page";
import Selector from "./pages/Select/Select";
import array from "./pages/Select/mock";

const jss = create({
  plugins: [...jssPreset().plugins, jssPluginExtend()],
});

interface Props {
  className?: string;
}

const App: React.FC<Props> = () => {
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    return event.target.value;
  };

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
              <Route exact path="/buttonguide">
                <ButtonGuide />
              </Route>
              <Route exact path="/toggle">
                <Toggle />
              </Route>
              <Route exact path="/breadcrumb">
                <ZxBreadCrumb paths={paths} />
              </Route>
              <Route exact path="/select">
                <Selector
                  array={array}
                  value="Option 2"
                  handleChange={handleChange}
                />
              </Route>
            </Switch>
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
