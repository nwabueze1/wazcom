import {CommonProps} from '../types';

/** !!-- Remember to update the interface name !! */
export type BreadCrumbsProps = CommonProps & {
    path:Crumb[]
}

type Crumb = {
    label: string;
    path: string;
  }