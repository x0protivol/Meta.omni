import React, { FC, ReactElement } from 'react';
import { Layout } from 'components/templates';
import { NextPage } from 'next';
import cn from 'classnames';
import Link from 'next/link';

import styles from './404.module.scss';
import textStyles from 'styles/text-container.module.scss';

type BlockProps = {
	title: string;
	href: string;
	gridArea: string;
};

const Block: FC<BlockProps> = ({ title, href, gridArea }): ReactElement => (
	<Link href={href}>
		<a style={{ gridArea }}>{title}</a>
	</Link>
);

const NotFoundPage: NextPage = (): ReactElement => (
	<Layout sponsors={[]}>
		<main className={cn(styles.container, textStyles.container)}>
			<h2>Page Not Found</h2>
			<p>We are sorry, but it seems like the page you are looking for does not exist on our website.</p>
			<div className={styles.grid}>
				<Block gridArea="editorial" title="Browse Editorial" href="/editorial" />
				<Block gridArea="women" title="Shop Women" href="/store/women" />
				<Block gridArea="men" title="Shop Men" href="/store/men" />
				<Block gridArea="gallery" title="Shop Gallery" href="/store/gallery" />
				<Block gridArea="lifestyle" title="Shop Lifestyle" href="/store/lifestyle" />
			</div>
		</main>
	</Layout>
);

export default NotFoundPage;
