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
import theme from "../theme";
import Toggle from "../components/Toggle/Toggle";
import ZxBreadCrumb from "../components/ZxBreadcrumbs/ZxBreadCrumb";
import { paths } from "../components/ZxBreadcrumbs/mock";
import Page from "../components/Page/Page";
import { Accordion } from "../components/Accordion/Accordion";
import CardPage from "../components/Cards/CardPage/Card";
import CheckBox from "../components/Checkbox/CheckBox";
import { TestGallery } from "../components/Gallery/TestGallery";

const jss = create({
  plugins: [...jssPreset().plugins, jssPluginExtend()],
});

interface Props {
  className?: string;
}

const App: React.FC<Props> = () => {
  const [checked, setChecked] = React.useState(true);
  const handlecheckChange = (
    event: React.ChangeEvent<{ checked: boolean }>,
  ) => {
    setChecked(event.target.checked);
  };

  return (
    <CssBaseline>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route exact path="/pagination">
                <Page />
              </Route>
              <Route exact path="/toggle">
                <Toggle />
              </Route>
              <Route path="/accordion">
                <Accordion />
              </Route>
              <Route exact path="/breadcrumb">
                <ZxBreadCrumb paths={paths} />
              </Route>
              <Route exact path="/card">
                <CardPage />
              </Route>
              <Route exact path="/check">
                <CheckBox
                  checked={checked}
                  handlecheckChange={handlecheckChange}
                />
              </Route>
              <Route exact path="/gallery">
                <TestGallery />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </StylesProvider>
    </CssBaseline>
  );
};
export default App;
