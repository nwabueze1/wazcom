import { FC } from "react";
import { Tag } from "core/Tag";
import { Button } from "core/Button";
import { BiRefresh } from "react-icons/bi";
import { usePropsTableStyles } from "./styles";
import { TablepropsType } from "./types";

const ComponentProps: FC<TablepropsType> = ({ body, onReset, onCopyCode }) => {
  const classes = usePropsTableStyles();
  const tableHead: string[] = ["name", "description", "default", "controls"];

  return (
    <div className={classes.tableContainer}>
      <table className={classes.table}>
        <thead className={classes.thead}>
          <tr className={classes.tr}>
            {tableHead.map((value, index) => (
              <th className={classes.th} key={index}>
                {value}
              </th>
            ))}
            <th className={classes.th}>
              <aside className={classes.buttonContainer}>
                <Button
                  variant="outlined"
                  className={classes.tbutton}
                  rightIcon={<BiRefresh className={classes.buttonIcon} />}
                  iconSpacing={5}
                  onClick={onReset}
                >
                  Reset
                </Button>
                <Button
                  variant="outlined"
                  className={classes.tbutton}
                  iconSpacing={5}
                  onClick={onCopyCode}
                >
                  Copy code
                </Button>
              </aside>
            </th>
          </tr>
        </thead>
        <tbody className={classes.tbody}>
          {body.map((contents, index) => (
            <tr className={classes.tr} key={index}>
              <td className={classes.td}>{contents.name}</td>
              <td className={classes.td}>{contents.description}</td>
              <td className={classes.td}>
                <Tag name={contents.default as string} />
              </td>
              <td className={classes.td}>{contents.controls && contents.controls}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComponentProps;
