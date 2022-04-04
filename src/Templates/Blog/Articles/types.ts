import { CorePageFields } from "types/CorePageFields";
import { CoreSiteFields } from "types/CoreSiteFields";
import { CorePostFields } from "types/CorePostFields";

export type ArticleProps = {
  article: CorePostFields;
  page?: CorePageFields;
  site?: CoreSiteFields;
  domain: string;
};
