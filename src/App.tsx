import { StyledEngineProvider, Theme, ThemeProvider } from "@mui/material";
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from "Templates/Temp5/components/Footer/Footer";
import { NavBar } from "Templates/Temp5/components/NavBar/NavBar";
import { AboutPage } from "Templates/Temp5/Pages/About/About";
import { CategoryPage } from "Templates/Temp5/Pages/Categories/Post";
import { Container } from "Templates/Temp5/Pages/Container";
import GalleryPage from "Templates/Temp5/Pages/Gallery";
import { Gallery } from "Templates/Temp5/Pages/Gallery/GalleryPage";
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
            <Route exact path="/" component={IndexPage} />
            <Route path="/Gallery" component={Gallery} />
            <Route path="/categories" component={CategoryPage} />
            <Route path="/aboutpage" component={AboutPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
export default App;
