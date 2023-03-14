import { FC } from "react";
import { RiTodoLine } from "react-icons/ri";
import { AiFillCheckCircle } from "react-icons/ai";
import { Card, CardProps, Wrapper } from "../../core";
import { useCardStyles } from "./styles";
import { CardViewProps } from "./types";

export const CardView: FC<CardViewProps> = () => {
  const classes = useCardStyles();

  const cards: CardProps[] = [
    {
      variant: "template",
      title: "MBMC",
      content:
        "A Five pages restaurant templated with fully designed Home, About, Contact, Menu and Cart Pages",
      image: {
        src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        alt: "MBMC",
      },
      tags: [
        {
          name: "Restaurant",
        },
        {
          name: "Website",
        },
      ],
      status: undefined,

      primaryButtonProps: {},
      secondaryButtonProps: { variant: "outlined" },
      secondaryButtonText: "Customise",
      primaryButtonText: "Preview",
    },
    {
      variant: "service-template",
      title: "MBMC",
      content:
        "A Five pages restaurant templated with fully designed Home, About, Contact, Menu and Cart Pages",
      image: {
        src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        alt: "MBMC",
      },
      tags: [
        {
          name: "Restaurant",
        },
        {
          name: "Website",
        },
      ],
      status: {
        name: "Inactive",
      },

      primaryButtonProps: {},
      secondaryButtonProps: { variant: "outlined" },
      secondaryButtonText: "Set active",
      primaryButtonText: "Preview",
    },
    {
      variant: "service",
      title: "Blog service",
      content:
        "Create customized blogs and manage all posts and comments from your hivedeck dashboard.",
      image: {
        src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        alt: "MBMC",
      },

      primaryButtonProps: {},
      secondaryButtonProps: { variant: "outlined" },
      secondaryButtonText: "Set active",
      primaryButtonText: "Preview",
      icon: <RiTodoLine size={25} fill="#23803D" />,
      footer: {
        text: "Activated",
        icon: <AiFillCheckCircle size={22} fill="#23803D" />,
      },
    },
    {
      variant: "overview",
      title: "$175k",
      content: "vs last month",
      rate: { trend: "ascending", value: "25%" },
      icon: <RiTodoLine fill="#23803D" />,
      label: "Revenue",
    },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1 className={classes.title}>Card</h1>
          <div className={classes.description}>
            <p className={classes.descriptionText}>
              A card is a container for carrying information. There is not too much limit to the
              types of content that can be carried. It makes a type of information centralised,
              enhances the sense of block and is easier to operate.
            </p>
          </div>
        </div>

        {cards.map(
          (
            {
              title,
              content,
              image,
              tags,
              variant,
              primaryButtonProps,
              primaryButtonText,
              secondaryButtonProps,
              secondaryButtonText,
              status,
              icon,
              rate,
              label,
              footer,
            },
            i,
          ) => (
            <div key={variant}>
              <h4 className={classes.cardTitle}>{variant} Card</h4>
              <Wrapper>
                <Card
                  key={i}
                  title={title}
                  content={content}
                  image={image}
                  tags={tags}
                  variant={variant}
                  status={status}
                  primaryButtonProps={primaryButtonProps}
                  primaryButtonText={primaryButtonText}
                  secondaryButtonProps={secondaryButtonProps}
                  secondaryButtonText={secondaryButtonText}
                  icon={icon}
                  rate={rate}
                  label={label}
                  footer={footer}
                />
              </Wrapper>
            </div>
          ),
        )}
      </div>
    </div>
  );
};
