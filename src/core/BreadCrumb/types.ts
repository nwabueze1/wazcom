import {CommonProps} from '../types';

/** !!-- Remember to update the interface name !! */
export type BreadCrumbProps = CommonProps & {
    paths:Crumb[]
}

type Crumb = {
    label: string;
    path: string;
  }