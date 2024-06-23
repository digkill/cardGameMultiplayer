import {Environment, OrbitControls} from "@react-three/drei";
import {Card} from "./Card.jsx";

export const Experience = () => {
    return (
        <>
            <OrbitControls/>
            <Card/>
            <Environment preset="dawn" background blur={2} />
        </>
    );
};
