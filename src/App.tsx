import { StyledEngineProvider, Theme, ThemeProvider } from "@mui/material";
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { blocks } from "templates/mbmc";
import { Nour, Taurant, Valour } from "templates/Navs";
import { Asta } from "templates/restaurant/Asta/Asta";
import { Browser } from "view/Browser";
import { Templates } from "view/Templates";
import theme from "./theme";
declare module "@mui/styles/defaultTheme" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface DefaultTheme extends Theme {}
}
interface Props {
    className?: string;
}

const navProps = {
    links: [
        { text: "Gallery", url: "/" },
        { text: "Categories", url: "http://www.leke.com" },
        { text: "About", url: "/" },
    ],
    logo: {
        src: "https://avatars.githubusercontent.com/u/108594113?s=200&v=4",
        url: "https://www.facebook.com",
    },
    handleClick: (route: string) => {
        // alert(route);
    },
    socials: [
        { type: "FACEBOOK", url: "wwww" },
        { type: "TWITTER", url: "wwww" },
    ],
};

const App: React.FC<Props> = () => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Browser />
                        </Route>
                        <Route exact path="/templates/:uuid">
                            <Templates />
                        </Route>
                        {blocks
                            .sort(({ name: aName }, { name: bName }) =>
                                aName.toLowerCase() < bName.toLowerCase()
                                    ? -1
                                    : aName.toLowerCase() > bName.toLowerCase()
                                    ? 1
                                    : 0,
                            )
                            .map(({ name, component: Comp, props }, index) => (
                                <Route
                                    key={index}
                                    exact
                                    path={`/templates/:uuid/${name.split("").join("")}`}
                                >
                                    {React.cloneElement(<Comp />, props)}
                                </Route>
                            ))}
                        <Route exact path="/nour">
                            <Taurant {...navProps} mode="edit" socials={[{ type: 'FACEBOOK', url: 'wwww' }, { type: 'TWITTER', url: 'wwww' }]} />
                        </Route>
                        <Route exact path="/asta">
                            <Asta />
                        </Route>
                    </Switch>
                </Router>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};
export default App;
