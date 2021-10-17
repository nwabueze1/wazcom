import {CommonProps} from '../types';

/** !!-- Remember to update the interface name !! */
export type MenuTableProps = CommonProps & {
  rows:data[]
  deleteHandler: (index: number) => void;
  editHandler: (index: number) => void;
}

type data = {
  id: number,
  Menu: string,
  Schedule: string,
  day: string
}

