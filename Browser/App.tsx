import { StyledEngineProvider, Theme, ThemeProvider } from "@mui/material";
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from "Templates/Temp5/components/Footer/Footer";
import { NavBar } from "Templates/Temp5/components/NavBar/NavBar";
import IndexPage from "Templates/Temp5/Pages/Jaden's Blog/IndexPage";
import theme from "./theme";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

interface Props {
  className?: string;
}

const App: React.FC<Props> = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/home">
              <IndexPage />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
export default App;
