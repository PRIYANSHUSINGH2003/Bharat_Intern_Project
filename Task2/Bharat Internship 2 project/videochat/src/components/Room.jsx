import React from "react";
import { useParams } from "react-router-dom";

import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const { roomID } = useParams();
    const meeting = async (element) => {
        const appID = Room Key ID enter;
        const serverSecret = "Eey Server ID Enter";
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
