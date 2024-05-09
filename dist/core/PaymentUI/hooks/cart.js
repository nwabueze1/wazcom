import { useSelector } from "react-redux";
export var useRecordCartAction = function () {
    var page = useSelector(function (state) { return ({
        page: state === null || state === void 0 ? void 0 : state.page,
    }); }).page;
    return function (block_uuid, cart_action) {
        var _a;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "cartActionTrigger",
            site_uuid: (_a = page === null || page === void 0 ? void 0 : page.site) === null || _a === void 0 ? void 0 : _a.uuid,
            block_uuid: block_uuid,
            cart_action: cart_action,
            template: "chowfood",
        });
    };
};
