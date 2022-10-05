import { FC } from "react";
import { CoreArticleTemplateFields } from "../../types";
import { useRelatedPostPearlStyles } from "./styles";
import clx from "classnames";
import { getTimeFrom } from "../../../../../utilities/getTime";

export const RelatedPostPearl: FC<CoreArticleTemplateFields> = ({
    article,
    className,
    handleClick,
}) => {
    const classes = useRelatedPostPearlStyles();

    const displayTags = () =>
        article?.tags?.slice(0, 2).map((tag, index) => (
            <div key={index} className={classes.tag}>
                {tag?.name}
            </div>
        ));

    return (
        <div
            className={clx(classes.thumbnailContainer, className)}
            onClick={() => {
                handleClick?.(article.slug);
            }}
        >
            <img
                src={article.featured_image}
                alt={article.title}
                className={classes.thumbnailImage}
            />
            <div className={classes.thumbnailContent}>
                <div className={classes.tags}>{displayTags()}</div>
                <h1 className={classes.thumnailTitle}>{article.title}</h1>
                <p className={classes.postedTime}>Posted {getTimeFrom(article.created_at)} ago</p>
            </div>
            <div className={classes.overlay} />
        </div>
    );
};
