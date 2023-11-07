export type SidebarListItemProps = {
  isOpen?: boolean;
  onClose?(): void;
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
};
