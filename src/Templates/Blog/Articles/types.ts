import { CorePageFields } from "types/CorePageFields";
import { CoreSiteFields } from "types/CoreSiteFields";
import { CorePostFields } from "types/CorePostFields";

export type ArticleProps = CommonProps & {
  article: CorePostFields;
  page?: CorePageFields;
  site?: CoreSiteFields;
  domain: string;
};

export type CommonProps = {
  className?: string;
};
