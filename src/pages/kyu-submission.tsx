// Dependencies
import { useEffect, useState, type ReactNode } from "react";
import Lottie from "lottie-react";
import "@/index.css";

// Assets
import logo from "@/assets/svg/nubanq-logo.svg";
import arrowBack from "@/assets/json/left-arrow-green.json";

export function KyuSubmissionPage() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [windowHeight, setWindowHeight] = useState(window.innerHeight);
	const [insideHeight, setInsideHeight] = useState(window.innerHeight * 0.93 * 0.95);
	const [loading, setLoading] = useState(true);

	// Listen to window resizes
	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth);
			setWindowHeight(window.innerHeight);

			setInsideHeight(window.innerHeight * 0.93 * 0.95);
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Check if fonts are loaded
	useEffect(() => {
		if (document.fonts.status === "loaded") {
			setLoading(false);
		} else {
			document.fonts.ready.then(() => {
				setLoading(false);
			});
		}
	}, []);

	return (
		<div className="min-h-dvh min-w-screen">
			<div className="flex h-lvh flex-col justify-center items-center">
				<img
					src={logo}
					alt="Nubanq Logo"
					className="w-auto lg:pl-1 h-12 sm:h-6 md:h-7 lg:h-9 xl:h-10 mb-6"
				/>
				<Lottie className="h-40 mb-2" animationData={arrowBack} loop autoplay />
				<h2 className="text-xl font-medium">Go back to the app</h2>
			</div>
		</div>
	);
}

export default KyuSubmissionPage;
