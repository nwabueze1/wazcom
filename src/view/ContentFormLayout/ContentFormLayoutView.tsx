import React, { useState } from "react";
import { useContentFormLayoutStyles } from "./styles";
import { ContentFormLayout } from "../../layouts";
import { GET_BLOG_POSTS, createApolloClient } from "helpers/graphQL";
import { WysiwygInput } from "../../io";
import { MdOutlineSort } from "react-icons/md";
import clx from "classnames"

const ContentFormLayoutView = () => {
  const classes = useContentFormLayoutStyles();
  const client = createApolloClient("https://ploutonion.sytbuilder.com/graphql");
  const [embedUrl] = useState<{ value: string; type: string }>({
    value: "https://",
    type: "image",
  });

  let val: any;

  const handleContent = (value: any) => {
    console.log(value);
    val = value;
  };

  const handleClick = () => {
    console.log(val);
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
            form: <>form</>,
            icon: <MdOutlineSort className={clx(classes.tabIcon)} />
          },
          categories: {
            form: <>categories</>,
            icon: <MdOutlineSort className={clx(classes.tabIcon)} />
          },
        }}
        onDataFetchCompleted={(data) => {}}
        formData={{}}
        handleChange={(data) => {}}
      >
        {/* <WysiwygInput embed={embedUrl} name="postData" onChange={(value) => handleContent(value)} /> */}
        {/* <button onClick={handleClick}>click</button> */}
      </ContentFormLayout>
    </div>
  );
};

export default ContentFormLayoutView;
