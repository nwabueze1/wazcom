import {
  AccordionProps,
  ButtonProps,
  BreadCrumbProps,
  CardProps,
  CarouselProps,
  LoaderProps,
  GalleryProps,
  ImageSelectorProps,
  TableProps,
  MenuCardProps,
  DisplayCardProps,
  NotificationProps,
  EmptyStateProps,
} from "../core";

import {
  CheckBoxInputProps,
  ComboBoxInputProps,
  RichTextInputProps,
  SelectInputProps,
  InputGroupProps,
  TextInputProps,
  ToggleInputProps,
  RadioButtonInputProps,
  CurrencyInputFieldProps,
} from "../io";

import {
  GqlComboBoxProps,
  GqlMediaLibraryProps,
  GqlMediaLibrarySelectorProps,
} from "../gql";
import { PhoneNumberInputProps } from "io/PhoneNumberInput/types";

import { NavProps } from "templates/Navs/types";

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
  | CarouselStory
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
  | CurrencyInputStory
  | PhoneNumberInputStroy
);

export type TemplatePropType = {
  component: any;
  name: string;
} & (
  | NavsStory
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

type CarouselStory = {
  props: CarouselProps;
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
  props: RadioButtonInputProps;
};

type SelectStory = {
  props: SelectInputProps;
};

type RichTextStory = {
  props: RichTextInputProps;
};

type CurrencyInputStory = {
  props: CurrencyInputFieldProps;
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

type PhoneNumberInputStroy = {
  props: PhoneNumberInputProps;
};

type NavsStory = {
  props: NavProps
}