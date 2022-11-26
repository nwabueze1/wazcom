export type SidebarListItemProps = {
    title: string;
    sections: {
        label: string;
        components: {
            id: string;
            label: string;
            route?: string;
        }[];
    }[];
};
