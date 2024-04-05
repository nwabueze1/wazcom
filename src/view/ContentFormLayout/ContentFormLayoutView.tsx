import React, { useState } from "react";
import { useContentFormLayoutStyles } from "./styles";
import { ContentFormLayout } from "../../layouts";
import { GET_BLOG_POSTS, createApolloClient } from "helpers/graphQL";
import { WysiwygInput } from "../../io";
import { MdOutlineSort } from "react-icons/md";
import clx from "classnames";

const ContentFormLayoutView = () => {
  const classes = useContentFormLayoutStyles();
  const client = createApolloClient("https://ploutonion.sytbuilder.com/graphql");
  const [embedUrl] = useState<{ value: string; type: string }>({
    value: "https://",
    type: "image",
  });

  const handleContent = (value: any) => {
    console.log(value);
  };

  return (
    <div className={classes.root}>
      <ContentFormLayout
        isEdit={false}
        isPublished={false}
        onGoBack={() => {}}
        showRightSidebar={true}
        type="posts"
        getContentConfig={{
          client: client,
          dataKey: [],
          GET_CONTENT: GET_BLOG_POSTS,
          variables: {},
        }}
        tabControls={{
          details: {
            form: <></>,
            icon: <MdOutlineSort className={clx(classes.tabIcon)} />,
          },
        }}
        onDataFetchCompleted={() => {}}
      >
        <WysiwygInput embed={embedUrl} name="postData" onChange={(value) => handleContent(value)} />
      </ContentFormLayout>
    </div>
  );
};

export default ContentFormLayoutView;
