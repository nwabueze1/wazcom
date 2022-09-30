import { FC } from "react";
import clx from "classnames";
import { getDay } from "../../../../../utilities/getTime";
import { truncate } from "lodash";
import { CoreArticleTemplateFields } from "../..";
import { useRelatedPostPoliticoStyles } from ".";

export const RelatedPostPolitico: FC<CoreArticleTemplateFields> = ({
    article,
    className,
    handleClick,
}) => {
    const classes = useRelatedPostPoliticoStyles();

    return (
        <div
            onClick={() => {
                handleClick?.(article.slug);
            }}
            className={clx(classes.root, className)}
        >
            <div className={classes.body}>
                <div className={classes.thumbnailImgContainer}>
                    <img src={article.featured_image} className={classes.thumbnailImg} />
                </div>
                <p className={classes.category}>
                    {article.category ? article.category : "COUNTRY"}
                </p>
                <div className={classes.thumbnailDetails}>
                    <p className={classes.articleTitle}>
                        {truncate(article.title, { length: 100 })}
                    </p>
                    <div className={classes.authorContainer}>
                        <div>
                            <p className={classes.date}>{getDay(article.created_at)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
