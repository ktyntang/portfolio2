import { Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export const AnimatedStars = () => {
	const starsRef = useRef();

	useFrame(() => {
		starsRef.current.rotation.y += 0.0001;
		starsRef.current.rotation.x += 0.0001;
		starsRef.current.rotation.z += 0.0001;
	});
	return <Stars ref={starsRef} />;
};
