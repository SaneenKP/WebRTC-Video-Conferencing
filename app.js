const express = require('express')
const http = require('http')
//const { callType } = require('./public/js/constants.js')

const PORT = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)

app.use(express.static("public"))

app.get('/',(req , res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

let connectedPeers = []

io.on('connection', (socket) => {
    connectedPeers.push(socket.id)
    console.log(connectedPeers);
    
    // socket.on('pre-offer', (data)=>{

    //     const {calleePersonalCode ,callType } = data
    //     const connectedPeer = connectedPeers.find((socketId)=>{
        
    //         peerSocketId == calleePersonalCode
    //     })
    //     if(connectedPeer) {
    //         const data = {
    //             callerSocketId: socket.id,
    //             callType,
    //         }
    //         io.to(calleePersonalCode).emit('pre-offer',data)
    //     }

    // })

    socket.on('disconnect' , ()=>{
       console.log("User Disconnected"); 

       const newConnectedPeers = connectedPeers.filter((peerSocketId)=>{

            peerSocketId !== socket.io
       })
       connectedPeers = newConnectedPeers;
       console.log(connectedPeers);
    })
})

app.get('/hello',(req , res)=>{
    res.send("this is hello section")
})

app.get('/helloWorld',(req , res)=>{
    res.send("this is helloWorld section")
})

server.listen(PORT , () =>{
    console.log("listening or port :"+PORT);
})