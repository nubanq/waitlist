import { useEffect, useState, type ReactNode } from "react";

import "@/index.css";

// Custom Components
import logo from "@/assets/svg/nubanq-logo.svg";
import { FooterSection } from "@/components/blocks/footer-section";

const lastUpdated = "October 1, 2025";

type PrivacySection = {
	title: string;
	content: ReactNode[];
};

const sections: PrivacySection[] = [
	{
		title: "1. Introduction",
		content: [
			'Nubanq ("we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and disclose information about you when you use the Nubanq mobile application (the "App") and related services (the "Services").',
		],
	},
	{
		title: "2. Information We Collect",
		content: [
			"We collect information you provide directly to us, such as when you create an account, subscribe to services, or contact support. This may include your name, email address, phone number, and government-issued identification.",
			"We also collect information automatically when you use the App, including device information, IP address, and usage data.",
		],
	},
	{
		title: "3. How We Use Your Information",
		content: [
			"We use your information to operate and improve the Services, process transactions, communicate with you, and comply with legal obligations.",
		],
	},
	{
		title: "4. How We Share Your Information",
		content: [
			"We may share your information with service providers, financial partners, and regulatory authorities as necessary to provide the Services, fulfill legal obligations, or protect Nubanq and its users.",
		],
	},
	{
		title: "5. Data Retention",
		content: [
			"We retain your information for as long as necessary to provide the Services, comply with legal obligations, resolve disputes, and enforce our agreements.",
		],
	},
	{
		title: "6. Your Choices",
		content: [
			"You may update your account information and communication preferences at any time. You may also request deletion of your account, subject to legal and regulatory requirements.",
		],
	},
	{
		title: "7. Security",
		content: [
			"We implement reasonable safeguards to protect your information, including encryption and access controls. However, no method of transmission or storage is completely secure.",
		],
	},
	{
		title: "8. International Data Transfers",
		content: [
			"Your information may be transferred to and processed in countries other than your own, including the United States. These countries may have different data protection laws than your country of residence.",
		],
	},
	{
		title: "9. Children's Privacy",
		content: [
			"The Services are not directed to individuals under 18. We do not knowingly collect personal information from children under 18.",
		],
	},
	{
		title: "10. Changes to This Privacy Policy",
		content: [
			"We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy in the App or through other communications.",
		],
	},
	{
		title: "11. Contact Us",
		content: [
			<>
				If you have questions about this Privacy Policy or our privacy practices, please contact
				us at{" "}
				<a href="mailto:support@nubanq.com" className="font-semibold">
					support@nubanq.com
				</a>
				.
			</>,
		],
	},
];

export function PrivacyPolicyPage() {
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
		<div className="min-h-screen min-w-screen">
			<div
				className="container flex flex-col sm:mx-auto mt-1 pt-0 px-7 sm:overflow-hidden"
				style={{
					width: windowWidth < 640 && windowWidth * 0.9,
					marginLeft: windowWidth < 640 && (windowWidth - windowWidth * 0.9) / 2,
					// backgroundColor: "#f5f6f9",
				}}
			>
				<div className="flex flex-col sm:flex-row sm:justify-between items-center mb-4 md:mb-20 mt-6">
					<a href="/">
						<img
							src={logo}
							alt="Nubanq Logo"
							className="w-auto lg:pl-1 h-9 sm:h-6 md:h-7 lg:h-9 xl:h-10 mb-3 sm:mb-0"
						/>
					</a>

					<ul className="flex flex-row gap-5 text-primary">
						<li>
							<a
								href="/"
								className="text-sm text-muted-foreground underline-offset-4 hover:underline"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="/privacy"
								className="text-sm text-muted-foreground underline-offset-4 hover:underline"
							>
								Privacy
							</a>
						</li>
						<li>
							<a
								href="/terms"
								className="text-sm text-muted-foreground underline-offset-4 hover:underline"
							>
								Terms
							</a>
						</li>
					</ul>
				</div>
				<h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-gray-900 leading-13 sm:leading-10 md:leading-13 lg:leading-18 2xl:leading-28 pt-10 md:pt-0">
					Privacy Policy
				</h1>
				<p className="mt-6 text-sm text-muted-foreground">Last updated {lastUpdated}</p>

				<div className="mt-10 mb-20 space-y-1">
					{sections.map((section) => (
						<section key={section.title} className="space-y-3 pb-8 last:pb-0">
							<h2 className="text-2xl font-semibold text-gray-900">{section.title}</h2>
							<div className="space-y-3">
								{section.content.map((paragraph, index) => (
									<p
										key={`${section.title}-${index}`}
										className="text-base leading-relaxed text-muted-foreground"
									>
										{paragraph}
									</p>
								))}
							</div>
						</section>
					))}
				</div>
			</div>
			{/* Disclaimers & copyright */}
			<div className="container flex flex-col justify-self-center pb-10">
				<FooterSection />
			</div>
		</div>
	);
}

export default PrivacyPolicyPage;
