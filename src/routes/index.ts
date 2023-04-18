import { Browser } from "../view/Browser";
import { Templates } from "../view/Templates";
import { TextInputView } from "../view/TextInput";
import { EmailInputView } from "../view/EmailInput";
import { TextAreaView } from "../view/TextArea";
import { NumberInputView } from "../view/NumberInput";
import { ButtonView } from "../view/Button";
import { TabsView } from "../view/Tab";
import { NotificationView } from "../view/Notification";
import { URLInputView } from "../view/URLInput";
import { PasswordInputView } from "../view/PasswordInput";
import { CurrencyInputView } from "../view/CurrencyInput";
import { SelectInputView } from "../view/SelectInput";
import { TableView } from "../view/Table";
import { CardView } from "../view/Card";
import { CheckBoxInputView } from "view/CheckBoxInput";
import { RadioButtonView } from "view/RadioButtonInput";
import { ToggleInputView } from "view/ToggleInput";
import { StepsView } from "view/Steps";
import { AccordionView } from "view/Accordion";
import { ProgressView } from "view/Progress";
import { PickersView } from "view/Pickers";
import { PhoneNumberInputView } from "view/PhoneNumberInput";

export default [
  {
    key: "Browser",
    path: "/",
    exact: true,
    component: Browser,
  },
  {
    key: "Templates",
    path: "/templates",
    exact: true,
    component: Templates,
  },
  {
    key: "Card",
    path: "/cards",
    exact: true,
    component: CardView,
  },
  {
    key: "TextInputView",
    path: "/text-input",
    exact: true,
    component: TextInputView,
  },
  {
    key: "PickersView",
    path: "/pickers",
    exact: true,
    component: PickersView,
  },
  {
    key: "RadioButtonView",
    path: "/radio-button",
    exact: true,
    component: RadioButtonView,
  },
  {
    key: "ToggleInputView",
    path: "/toggle-input",
    exact: true,
    component: ToggleInputView,
  },
  {
    key: "EmailInputView",
    path: "/email-input",
    exact: true,
    component: EmailInputView,
  },
  {
    key: "NumberInputView",
    path: "/number-input",
    exact: true,
    component: NumberInputView,
  },
  {
    key: "PhoneNumberInputView",
    path: "/phone-number-input",
    exact: true,
    component: PhoneNumberInputView,
  },
  {
    key: "URLInputView",
    path: "/url-input",
    exact: true,
    component: URLInputView,
  },
  {
    key: "StepsView",
    path: "/steps",
    exact: true,
    component: StepsView,
  },
  {
    key: "PasswordInputView",
    path: "/password-input",
    exact: true,
    component: PasswordInputView,
  },
  {
    key: "CurrencyInputView",
    path: "/currency-input",
    exact: true,
    component: CurrencyInputView,
  },
  {
    key: "CheckBoxInputView",
    path: "/checkbox-input",
    exact: true,
    component: CheckBoxInputView,
  },
  {
    key: "TextAreaView",
    path: "/textarea-input",
    exact: true,
    component: TextAreaView,
  },
  {
    key: "ProgressView",
    path: "/progress",
    exact: true,
    component: ProgressView,
  },
  {
    key: "ButtonView",
    path: "/buttons",
    exact: true,
    component: ButtonView,
  },
  {
    key: "AccordionView",
    path: "/accordion",
    exact: true,
    component: AccordionView,
  },
  {
    key: "TabsView",
    path: "/tabs",
    exact: true,
    component: TabsView,
  },
  {
    key: "NotificationView",
    path: "/notification",
    exact: true,
    component: NotificationView,
  },
  {
    key: "SelectInputView",
    path: "/select-input",
    exact: true,
    component: SelectInputView,
  },
  {
    key: "TableView",
    path: "/table",
    exact: true,
    component: TableView,
  },
];
