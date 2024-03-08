import http from 'http'
import SocketService from './services/socket'

async function init(){
    //initializing the socket
    const socketService = new SocketService()
    //initializing the http server
    const  httpServer = http.createServer()
    const PORT = process.env.PORT? process.env.PORT : 8000

    socketService.io.attach(httpServer)

    httpServer.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
    
    socketService.initListeners()
}

init()