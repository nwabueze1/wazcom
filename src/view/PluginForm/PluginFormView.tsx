import CssBaseline from "@mui/material/CssBaseline";
import { Wrapper } from "../../core";
import { Paper } from "../../core/Paper";
import { PlugInForm, PluginFormRef } from "../../io";
import { pluginFormData } from "./data";
import { usePluginFormStyles } from "./usePluginFormStyles";
import { useRef } from "react";

export const PluginFormView = () => {
  const classes = usePluginFormStyles();
  const submitRef = useRef<PluginFormRef>(null);

  return (
    <div>
      <CssBaseline>
        <div>
          <Wrapper
            title={"Plugin Form"}
            description={
              "The PluginForm component is used to seamlessly plugin-in forms into the templates. All you need to do is create the form from the forms-section of the admin dashboard and provide the form_uuid and form object which is an object containing the uuid of the form and the questions of the form, the pluginForm automatically renders the form for you. "
            }
          >
            <Paper padding={10}>
              <PlugInForm
                apolloClient={{}}
                className={classes.form}
                form_uuid={pluginFormData.form_uuid}
                form={pluginFormData?.form as any}
                ref={submitRef}
                pallette={{
                  colors: { main: "rgb(0,0,0)", hover: "red" },
                  typography: {
                    input: {
                      color: "green",
                      fontSize: 12,
                    },
                    label: {
                      color: "red",
                    },
                  },
                }}
              />
            </Paper>
          </Wrapper>
        </div>
      </CssBaseline>
    </div>
  );
};
