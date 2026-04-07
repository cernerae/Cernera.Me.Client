export type SendContactEmailResponseType = {
    detail: string;
}

export type SendContactEmailRequestType = {
    body: {
        name: string;
        email: string;
        subject: string;
        message: string;
    }
}

export type SendContactEmailActionType = {
    type: string;
    payload: SendContactEmailRequestType;
};