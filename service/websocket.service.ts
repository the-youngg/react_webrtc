import io from "socket.io-client";

class WebsocketService {

    //@ts-ignore
    private socket: SocketIOClient.Socket;

    connect = () => {
        const socketOptions: SocketIOClient.ConnectOpts = {
            transports: ['websocket'],
            reconnection: false,
        };

        this.socket = io.connect("http://192.168.1.102:9090", socketOptions)
        this.socket.on('connect', () => {
            console.log("连接成功", this.socket.connected);
        });
    }

    send = () => {
        this.socket.emit("hello", {name: "123"})
    }

    disconnect = () => {
        this.socket.disconnect()
    }

}

const websocket = new WebsocketService();
export default websocket;
