import { StyledEngineProvider, Theme, ThemeProvider } from "@mui/material";
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nour } from "templates/Navs";
import { Asta } from "templates/restaurant/Asta/Asta";
import { Browser } from "view/Browser";
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
        src: "https://res.cloudinary.com/olamileke/image/upload/v1663418501/backmeup/assets/logos/logo_transparent_ligpzi.png",
        url: "https://www.facebook.com",
    },
    handleClick: (route: string) => {
        alert(route);
    },
    socials: [{ type: 'FACEBOOK', url: 'wwww' }, { type: 'TWITTER', url: 'wwww' }]
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
                        <Route exact path="/nour">
                            <Nour {...navProps} mode="edit" socials={[{ type: 'FACEBOOK', url: 'wwww' }, { type: 'TWITTER', url: 'wwww' }]} />
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
