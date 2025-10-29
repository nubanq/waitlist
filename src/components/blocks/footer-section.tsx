import { Hexagon, Github, Twitter } from "lucide-react";
import TwitterIcon from "@/assets/svg/twitter.svg";
import GithubIcon from "@/assets/svg/github.svg";
import DiscordIcon from "@/assets/svg/discord.svg";
import { Footer } from "@/components/blocks/footer";
import logo from "@/assets/svg/nubanq-logo.svg";

function FooterSection() {
	return (
		<div className="w-full">
			<Footer
				logo={<img src={logo} alt="Nubanq Logo" className="h-9" />}
				brandName="Nubanq"
				socialLinks={[
					{
						icon: <img src={TwitterIcon} alt="X" className="w-auto h-6" />,
						href: "https://x.com/NubanqOfficial",
						label: "X",
					},
					{
						icon: <img src={DiscordIcon} alt="Discord" className="w-auto h-6" />,
						href: "#",
						label: "Discord",
					},
				]}
				legalLinks={[
					{ href: "/privacy", label: "Privacy" },
					{ href: "/terms", label: "Terms" },
				]}
				copyright={{
					text: `Copyright © ${new Date().getFullYear()} Nulabs LLC.`,
				}}
			/>
			<div className="flex flex-col md:flex-row gap-3 sm:gap-5">
				<div className="md:w-13 md:grow-3">
					<p className=" text-muted-foreground text-xs font-light">Disclaimers</p>
					<ol
						id="num1"
						className="list-decimal flex-col text-muted-foreground text-xs font-light ml-4"
					>
						<li>Nubanq is not a bank, or a digital asset custodian.</li>
						<li>Nubanq is a product of Nulabs LLC, a financial technology company.</li>
						<li>
							All banking services are provided by Lead Bank and managed by Bridge Ventures LLC
							(“Bridge”).
						</li>
					</ol>
				</div>

				<div className="md:w-13 md:grow-3">
					<p className=" text-muted-foreground text-xs font-light">All rights reserved.</p>
					<p className=" text-muted-foreground text-xs font-light">
						Bridge is a financial technology company and Program Manager responsible for
						managing and operating bank accounts on behalf of Lead Bank. Nulabs LLC is a
						financial technology company and Platform Provider responsible for the application,
						access, and management of bank accounts.
					</p>
				</div>
			</div>
		</div>
	);
}

export { FooterSection };
