import React from "react";
export type DialogProps = {
    open?: boolean;
    handleClose?: () => void;
    children: React.ReactNode;
};
