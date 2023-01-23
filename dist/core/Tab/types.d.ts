import React from "react";
export type TabProps = {
    children?: React.ReactNode;
    controls: {
        name: string;
        title: string;
        component: React.ReactNode;
    }[];
};
