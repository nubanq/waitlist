import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { useFormspark } from "@formspark/use-formspark";

import logo from "./assets/svg/nubanq-logo.svg";
import twitter from "./assets/svg/twitter.svg";
import plus from "./assets/svg/plus.svg";
import "./index.css";
import { LogoCarousel } from "./components/ui/logo-carousel";
import allLogos from "./components/logos";

const myFormId = "FSNoqgTfB";

function App() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [windowHeight, setWindowHeight] = useState(window.innerHeight);
	const [submit, submitting] = useFormspark({ formId: myFormId });
	const [message, setMessage] = useState("");
	const [success, setSuccess] = useState(false);
	const [insideHeight, setInsideHeight] = useState((window.innerHeight - 100) * 0.93 * 0.95);

	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth);
			setWindowHeight(window.innerHeight);

			setInsideHeight((window.innerHeight - 100) * 0.93 * 0.95);
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (success) {
			const timer = setTimeout(() => {
				setSuccess(false);
				setMessage("");
			}, 5000);
			return () => clearTimeout(timer);
		}
	}, [success]);

	async function handleSubmit(e) {
		e.preventDefault();
		await submit({ message });
		setSuccess(true);
	}

	return (
		<div className="min-h-screen min-w-screen bg-gray-50">
			{/* Sticky Header */}
			<header className="sticky py-4 top-0 z-50 bg-gray-50/80 backdrop-blur-md border-0 border-gray-200">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						{/* Logo */}
						<div className="flex items-center pl-2 sm:pl-0 space-x-2">
							<img src={logo} alt="Logo" className="w-auto h-8 lg:h-10" />
						</div>

						{/* Navigation */}
						<nav className="hidden md:flex items-center space-x-8">
							<a href="https://x.com/NubanqOfficial" target="_blank">
								<Button
									variant="ghost"
									className="font-light text-black text-1xl hover:text-gray-900 transition-colors"
								>
									Follow us on <img src={twitter} alt="X logo" className="w-auto h-6" />
								</Button>
							</a>

							{/* <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors flex items-center">
								<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
									<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
								</svg>
								Download on iOS
							</button> */}
						</nav>

						{/* Mobile menu button */}
						<div className="md:hidden">
							<Button
								variant="ghost"
								className="font-light text-sm text-black text-1.5xl hover:text-gray-900 transition-colors"
							>
								Follow on <img src={twitter} alt="X logo" className="w-auto h-5" />
							</Button>
						</div>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<main
				className="container bg-gray-100 sm:mx-auto pt-12 sm:pt-0 px-4 sm:px-6 lg:p-0 xl:p-0 rounded-3xl sm:overflow-hidden"
				style={{
					height: windowWidth > 640 ? (windowHeight - 100) * 0.93 : null,
					width: windowWidth < 640 && windowWidth * 0.9,
					marginLeft: windowWidth < 640 && (windowWidth - windowWidth * 0.9) / 2,
				}}
			>
				<div className="h-full flex flex-col px-5 md:px-0 gap-10 sm:gap-20 lg:gap-0 sm:flex-row items-center sm:justify-center-safe xl:justify-around">
					{/* Left Column - Text Content */}
					<div className="lg:flex-none space-y-4 lg:space-y-8">
						<div className="space-y-4 sm:space-y-5 lg:space-y-6 flexflex-col items-center text-center sm:text-left">
							<h1 className="text-5xl lg:text-7xl 2xl:text-8xl font-bold text-gray-900 leading-14 sm:leading-13 lg:leading-18 2xl:leading-28">
								Be your <span className="block">own bank</span>
							</h1>

							<p className="text-lg sm:text-sm md:text-lg text-gray-400 max-w-md leading-relaxed 2xl:text-3xl 2xl:leading-normal">
								Turn any crypto wallet into<span className="block">a self-custody bank</span>
							</p>
						</div>

						<form
							onSubmit={handleSubmit}
							className="flex flex-col lg:flex-row gap-3 max-w-md items-center"
						>
							<input
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								// type="email"
								placeholder="Enter your email"
								className="flex-1 px-4 py-3 border border-gray-300 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
							/>
							<button
								type="submit"
								disabled={submitting}
								className=" bg-black border border-black hover:bg-gray-800 text-white w-full  lg:w-34 h-12  rounded-lg whitespace-nowrap transition-colors font-medium "
							>
								{submitting ? (
									<svg className="animate-spin h-5 w-5 mx-auto" viewBox="0 0 24 24">
										<circle
											className="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="white"
											strokeWidth="4"
											fill="none"
										/>
										<path
											className="opacity-75"
											fill="white"
											d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
										/>
									</svg>
								) : (
									"Join Waitlist"
								)}
							</button>
						</form>
						{success ? (
							<p className="text-xs text-center lg:-mt-3">
								<span className="font-bold">Success!</span> You've been added to the waitlist
							</p>
						) : null}
						<div className="flex sm:hidden lg:flex flex-row justify-center sm:justify-start items-center gap-2 pt-3 sm:pt-0">
							{/* <img
								src="./src/assets/img/app-icon.png"
								alt="Nubanq App Icon"
								className="w-20 h-20 rounded-2xl"
							/>
							<img src={plus} alt="Plus symbol" className="w-10 h-10 -mr-2" /> */}
							<h2 className="text-xl md:text-2xl lg:text-4xl font-bold">Plug & Play</h2>
							<LogoCarousel columnCount={1} logos={allLogos} />
						</div>
					</div>

					{/* Right Column - Phone Mockup */}
					<div className="self-center lg:self-end">
						<div className="relative">
							<img
								src="./src/assets/img/nubanq-app-angle.png"
								alt="Nubanq App"
								className="hidden lg:block w-auto object-scale-down"
								style={{ height: insideHeight }}
							/>
							<img
								src="./src/assets/img/nubanq-app-full.png"
								alt="Nubanq App"
								className="hidden sm:block lg:hidden w-auto object-scale-down"
								style={{ height: insideHeight * 0.9 }}
							/>
							<img
								src="./src/assets/img/nubanq-app-vertical.png"
								alt="Nubanq App"
								className=" sm:hidden w-auto object-scale-down -mt-8"
							/>
						</div>
					</div>
				</div>
			</main>

			{/* Additional spacing for scroll demonstration */}

			<div className="container flex flex-col px-6 sm:px-0 sm:mx-auto pb-5">
				<div className="flex border-t-1 border-b-0 border-x-0 border-gray-200 mt-16 mb-10"></div>
				<div className="flex flex-col md:flex-row gap-5">
					<div className="md:w-13 md:grow-3">
						<p className=" text-gray-400 text-xs font-light">Disclaimers</p>
						<ol className="list-decimal flex-col text-gray-400 text-xs font-light ml-4">
							<li>
								Nubanq is a financial technology company, not a bank or a digital asset
								custodian.
							</li>
							<li>
								All bank accounts are issued by Lead Bank. Fees may apply. Bridge Ventures LLC
								(“Bridge”) is not a bank.
							</li>
							<li>
								Nubanq enables users to perform banking-related services while being 100% in
								control of their own funds.
							</li>
						</ol>
					</div>

					<div className="md:w-13 md:grow-3">
						<p className=" text-gray-400 text-xs font-light">All rights reserved.</p>
						<p className=" text-gray-400 text-xs font-light">
							Bridge is a financial technology company and is the Program Manager responsible
							for managing and operating the bank accounts on behalf of Lead Bank. Nubanq is not
							a bank. Nubanq is a financial technology company and is the Platform Provider
							responsible for the application, access, and management of bank accounts.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
