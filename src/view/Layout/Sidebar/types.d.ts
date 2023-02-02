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
    rowIndex: number;
    index: number;
    sectionIndex: number;
}
