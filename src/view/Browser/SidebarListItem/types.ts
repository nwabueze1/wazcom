export type SidebarListItemProps = {
  title: string;
  sections: {
    label: string;
    components: {
      id: string;
      label: string;
    }[];
  }[];
};

export type SidebarLinksProps = {
  index: number;
  sectionIndex: number;
};
