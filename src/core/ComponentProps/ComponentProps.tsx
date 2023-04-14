import { FC } from "react";
import { Tag } from "core/Tag";
import { useComponentPropsStyles } from "./styles";
import { ComponentPropsProp, PropsControlType } from "./types";
import { Button } from "../../core";
import { BiRefresh } from "react-icons/bi";
import { TextInput, CheckBoxInput, EmailInput } from "../../io";

const ComponentProps: FC<ComponentPropsProp> = ({ body, onReset }) => {
  const classes = useComponentPropsStyles();
  const tableHead: string[] = ["name", "description", "default", "controls"];

  return (
    <div className={classes.tableContainer}>
      <h4 className={classes.title}>Props</h4>
      <table className={classes.table}>
        <thead className={classes.thead}>
          <tr className={classes.tr}>
            {tableHead.map((value, index) => (
              <th key={index} className={classes.th}>
                {value}
              </th>
            ))}
            <th className={classes.th}>
              <Button
                variant="outlined"
                className={classes.tableButton}
                rightIcon={<BiRefresh className={classes.buttonIcon} />}
                iconSpacing={5}
                onClick={onReset}
              >
                Reset
              </Button>
            </th>
          </tr>
        </thead>
        <tbody className={classes.tbody}>
          {body.map((content, index) => (
            <tr className={classes.tr} key={index}>
              <td className={classes.td}>{content.name}</td>
              <td className={classes.td}>{content.description}</td>
              <td className={classes.td}>
                <Tag name={content.default as string} />
              </td>
              <td className={classes.td}>
                {getComponentPropsControlElementInput(content.control)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComponentProps;

const getComponentPropsControlElementInput = (content: PropsControlType) => {
  switch (content.type) {
    case "text":
      return <TextInput name={content.name} onChange={content.onChange} height={12} />;
    case "email":
      return <EmailInput name={content.name} onChange={content.onChange} height={12} />;
    case "checkbox":
      return <CheckBoxInput name={content.name} onChange={content.onChange} />;
    default:
      return null;
  }
};
