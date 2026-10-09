import { jsx as _jsx } from "react/jsx-runtime";
import Avatar from "@mui/material/Avatar";
import { useStyles } from "./styles";
export var SocialButton = function (_a) {
    var image = _a.image;
    var classes = useStyles();
    return (_jsx("div", { className: classes.root, children: _jsx(Avatar, { variant: "rounded", color: "inherit", src: image.src, className: "icon", alt: image.alt }) }));
};
