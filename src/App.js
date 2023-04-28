import { Canvas } from "@react-three/fiber";
import "./App.css";
import { MainContainer } from "./components/MainContainer";
import { OrbitControls } from "@react-three/drei";

function App() {
	return (
		<div className="App">
			<div className="canvas-container">
				<Canvas>
					<MainContainer />
					<OrbitControls enableZoom={false} />
				</Canvas>
			</div>
		</div>
	);
}

export default App;
