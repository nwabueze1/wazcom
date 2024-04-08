import { useState } from "react";
import { ComponentPropsType } from "../../core/ComponentProps/types";
import { MdOutlineSort } from "react-icons/md";
import { GET_BLOG_POSTS, createApolloClient } from "helpers/graphQL";
import { useContentFormLayoutStyles } from "./styles";

// const classes = useContentFormLayoutStyles();
const initialContentFormLayoutState = {
  isEdit: false,
  isPublished: false,
  onGoBack: () => {},
  showRightSidebar: true,
  type: "posts",
  getContentConfig: {
    client: createApolloClient("https://ploutonion.sytbuilder.com/graphql"),
    dataKey: [],
    GET_CONTENT: GET_BLOG_POSTS,
    variables: {},
  },
  tabControls: {
    details: {
      form: <></>,
      icon: <MdOutlineSort />,
    },
  },
  onDataFetchCompleted: () => {},
};

export const useContentFormLayoutProps = () => {
  const [state, setState] = useState(initialContentFormLayoutState);

  const onChange = (e: any) => setState({ ...state, [e.name]: e.value });

  const data: Partial<ComponentPropsType>[] = [
    {
      name: "isEdit",
      description: "Flag indicating whether the content is being edited",
      default: "false",
    },
    {
      name: "isPublished",
      description: "Flag indicating whether the content is published",
      default: "false",
    },
    {
      name: "onGoBack",
      description: "Function to handle navigation back action",
      default: "() => {}",
    },
    {
      name: "showRightSidebar",
      description: "Flag indicating whether the right sidebar is visible",
      default: "true",
    },
    { name: "type", description: "Type of content (e.g., 'posts')", default: "'posts'" },
    {
      name: "getContentConfig",
      description: "Configuration object for fetching content data",
      default: "{ client: client, dataKey: [], GET_CONTENT: GET_BLOG_POSTS, variables: {} }",
    },
    {
      name: "tabControls",
      description: "Configuration object for generating tabs in the sidebar",
      default:
        "{ details: { form: <></>, icon: <MdOutlineSort className={clx(classes.tabIcon)} /> } }",
    },
    {
      name: "onDataFetchCompleted",
      description: "Function to handle data fetch completion event",
      default: "() => {}",
    },
  ];
  return {
    data,
    onReset: () => setState(initialContentFormLayoutState),
    state,
  };
};
