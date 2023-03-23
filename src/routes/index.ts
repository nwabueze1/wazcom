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
    key: "RadioButtonView",
    path: "/radio-button",
    exact: true,
    component: RadioButtonView,
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
    key: "URLInputView",
    path: "/url-input",
    exact: true,
    component: URLInputView,
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
    key: "ButtonView",
    path: "/buttons",
    exact: true,
    component: ButtonView,
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
