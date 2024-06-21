import {Canvas} from "@react-three/fiber";
import {Experience} from "./components/Experience";
import {Leva} from "leva";
import {isHost} from "playroomkit";

const DEBUG = true

function App() {
    return (
        <>
            <Leva hidden={!DEBUG || !isHost()}/>
            <Canvas shadows camera={{position: [3, 3, 3], fov: 30}}>
                <color attach="background" args={["#ececec"]}/>
                <Experience/>
            </Canvas>
        </>
    );
}

export default App;
