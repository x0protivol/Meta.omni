import React, { FC, ReactElement } from 'react';
import { Sponsor } from 'types/sponsor';
import Link from 'next/link';
import cn from 'classnames';

import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP, FaTwitter, FaDiscord } from 'react-icons/fa';

import styles from './footer.module.scss';
import { Media } from 'utils/responsive';

type Props = {
	sponsors: Sponsor[];
};

type SponsorProps = {
	sponsor: Sponsor;
};

const SponsorElement: FC<SponsorProps> = ({ sponsor }): ReactElement => (
	<li>
		<Link href={sponsor.websiteLink}>
			<a className={styles.sponsor} target="blank" rel="noopener norefferer" href={sponsor.websiteLink}>
				<figure>
					<img src={sponsor.logo?.url} alt={`Website Sponsor ${sponsor.title}`} />
					<figcaption>{sponsor.title}</figcaption>
				</figure>
			</a>
		</Link>
	</li>
);

export const Footer: FC<Props> = ({ sponsors }): ReactElement => (
	<>
		<div style={{ flex: 1 }} />
		<footer className={styles.footer}>
			{sponsors.length > 0 && (
				<>
					<span className={styles.sponsorSeparator} />
					<Media greaterThanOrEqual="desktop">
						<section className={cn(styles.sponsorSection, styles.footerRow)}>
							<ul className={styles.footerRow}>
								{sponsors.map(sponsor => (
									<SponsorElement sponsor={sponsor} key={sponsor.id} />
								))}
							</ul>
						</section>
					</Media>
					<Media lessThan="desktop">
						<section className={styles.sponsorSection}>
							<ul className={cn(styles.footerRow, styles.mobileSponsorList)}>
								{sponsors.slice(0, 3).map(sponsor => (
									<SponsorElement sponsor={sponsor} key={sponsor.id} />
								))}
							</ul>
							<ul className={cn(styles.footerRow, styles.mobileSponsorList)}>
								{sponsors.slice(3, 6).map(sponsor => (
									<SponsorElement sponsor={sponsor} key={sponsor.id} />
								))}
							</ul>
						</section>
					</Media>
					<span className={styles.sponsorSeparator} />
				</>
			)}
			<section className={cn(styles.footerRow, styles.footerLinks)}>
				<a href="https://www.facebook.com/omnifinery/" target="blank" rel="noopener noreferrer">
					<FaFacebookF />
				</a>
				<a href="https://www.instagram.com/omnifinery/" target="blank" rel="noopener noreferrer">
					<FaInstagram />
				</a>
				<a
					href="https://www.youtube.com/channel/UCZVvI7AH_g_PyUeIhfEoQcw"
					target="blank"
					rel="noopener noreferrer"
				>
					<FaYoutube />
				</a>
				<a href="https://www.pinterest.com/omnifinery/" target="blank" rel="noopener noreferrer">
					<FaPinterestP />
				</a>
				<a href="https://twitter.com/omnifinery/" target="blank" rel="noopener noreferrer">
					<FaTwitter />
				</a>
				<a href="https://discord.gg/gVwHKnrtX3" target="blank" rel="noopener noreferrer">
					<FaDiscord />
				</a>
			</section>
			<Media greaterThanOrEqual="desktop">
				<section className={cn(styles.footerRow, styles.footerLinks)}>
					<span>© {new Date().getFullYear()} metaomni.com</span>
					<Link href="/terms">Terms & Conditions</Link>
					<Link href="/privacy">Privacy Policy</Link>
					<Link href="/customer-service">Customer Service</Link>
					<Link href="/customer-service/delivery">Delivery</Link>
					<Link href="/customer-service/sizing">Sizing Chart</Link>
					<Link href="/about">About Us</Link>
					<Link href="/customer-service/affiliates">Affiliates</Link>
				</section>
			</Media>
			<Media lessThan="desktop">
				<section className={cn(styles.footerRow, styles.footerLinks)}>
					<span>© {new Date().getFullYear()} omnifinery.com</span>
					<Link href="/terms">Terms & Conditions</Link>
					<Link href="/privacy">Privacy Policy</Link>
				</section>
				<section className={cn(styles.footerRow, styles.footerLinks)}>
					<Link href="/customer-service">Customer Service</Link>
					<Link href="/customer-service/delivery">Delivery</Link>
					<Link href="/customer-service/sizing">Sizing Chart</Link>
					<Link href="/about">About Us</Link>
					<Link href="/customer-service/affiliates">Affiliates</Link>
				</section>
			</Media>
		</footer>
	</>
);
