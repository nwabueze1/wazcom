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
import { jsx as _jsx } from "react/jsx-runtime";
import { Modal } from "@mui/material";
import { GET_IMAGES, UPLOAD_IMAGE } from "../../../../helpers/graphQL";
import { GqlMediaLibrary } from "../../../../gql/GqlMediaLibrary";
import { useEditorMediaLibStyles } from "./styles";
export var EditorMediaLibrary = function (_a) {
    var mediaOpen = _a.mediaOpen, name = _a.name, handleSelect = _a.handleSelect, handleClose = _a.handleClose, client = _a.client;
    var classes = useEditorMediaLibStyles();
    return (_jsx(Modal, __assign({ open: mediaOpen }, { children: _jsx("div", __assign({ className: classes.mediaLibraryDialog }, { children: _jsx("div", __assign({ className: classes.mediaLibraryWrapper }, { children: _jsx(GqlMediaLibrary, { config: {
                        client: client,
                        query: {
                            name: GET_IMAGES,
                            variables: {
                                page: 1,
                                count: 7,
                            },
                        },
                        upload: {
                            name: UPLOAD_IMAGE,
                            variables: {},
                        },
                        viewOnly: true,
                    }, onChange: function (data) { return handleSelect(data.value); }, name: name, handleClose: handleClose }, void 0) }), void 0) }), void 0) }), void 0));
};
