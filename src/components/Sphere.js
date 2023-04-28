import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import moonTexture from "../assets/moon.jpg";
import metalTexture from "../assets/metal.jpg";
import { OrbitControls } from "@react-three/drei";

{
	/* <a href="https://www.freepik.com/free-vector/abstract-vector-colorful-mesh-dark-background-futuristic-style-card-elegant-background-business-presentations-corrupted-point-sphere-chaos-aesthetics_26505298.htm#query=sphere%20texture&position=17&from_view=search&track=robertav1_2_sidr">Image by GarryKillian</a> on Freepik */
}

export function Sphere() {
	const colorMap = useLoader(TextureLoader, metalTexture);
	const colorMap2 = useLoader(TextureLoader, moonTexture);
	return (
		<>
			<mesh position={[-2, -2, 0]}>
				{/* radius, x-axis segments, y-axis segments */}
				<sphereGeometry args={[1, 32, 32]} />
				<meshStandardMaterial map={colorMap} />
			</mesh>
			<mesh position={[2, 2, 1]}>
				<sphereGeometry args={[1, 32, 32]} />
				<meshStandardMaterial map={colorMap2} />
			</mesh>
		</>
	);
}
