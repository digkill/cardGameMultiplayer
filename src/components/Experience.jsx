import {Environment, OrbitControls} from "@react-three/drei";
import {MobileController} from "./MobileController.jsx";

export const Experience = () => {
    return (
        <>
            <OrbitControls/>
            <MobileController/>
            <Environment preset="dawn" background blur={2}/>
        </>
    );
};
