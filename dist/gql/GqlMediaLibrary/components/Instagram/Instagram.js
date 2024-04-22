var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useInstagramStyles } from "./styles";
import { SplashScreen } from "../../../../core";
import { instagramConnectionStatusState } from "./InstagramConnectionStatusState";
import { useConnectInstagramAccount } from "../../../GqlMediaLibrarySelector/hooks/connect";
export var Instagram = function (_a) {
    var connected = _a.connected, displayImages = _a.displayImages, onChange = _a.onChange, library_uuid = _a.library_uuid, client = _a.client, mutation = _a.mutation;
    var classes = useInstagramStyles();
    var connectInstagram = useConnectInstagramAccount(onChange);
    var classNames = { root: classes.inActiveContainer, body: classes.body };
    var handleConnectInstagram = function () {
        connectInstagram(client, mutation, {
            library_uuid: library_uuid,
        });
    };
    var renderInstagramSplash = function (isConnected) { return (_jsx(SplashScreen, __assign({}, instagramConnectionStatusState[isConnected ? "connecting" : "notConnected"], { classNames: classNames, cta: isConnected
            ? undefined
            : __assign(__assign({}, instagramConnectionStatusState.notConnected.cta), { onClick: handleConnectInstagram }) }))); };
    return _jsx(_Fragment, { children: connected ? displayImages() : renderInstagramSplash(false) });
};
