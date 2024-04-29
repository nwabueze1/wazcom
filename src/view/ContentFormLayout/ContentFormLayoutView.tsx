import React, { useState } from "react";
import { useContentFormLayoutStyles } from "./styles";
import { ContentFormLayout, ContentFormLayoutProps } from "../../layouts";
import { GET_BLOG_POSTS, createApolloClient } from "helpers/graphQL";
import { WysiwygInput } from "../../io";
import { CssBaseline } from "@mui/material";
import { ViewHeader, Wrapper } from "../../core";
import { Paper } from "../../core/Paper";
import { useContentFormLayoutProps } from "./useContentFormLayoutProps";
import { ComponentProps } from "../../core/ComponentProps";
import { ComponentPropsType } from "../../core/ComponentProps/types";
import { MdOutlineSort } from "react-icons/md";

const ContentFormLayoutView = () => {
  const { data, onReset, state } = useContentFormLayoutProps();
  const classes = useContentFormLayoutStyles();
  const [embedUrl] = useState<{ value: string; type: string }>({
    value: "https://",
    type: "image",
  });

  const handleContent = (value: any) => {
    console.log(value);
  };

  const inputData: { default: ContentFormLayoutProps[] } = {
    default: [
      {
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
      },
    ],
  };

  const renderDefaultState = () =>
    inputData.default.map((item: ContentFormLayoutProps, index) => (
      <ContentFormLayout
        key={index}
        isEdit={item.isEdit}
        isPublished={item.isPublished}
        onGoBack={item.onGoBack}
        showRightSidebar={item.showRightSidebar}
        type="posts"
        getContentConfig={item.getContentConfig}
        tabControls={item.tabControls}
        onDataFetchCompleted={() => {}}
      >
        <WysiwygInput embed={embedUrl} name="postData" onChange={(value) => handleContent(value)} />
      </ContentFormLayout>
    ));

  const renderStates = () => (
    <>
      <Paper>
        <h4 className={classes.cardTitle}> Basic </h4>
        <div>{renderDefaultState()}</div>
      </Paper>
    </>
  );

  const renderConfig = () => (
    <>
      <Paper>
        <ContentFormLayout
          isEdit={state.isEdit}
          isPublished={state.isPublished}
          onGoBack={state.onGoBack}
          showRightSidebar={state.showRightSidebar}
          type="posts"
          getContentConfig={state.getContentConfig}
          tabControls={state.tabControls}
          onDataFetchCompleted={() => {}}
        >
          <WysiwygInput
            embed={embedUrl}
            name="postData"
            onChange={(value) => handleContent(value)}
          />
        </ContentFormLayout>
      </Paper>
      <ComponentProps body={data as ComponentPropsType[]} onReset={onReset} />
    </>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Wrapper
        title="Content Form Layout"
        description="The Content Form Layout offers a barebone, versatile, and 
        responsive layout interface for organizing content forms. 
        It features a collapsible sidebar and auto-generated tabs for effortless organization of content forms."
        className={classes.wrapper}
      />
      <ViewHeader configChildren={renderConfig()} statesChildren={renderStates()} />
    </div>
  );
};

export default ContentFormLayoutView;
