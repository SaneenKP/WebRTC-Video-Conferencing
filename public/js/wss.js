import * as store from './store.js';
import * as ui from './ui.js';
import * as webRTCHandler from './webRTCHandler.js'

let socketIO = null;
export const registerSocketEvents = (socket) => {

    socketIO = socket
   socket.on('connect', ()=>{
        console.log("successfully connected to websocket server")
        store.setSocketId(socket.id)
        ui.updatePersonalCode(socket.id)
    })

    socket.on('pre-offer', (data)=>{
        
        webRTCHandler.handlePreOffer(data)


    })
}

export const sendPreOffer = (data) => {

    console.log("emiting to server pre offer");
    socketIO.emit('pre-offer',data)
}


