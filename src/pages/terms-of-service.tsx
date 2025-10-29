import { useEffect, useState, type ReactNode } from "react";

import "@/index.css";

// Custom Components
import logo from "@/assets/svg/nubanq-logo.svg";
import { FooterSection } from "@/components/blocks/footer-section";

const lastUpdated = "October 1, 2025";

type TermsSection = {
	title: string;
	content: ReactNode[];
};

const sections: TermsSection[] = [
	{
		title: "1. Introduction",
		content: [
			'Welcome to Nubanq, a mobile application operated by Nulabs LLC ("Nubanq", "we", "our", or "us"). These Terms of Service ("Terms") govern your use of the Nubanq mobile application (the "App") and related services (collectively, the "Services"). By accessing or using Nubanq, you agree to these Terms. If you do not agree, do not use the Services.',
		],
	},
	{
		title: "2. Eligibility",
		content: [
			"You must be 18 years or older to use Nubanq. Nubanq is available in all countries except those subject to OFAC restrictions. By using Nubanq, you represent that you meet these requirements.",
		],
	},
	{
		title: "3. About Nubanq",
		content: [
			'Nubanq is a self-custody financial technology application, not a bank or digital asset custodian. All bank accounts are issued by Lead Bank, a regulated U.S. financial institution. Bridge Ventures LLC ("Bridge") acts as Program Manager and operates accounts on behalf of Lead Bank. Nubanq provides the platform that enables access and management of your Nubanq account(s).',
			<>
				<span className="font-semibold">Important:</span> Deposits made through Nubanq are
				automatically converted into USD or EURO stablecoins and transferred to the
				cryptocurrency wallet you provide. Fiat funds are never held by Nubanq. Nubanq accounts
				are not insured by the FDIC, CDIC, or any other deposit insurance program. You are
				solely responsible for safeguarding your cryptocurrency wallet(s) and private keys. If
				you lose access to your wallet, send funds to an incorrect address or blockchain, Nubanq
				and Bridge cannot recover your funds. Stablecoin values may fluctuate depending on
				market conditions. All conversions and transfers are final and irreversible.
			</>,
		],
	},
	{
		title: "4. Subscription Plans & Fees",
		content: [
			"To open a Nubanq account, you must purchase a monthly or annual subscription plan. Each plan includes one (1) currency account. Additional accounts may be purchased for a fixed monthly or annual fee. All pricing is in USD. Additional transaction and/or conversion fees may apply.",
		],
	},
	{
		title: "5. Refunds & Cancellations",
		content: [
			"If you cancel your account within the first 30 days of subscription, you will be refunded for the unused portion of your plan. After 30 days, subscriptions are non-refundable. Refunds are subject to the Apple App Store and Google Play Store refund policies.",
		],
	},
	{
		title: "6. User Responsibilities",
		content: [
			"You agree to provide accurate information, maintain the security of your device, credentials, and cryptocurrency wallets, and comply with applicable laws. You agree not to use Nubanq for unlawful or fraudulent purposes or to interfere with the Services.",
		],
	},
	{
		title: "7. Third-Party Services",
		content: [
			"Lead Bank provides the banking services linked to Nubanq. Bridge Ventures LLC operates as Program Manager on behalf of Lead Bank. Your use of these services may be subject to additional terms from Lead Bank and Bridge.",
		],
	},
	{
		title: "8. Disclaimers",
		content: [
			'Nubanq provides services "as is" and without warranties of any kind. We do not guarantee uninterrupted access, accuracy, or stability of stablecoin values.',
		],
	},
	{
		title: "9. Limitation of Liability",
		content: [
			"To the maximum extent permitted by law, Nulabs LLC, Lead Bank, and Bridge Ventures LLC are not liable for any indirect, incidental, or consequential damages, including but not limited to loss of funds, data, or profits.",
		],
	},
	{
		title: "10. Governing Law & Dispute Resolution",
		content: [
			"These Terms are governed by the laws of the State of Delaware, U.S.A., without regard to conflict of law principles. Any disputes shall be resolved through binding arbitration in Delaware, unless otherwise required by law.",
		],
	},
	{
		title: "11. Changes to These Terms",
		content: [
			"We may update these Terms from time to time. Continued use of Nubanq after changes are posted constitutes acceptance of the revised Terms.",
		],
	},
	{
		title: "12. Contact Us",
		content: [
			<>
				For questions about these Terms, please contact:{" "}
				<a href="mailto:support@nubanq.com" className="font-semibold">
					support@nubanq.com
				</a>
			</>,
		],
	},
];

export function TermsOfServicePage() {
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
							className=" w-auto lg:pl-1 h-9 sm:h-6 md:h-7 lg:h-9 xl:h-10 mb-3 sm:mb-0"
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
					Terms of Service
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

export default TermsOfServicePage;
