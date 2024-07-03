import {Environment, OrbitControls} from "@react-three/drei";
import {MobileController} from "./MobileController.jsx";
import {isStreamScreen} from "playroomkit";
import {Gameboard} from "./Gameboard.jsx";

export const Experience = () => {
    return (
        <>
            <OrbitControls/>
            {
                isStreamScreen() ? <Gameboard /> : <MobileController />
            }
            <MobileController/>
            <Environment preset="dawn" background blur={2}/>
        </>
    );
};
