import useStyles from "./styles";
import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import clx from "classnames";
import { ContentFormLayoutProps } from "./types";
import { useLocation } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { get } from "lodash";
import { FaTimes } from "react-icons/fa";
import { WysiwygInput } from "../../io";
import { Button } from "../../core";

const CreateContentLayout: React.FC<ContentFormLayoutProps> = ({
  getContentConfig: {
    GET_CONTENT,
    variables: getContentVariables,
    client: getContentClient,
    dataKey,
  },
  onGoBack,
  isEdit,
  isPublished,
  children,
  showRightSidebar,
  onDataFetchCompleted,
  onFormSubmit,
  isSubmitting,
  isDisabled,
  type,
  tabControls,
  handleChange,
  formData,
}) => {
  const classes = useStyles();
  const { state } = useLocation();
  const [activeTab, setActiveTab] = useState<string | undefined>("details");
  // const { user } = useContext(AppStateContext);

  const [getContent] = useLazyQuery(GET_CONTENT, {
    variables: {
      ...getContentVariables,
    },
    client: getContentClient,
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (location.pathname.includes("edit")) {
      if (state?.row) {
        onDataFetchCompleted(state.row);
      } else {
        getContent().then((res) => {
          onDataFetchCompleted(get(res.data, dataKey?.join(".")));
        });
      }
    }
  }, [state]);

  const displayControls = () => {
    if (!activeTab) {
      return null;
    }
    return tabControls[activeTab as keyof typeof tabControls].form || tabControls.details.form;
  };

  const displayTabs = () =>
    Object.keys(tabControls)
      .map((key) => {
        const { icon } = tabControls[key];
        return { name: key, icon };
      })
      .map((tab, index) => (
        <div
          key={index}
          className={clx(
            classes.tab,
            activeTab?.toLowerCase() === tab.name.toLowerCase() && classes.activeTab,
          )}
          onClick={() => setActiveTab(tab.name)}
        >
          <div className={classes.tabContent}>
            {tab.icon}
            <p
              className={classes.tabName}
              style={
                tab?.name?.toLowerCase()?.includes("related") ? { left: "10%", width: "80%" } : {}
              }
            >
              {tab.name}
            </p>
          </div>
        </div>
      ));

  return (
    <div className={classes.contentRoot}>
      {/* <FullScreenLoader display={contentLoading && !state?.row} /> */}
      <div className={classes.contentContainer}>
        <div className={classes.formParent}>
          <div className={clx(classes.formEditor, {
            [classes.formEditorActive]: !(activeTab && showRightSidebar)
          })}>
            <div className={classes.headerContainer}>
              <BsArrowLeft
                onClick={() => {
                  onGoBack();
                }}
              />
              <p className={classes.headerTitle}>{isEdit ? `Edit ${type}` : `Create ${type}`}</p>
              <div
                className={clx(classes.postStatus, {
                  [classes.postStatusPublished]: isPublished,
                })}
              >
                <p className={classes.postStatusText}>{isPublished ? "Published" : "Draft"}</p>
              </div>
            </div>
            <WysiwygInput
              value={{ title: formData?.title, content: formData?.content }}
              onChange={handleChange}
              embed={formData.embed}
              initiateEmbed={(type) =>
                handleChange({
                  name: "embedType",
                  value: type,
                })
              }
            />
            <section className={classes.actionButton}>
              <Button
                onClick={onFormSubmit?.draft}
                className={classes.primary}
                isLoading={isSubmitting?.draft}
                variant="outlined"
                isDisabled={isDisabled?.draft}
              >
                {isEdit ? "Unpublish" : "Save as Draft"}
              </Button>
              <Button
                onClick={onFormSubmit?.publish}
                isLoading={isSubmitting?.publish}
                isDisabled={isDisabled?.publish}
              >
                {isEdit ? "Update" : "Publish"}
              </Button>
            </section>
            {children}
          </div>
          <div className={clx(classes.tabContainer, {
            [ classes.tabContainerActive]: activeTab && showRightSidebar
          })}>
            <div className={classes.titleHeader}>
              <p className={classes.activeTitle}>{activeTab}</p>
              <div
                className={classes.tabIconParent}
                onClick={() => {
                  setActiveTab(undefined);
                }}
              >
                <FaTimes className="icon" />
              </div>
            </div>
            {showRightSidebar && displayControls()}
          </div>
        </div>
        <div className={classes.tabParent}>{displayTabs()}</div>
      </div>
    </div>
  );
};

export default CreateContentLayout;
