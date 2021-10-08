export interface onBoardSeller_onBoardSeller {
    __typename: "paymentResponse";
    redirect_url: string | null;
    status: string;
    error_message: string | null;
}
export interface onBoardSeller {
    onBoardSeller: onBoardSeller_onBoardSeller;
}
export interface onBoardSellerVariables {
    userId: string;
}
