export var Status;
(function (Status) {
    Status["accepted"] = "accepted";
    Status["cancelled"] = "cancelled";
    Status["completed"] = "completed";
    Status["pending"] = "pending";
    Status["processing"] = "processing";
})(Status || (Status = {}));
export var PaymentType;
(function (PaymentType) {
    PaymentType["Bank_Transfer"] = "Bank_Transfer";
    PaymentType["Cash_On_Delivery"] = "Cash_On_Delivery";
    PaymentType["PAYPAL"] = "PAYPAL";
    PaymentType["PAYSTACK"] = "PAYSTACK";
})(PaymentType || (PaymentType = {}));
