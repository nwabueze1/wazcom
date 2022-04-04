import {
  AccordionProps,
  ButtonProps,
  BreadCrumbProps,
  CardProps,
  LoaderProps,
  GalleryProps,
  ImageSelectorProps,
  InputGroupProps,
  TableProps,
  MenuCardProps,
  DisplayCardProps,
  NotificationProps,
  RadioButtonProps,
  EmptyStateProps,
} from "../core";

import {
  CheckBoxInputProps,
  ComboBoxInputProps,
  RichTextInputProps,
  SelectInputProps,
  TextInputProps,
  ToggleInputProps,
} from "../io";

import {
  GqlComboBoxProps,
  GqlMediaLibraryProps,
  GqlMediaLibrarySelectorProps,
} from "../gql";

export type ComponentPropType = {
  component: any;
  name: string;
} & (
  | AccordionStory
  | BreadCrumbStory
  | ButtonStory
  | CardStory
  | CheckBoxStory
  | LoaderStory
  | ComboBoxStory
  | TextStory
  | GalleryStory
  | ImageSelectorStory
  | ToggleStory
  | TableStory
  | MenuCardStory
  | DisplayCardStory
  | NotificationStory
  | RadioButtonStory
  | SelectStory
  | RichTextStory
  | GqlComboBoxStory
  | EmptyStateStory
  | SchedulerStory
  | InputGroupStory
  | GqlMediaLibraryStory
  | GqlMediaLibrarySelectorStory
);

type AccordionStory = {
  props: AccordionProps;
};

type LoaderStory = {
  props: LoaderProps;
};

type BreadCrumbStory = {
  props: BreadCrumbProps;
};

type ButtonStory = {
  props: ButtonProps;
};

type CardStory = {
  props: CardProps;
};

type CheckBoxStory = {
  props: CheckBoxInputProps;
};

type ComboBoxStory = {
  props: ComboBoxInputProps;
};

type TextStory = {
  props: TextInputProps;
};

type GalleryStory = {
  props: GalleryProps;
};

type ImageSelectorStory = {
  props: ImageSelectorProps;
};

type ToggleStory = {
  props: ToggleInputProps;
};

type TableStory = {
  props: TableProps;
};

type MenuCardStory = {
  props: MenuCardProps;
};

type DisplayCardStory = {
  props: DisplayCardProps;
};

type NotificationStory = {
  props: NotificationProps;
};

type RadioButtonStory = {
  props: RadioButtonProps;
};

type SelectStory = {
  props: SelectInputProps;
};

type RichTextStory = {
  props: RichTextInputProps;
};

type GqlComboBoxStory = {
  props: GqlComboBoxProps;
};

type EmptyStateStory = {
  props: EmptyStateProps;
};

type SchedulerStory = {
  props: SchedulerStory;
};
type InputGroupStory = {
  props: InputGroupProps;
};

type GqlMediaLibraryStory = {
  props: GqlMediaLibraryProps;
};

type GqlMediaLibrarySelectorStory = {
  props: GqlMediaLibrarySelectorProps;
};
