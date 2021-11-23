let state = {
   socketId: null,
   localStream: null,
   remoteStream: null,
   screenSharingStream: null,
   allowConnectionsFromStrangers: false, 
   screenSharingActive: false,
}

export const setSocketId = (socketId) => {
    
    state = {
        ...state,
        socketId,
    }
}

export const setLocalStream = (localStream) => {
    
    state = {
        ...state,
        localStream,
    }
}

export const setAllowConnectionsFromStrangers = (allowConnectionsFromStrangers) => {

    state = {
        ...state,
        allowConnectionsFromStrangers,
    }
}

export const setScreenSharingActive = (screenSharingActive) => {

    state = {
        ...state,
        screenSharingActive,
    }
}


export const setScreenSharingStream = (screenSharingStream) => {

    state = {
        ...state,
        screenSharingStream,
    }
}


export const setRemoteStream = (remoteStream) => {

    state = {
        ...state,
        remoteStream,
    }
}


export const getState = () => {
    return state;
}