import React from "react"

export type TabProps = {
    children?: React.ReactNode;
    variant?: string;
    controls: {
        name: string;
        title: string;
        component: React.ReactNode;
    }[];
}

export type TabStyleProps = {
    variant?: string;
}