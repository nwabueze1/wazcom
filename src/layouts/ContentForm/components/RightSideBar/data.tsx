import { BiCategory, BiTag } from 'react-icons/bi';
import { BsChat, BsFilesAlt, BsSearch } from 'react-icons/bs';
import { MdSort } from 'react-icons/md';

export const tabs = [
  { name: 'Details', icon: <MdSort /> },
  { name: 'Seo', icon: <BsSearch /> },
  { name: 'Categories', icon: <BiCategory /> },
  { name: 'Tags', icon: <BiTag /> },
  { name: 'Related Posts', icon: <BsFilesAlt /> },
  { name: 'Socials', icon: <BsChat /> },
];
