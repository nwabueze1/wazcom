
import { Browser } from "view/Browser";
import { Templates } from "view/Templates";
import { TextInputView } from "view/TextInput";
import { EmailInputView } from "view/EmailInput";
import { TextAreaView } from "view/TextArea";
import { NumberInputView } from "view/NumberInput";
import { ButtonView } from "view/Button";
import { TabsView } from "view/Tab";
import { NotificationView } from "view/Notification";

import {TestNotify} from "view/Notify/Toast";

export default [
    {
        key: 'Browser',
        path: "/",
        exact: true,
        component: Browser
    },
    {
        key: 'Templates',
        path: "/",
        exact: true,
        component: Templates
    },
    {
        key: 'TextInputView',
        path: "/text-input",
        exact: true,
        component: TextInputView
    },
    {
        key: 'EmailInputView',
        path: "/email-input",
        exact: true,
        component: EmailInputView
    },
    {
        key: 'NumberInputView',
        path: "/number-input",
        exact: true,
        component: NumberInputView
    },
    {
        key: 'TextAreaView',
        path: "/textarea-input",
        exact: true,
        component: TextAreaView
    },
    {
        key: 'ButtonView',
        path: "/buttons",
        exact: true,
        component: ButtonView
    },
    {
        key: 'TabsView',
        path: "/tabs",
        exact: true,
        component: TabsView
    },
    {
        key: 'NotificationView',
        path: "/notification",
        exact: true,
        component: NotificationView
    },


    {
        key: 'TestView',
        path: "/test-notify",
        exact: true,
        component: TestNotify
    },
];