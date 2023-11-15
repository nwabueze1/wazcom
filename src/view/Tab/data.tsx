import { BsSearch } from "react-icons/bs";
import { FiMessageCircle } from "react-icons/fi";

export const verticalTabControls = [
  { name: "all-vertical", title: "All", component: <div>COMPONENT 1</div> },
  {
    name: "header-vertical",
    title: "Header",
    component: <div>COMPONENT 2</div>,
  },
  {
    name: "body-vertical",
    title: "Body",
    component: <div>COMPONENT 3</div>,
  },
  {
    name: "footer-vertical",
    title: "Footers",
    component: <div>COMPONENT 4</div>,
  },
];
export const verticalPillControls = [
  {
    name: "search-pill",
    title: "CONTROL TILE",
    component: <div>COMPONENT</div>,
    icon: <BsSearch size={16} />,
  },
  {
    name: "messages-pill",
    title: "CONTROL TILE 2",
    component: <div>COMPONENT 2</div>,
    icon: <FiMessageCircle size={16} />,
  },
];

export const horizontalTabControls = [
  {
    name: "All",
    title: "All",
    component: <div>All</div>,
  },
  {
    name: "Headers",
    title: "Headers",
    component: <div>Headers</div>,
  },
  {
    name: "Body",
    title: "Body",
    component: <div>Body</div>,
  },
  {
    name: "Footers",
    title: "Footers",
    component: <div>Footers</div>,
  },
];
