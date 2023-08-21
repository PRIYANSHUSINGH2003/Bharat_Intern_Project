import React from "react";
import { useParams } from "react-router-dom";

import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const { roomID } = useParams();
    const meeting = async (element) => {
        const appID = 296358055;
        const serverSecret = "ddfd56bf9cc05855545472057f26c6a8";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomID,
            Date.now().toString(),
            "Priyanshu Singh"
        );
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
        });
    };

    return <div ref={meeting} style={{ width: "100vw", height: "100vh" }}></div>;
};

export default Room;