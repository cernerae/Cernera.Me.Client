export type SendContactEmailResponseType = {
    success: boolean;
    message: string;
}

export type SendContactEmailRequestType = {
    body: {
        name: string;
        email: string;
        subject: string;
        message: string;
        toEmail: string;
    }
}

export type SendContactEmailActionType = {
    type: string;
    payload: SendContactEmailRequestType;
};