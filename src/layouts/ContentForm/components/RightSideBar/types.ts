

export type RightSideBarProps = {
  isRecipe?: boolean;
  pageType?: string;
  controls: RightSideBarControls;
};

export type RightSideBarControls = {
  details: JSX.Element;
  seo: JSX.Element;
  categories: JSX.Element;
  tags: JSX.Element;
  relatedPosts: JSX.Element;
  socials: JSX.Element;
  schema: JSX.Element;
};
