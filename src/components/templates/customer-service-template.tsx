import {
	CategoryBrowser,
	CategoryBrowserMobile,
	CategoryLink,
	CategoryLinkMobile,
	LinkList,
	MobileTitle,
	Title,
} from 'components/page/category-browser';
import { useRouter } from 'next/router';
import React, { FC, ReactElement } from 'react';
import { Media } from 'utils/responsive';
import cn from 'classnames';

import styles from './customer-service-template.module.scss';
import textStyles from 'styles/text-container.module.scss';

export const CustomerServiceTemplate: FC = ({ children }): ReactElement => {
	const { asPath } = useRouter();
	const path = asPath.toLowerCase();

	return (
		<>
			<Media greaterThanOrEqual="desktop">
				<section className={styles.container}>
					<aside>
						<CategoryBrowser>
							<Title title="Shopping" />
							<LinkList>
								<CategoryLink
									key="sizing"
									href="/customer-service/sizing"
									title="Sizing Chart"
									highlight={path.startsWith('/customer-service/sizing')}
								/>
								<CategoryLink
									key="devliery"
									href="/customer-service/delivery"
									title="Delivery"
									highlight={path.startsWith('/customer-service/delivery')}
								/>
							</LinkList>
							<Title title="Omnifinery" />
							<LinkList>
								<CategoryLink
									key="about"
									href="/about"
									title="About Us"
									highlight={path.startsWith('/about')}
								/>
								<CategoryLink
									key="affiliates"
									href="/customer-service/affiliates"
									title="Affiliates"
									highlight={path.startsWith('/customer-service/affiliates')}
								/>
							</LinkList>
						</CategoryBrowser>
					</aside>
					<main className={cn(styles.main, textStyles.container)}>{children}</main>
					<aside className={styles.contactContainer}>
						<div>
							<h3>Customer Care</h3>
							<p>Please call us for immediate answers to questions regarding orders and shipping.</p>
							<p>
								Whatsapp <a href="tel:+8618675951317">+86 186 7595 1317</a>
							</p>
							<p>
								Contact us by <a href="mailto:contact@omnifinery.com">email</a>.
							</p>
						</div>
					</aside>
				</section>
			</Media>
			<Media lessThan="desktop">
				<aside className={styles.mobileButtonRow}>
					<CategoryBrowserMobile title="Customer Service">
						<MobileTitle title="Shopping" />

						<CategoryLinkMobile
							key="sizing"
							href="/customer-service/sizing"
							title="Sizing Chart"
							highlight={path.startsWith('/customer-service/sizing')}
						/>
						<CategoryLinkMobile
							key="devliery"
							href="/customer-service/delivery"
							title="Delivery"
							highlight={path.startsWith('/customer-service/delivery')}
						/>

						<MobileTitle title="Omnifinery" />

						<CategoryLinkMobile
							key="about"
							href="/about"
							title="About Us"
							highlight={path.startsWith('/about')}
						/>
						<CategoryLinkMobile
							key="affiliates"
							href="/customer-service/affiliates"
							title="Affiliates"
							highlight={path.startsWith('/customer-service/affiliates')}
						/>
					</CategoryBrowserMobile>
				</aside>
				<main className={cn(styles.mobileMain, textStyles.container)}>{children}</main>
			</Media>
		</>
	);
};
