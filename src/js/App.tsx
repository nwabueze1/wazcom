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
import { Home } from "./pages";
import Selector from "./pages/Selector/Selector";
import RadioButton from "./pages/RadioButton/RadioButton";

const jss = create({
  plugins: [...jssPreset().plugins, jssPluginExtend()],
});

interface Props {
  className?: string;
}

const App: React.FC<Props> = () => {
  const taskList = ["q", "q", "q"];
  return (
    <CssBaseline>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route path={"/"}>{/* <Home /> */}</Route>
            </Switch>
            <Route path={"/radio"}>
              <RadioButton />
              <Selector items={taskList} styles={{ borderRadius: "10px" }} />
            </Route>
          </Router>
        </ThemeProvider>
      </StylesProvider>
    </CssBaseline>
  );
};
export default App;
