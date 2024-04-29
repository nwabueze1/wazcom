import { FC } from "react";
import { useInstagramStyles } from "./styles";
import { InstagramProps } from "./types";
import { SplashScreen } from "../../../../core";
import { instagramConnectionStatusState } from "./InstagramConnectionStatusState";
import { useConnectInstagramAccount } from "../../../GqlMediaLibrarySelector/hooks/connect";

export const Instagram: FC<InstagramProps> = ({
  connected,
  displayImages,
  onChange,
  library_uuid,
  client,
  mutation,
}) => {
  const classes = useInstagramStyles();
  const connectInstagram = useConnectInstagramAccount(onChange);
  const classNames = { root: classes.inActiveContainer, body: classes.body };

  const handleConnectInstagram = () => {
    connectInstagram(client, mutation, {
      library_uuid,
    });
  };

  const renderInstagramSplash = (isConnected: boolean) => (
    <SplashScreen
      {...instagramConnectionStatusState[isConnected ? "connecting" : "notConnected"]}
      classNames={classNames}
      cta={
        isConnected
          ? undefined
          : {
              ...instagramConnectionStatusState.notConnected.cta,
              onClick: handleConnectInstagram,
            }
      }
    />
  );

  return <>{connected ? displayImages() : renderInstagramSplash(false)}</>;
};
