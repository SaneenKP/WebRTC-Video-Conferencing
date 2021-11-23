import * as store from "./store.js"
import * as wss from './wss.js'
import * as webRTCHandler from './webRTCHandler.js'
import * as constants from './constants.js'

//Initialization of Socket io
const socket  = io('/')
wss.registerSocketEvents(socket)

//copy link to clipboard functionality
const personalCodeCopyButton = document.getElementById('personalCodeCopyButton')
personalCodeCopyButton.addEventListener('click' , () => {

    const personalCode = store.getState().socketId
    navigator.clipboard && navigator.clipboard.writeText(personalCode)
})

//getting personal code and sending it as offer to chat
const personalCodeChatButton = document.getElementById('personalCodeChatButton')
personalCodeChatButton.addEventListener('click',() => {

    const calleePersonalCode = document.getElementById('personal_code_input').value
    const callType = constants.callType.CHAT_PERSONAL_CODE
    webRTCHandler.sendPreOffer(callType,calleePersonalCode)
})