import { FC } from "react";
import { SplashScreen, SplashScreenPropsType } from "../SplashScreen";
import { useMediaSplashScreen } from "./useMediaSplashScreen";

export const MediaSplashScreen: FC<SplashScreenPropsType> = (props) => {
    const classes = useMediaSplashScreen();

    return (
        <SplashScreen
            {...props}
            classNames={{
                body: classes.body,
                heading: classes.heading,
                bodySubtitle: classes.subheading,
                bodyTextContainer: classes.bodyTextContainer,
            }}
        />
    );
};
