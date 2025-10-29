import { Button } from "@/components/ui/button";

interface FooterProps {
	logo?: React.ReactNode;
	brandName?: string;
	socialLinks?: Array<{
		icon: React.ReactNode;
		href: string;
		label: string;
	}>;
	legalLinks: Array<{
		href: string;
		label: string;
	}>;
	copyright: {
		text: string;
	};
}

export function Footer({ logo, brandName, socialLinks, legalLinks, copyright }: FooterProps) {
	return (
		<footer className="pb-4 sm:pb-5">
			<div className="flex flex-col">
				<div className="flex flex-col items-center sm:flex-row justify-between border-t py-4 mt-4">
					<div className="text-sm leading-6 text-muted-foreground whitespace-nowrap lg:mt-0">
						<div>{copyright.text}</div>
					</div>
					<div className="">
						<ul className="list-none flex flex-wrap sm:-my-1 -mx-3 lg:justify-end">
							{legalLinks.map((link, i) => (
								<li key={i} className="my-1 mx-3 shrink-0">
									<a
										href={link.href}
										className="text-sm text-muted-foreground underline-offset-4 hover:underline"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
