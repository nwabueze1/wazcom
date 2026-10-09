import { SplashScreenPropsType } from "../../../../core";

export const instagramConnectionStatusState: Record<
    "connecting" | "notConnected",
    SplashScreenPropsType
> = {
    connecting: {
        connecting: true,
        body: {
            title: "Linking to Instagram",
            subtitle:
                "You do not have any image yet in your library. Click below to add your first.",
            image: {
                src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/athena/instagram-linking.svg",
                height: 80,
                width: 80,
                alt: "linking to instagram icon",
            },
        },
    },
    notConnected: {
        body: {
            title: "Instagram Authorization",
            subtitle:
                "To import your images from instagram, click below to authorise connection and follow the prompts.",
            image: {
                src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/athena/instagram-integration-icon.svg",
                height: 80,
                width: 80,
                alt: "instagram authentication icon",
            },
        },
        cta: {
            title: "Connect Instagram",
        },
    },
};
