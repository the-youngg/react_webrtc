import React from "react";
import {Button, Text} from "react-native";
import websocket from "../service/websocket.service";

const VideoScreen: React.FC = () => {

    const connect = () => {
        websocket.connect()
    }

    const send = () => {
        websocket.send();
    }

    const disconnect = () => {
        websocket.disconnect()
    }

    return (
        <React.Fragment>
            <Text>哈哈</Text>

            <Button title={"连接"} onPress={connect}/>
            <Button title={"发送"} onPress={send}/>
            <Button title={"断开"} onPress={disconnect}/>
        </React.Fragment>
    )
};
export default VideoScreen;
