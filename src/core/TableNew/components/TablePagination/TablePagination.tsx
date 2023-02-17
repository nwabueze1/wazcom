import { FC } from "react";
import { useTablePaginationStyles } from "./styles";
import { SelectInput } from "../../../../io";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { TablePaginationProps } from "./types";
import clx from "classnames";
import { Pagination } from "./Pagination";

export const TablePagination: FC<TablePaginationProps> = ({
    currentPage,
    lastPage,
    count,
    setTablePagination,
}) => {
    const classes = useTablePaginationStyles();

    const renderPages = () => {
        return lastPage < 10 ? (
            new Array(lastPage).fill("").map((_, index) => {
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
            })
        ) : (
            <Pagination
                currentPage={currentPage}
                pages={lastPage}
                setPage={(page: number) => {
                    setTablePagination({ count, lastPage, currentPage: page });
                }}
            />
        );
    };

    const handlePreviousClick = () => {
        if (currentPage === 1) return;
        setTablePagination({ count, lastPage, currentPage: currentPage - 1 });
    };

    const handleNextClick = () => {
        if (currentPage === lastPage) return;
        setTablePagination({ count, lastPage, currentPage: currentPage + 1 });
    };

    return (
        <div className={classes.root}>
            <div
                className={clx(
                    classes.paginationDirection,
                    currentPage > 1 && classes.paginationDirectionActive,
                )}
                onClick={handlePreviousClick}
            >
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
                        { label: "5", value: "5" },
                        { label: "10", value: "10" },
                        { label: "20", value: "20" },
                    ]}
                    onChange={({ value: count }: { name: string; value: string }) => {
                        setTablePagination({ currentPage: 1, lastPage, count: Number(count) });
                    }}
                    value={String(count)}
                />
            </div>
            <div className={classes.paginationPages}>{renderPages()}</div>
            <div
                className={clx(
                    classes.paginationDirection,
                    currentPage < lastPage && classes.paginationDirectionActive,
                )}
                onClick={handleNextClick}
            >
                <p>Next</p>
                <BsFillCaretRightFill className={classes.paginationDirectionIcon} />
            </div>
        </div>
    );
};
