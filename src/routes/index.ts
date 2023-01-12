
import { Browser } from "view/Browser";
import { Templates } from "view/Templates";
import { TextInputView } from "view/TextInput";
import { EmailInputView } from "view/EmailInput";
import { TextAreaView } from "view/TextArea";
import { NumberInputView } from "view/NumberInput";

export default [
    {
        name: 'Browser',
        path: "/",
        exact: true,
        component: Browser
    },
    {
        name: 'Templates',
        path: "/",
        exact: true,
        component: Templates
    },
    {
        name: 'TextInputView',
        path: "/text-input",
        exact: true,
        component: TextInputView
    },
    {
        name: 'EmailInputView',
        path: "/email-input",
        exact: true,
        component: EmailInputView
    },
    {
        name: 'NumberInputView',
        path: "/number-input",
        exact: true,
        component: NumberInputView
    },
    {
        name: 'TextAreaView',
        path: "/textarea-input",
        exact: true,
        component: TextAreaView
    },
];