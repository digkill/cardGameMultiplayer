import {Canvas} from "@react-three/fiber";
import {Experience} from "./components/Experience";
import {Leva} from "leva";
import {isHost} from "playroomkit";
import {UI} from "./components/UI.jsx";

const DEBUG = true

function App() {
    return (
        <>
            <Leva hidden={!DEBUG || !isHost()}/>
            <Canvas shadows camera={{position: [3, 3, 3], fov: 30}}>
                <color attach="background" args={["#ececec"]}/>
                <Experience/>
            </Canvas>
            <UI />
        </>
    );
}

export default App;
