import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useHelper } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { DirectionalLightHelper } from "three";

import { AnimatedStars } from "./AnimatedStars";
import { Earth } from "./Earth";

export function MainContainer() {
	const directionalLightRef = useRef(null);
	useHelper(directionalLightRef, DirectionalLightHelper, 1, "hotpink");

	return (
		<>
			<color attach="background" args={["black"]} />
			<Suspense fallback={null}>
				<Earth />
			</Suspense>
			<AnimatedStars />
			<ambientLight args={[{ color: "0xff0000" }]} intensity={0.2} />
			<directionalLight
				position={[0, 0, 3]}
				intensity={0.5}
				ref={directionalLightRef}
			/>
		</>
	);
}
