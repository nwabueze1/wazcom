import React, { FC } from "react";
import { useTablePaginationStyles } from "./styles";
import { SelectInput } from "../../../../io";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { TablePaginationProps } from "./types";
import clx from "classnames";

export const TablePagination: FC<TablePaginationProps> = ({
    currentPage,
    lastPage,
    count,
    setTablePagination,
}) => {
    const classes = useTablePaginationStyles();

    const renderPages = () => {
        if (lastPage < 9)
            return new Array(lastPage).fill("").map((_, index) => {
                const isActive = currentPage === index + 1;
                return (
                    <p
                        key={index}
                        className={clx(
                            classes.paginationPage,
                            isActive && classes.paginationPageActive,
                        )}
                        onClick={() => {
                            if (isActive) return;
                            setTablePagination({ count, lastPage, currentPage: index + 1 });
                        }}
                    >
                        {index + 1}
                    </p>
                );
            });

        return <div>sksk</div>;
    };

    return (
        <div className={classes.root}>
            <div className={classes.paginationDirection}>
                <BsFillCaretLeftFill className={classes.paginationDirectionIcon} />
                <p>Previous</p>
            </div>
            <div className={classes.paginationRows}>
                <p>Rows per page</p>
                <SelectInput
                    className={classes.paginationSelect}
                    classNames={{
                        classes: {
                            select: classes.paginationSelectInput,
                            icon: classes.paginationSelectInputIcon,
                        },
                        optionLabel: classes.paginationSelectInputLabel,
                    }}
                    options={[
                        { label: "2", value: "2" },
                        { label: "5", value: "5" },
                        { label: "10", value: "10" },
                        { label: "20", value: "20" },
                    ]}
                    onChange={({ value: count }: { name: string; value: string }) => {
                        setTablePagination({ currentPage, lastPage, count: Number(count) });
                    }}
                    value={String(count)}
                />
            </div>
            <div className={classes.paginationPages}>{renderPages()}</div>
            <div className={classes.paginationDirection}>
                <p>Next</p>
                <BsFillCaretRightFill className={classes.paginationDirectionIcon} />
            </div>
        </div>
    );
};
