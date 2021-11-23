import * as wss from './wss.js'

export const sendPreOffer = (callType,calleePersonalCode) => {
    console.log("pree offer came");
    const data = {
        callType,
        calleePersonalCode
    }

    wss.sendPreOffer(data)
}

export const handlePreOffer = (data) => {
    console.log("pre offer came");
    console.log(data);
}