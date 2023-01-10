export type SidebarListItemProps = {
    sections: {
        label: string;
        components: {
            name: string;
            slug: string;
        }[];
    }[];
};

export type SidebarLinksProps = {
    index: number;
    sectionIndex: number;
}
