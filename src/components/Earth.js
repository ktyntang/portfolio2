import { useTexture } from "@react-three/drei";
import earthTextureJpg from "../assets/earth.jpg";
import earthNormalMapJpg from "../assets/earth_normal_map.jpg";
import earthSpecularMapJpg from "../assets/earth_specular_map.jpg";
import earthDisplacementMapJpg from "../assets/earth_displacement_map.jpg";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function Earth() {
	const earthRef = useRef(null);

	const [
		earthTexture,
		earthNormalMap,
		earthSpecularMap,
		earthDisplacementMap,
	] = useTexture([
		earthTextureJpg,
		earthNormalMapJpg,
		earthSpecularMapJpg,
		earthDisplacementMapJpg,
	]);

	useFrame(() => {
		earthRef.current.rotation.y += 0.002;
	});

	return (
		<>
			<mesh position={[0, 0, 0]} ref={earthRef}>
				{/* radius, x-axis segments, y-axis segments */}
				<sphereGeometry args={[1, 32, 32]} />
				<meshPhongMaterial
					map={earthTexture} //image
					normalMap={earthNormalMap} //bumpiness
					specularMap={earthSpecularMap} //shininess
					displacementMap={earthDisplacementMap} //bump height
					displacementScale={0.1}
				/>
			</mesh>
		</>
	);
}
