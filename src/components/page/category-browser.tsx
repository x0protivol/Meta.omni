import Link from 'next/link';
import React, { createContext, FC, PropsWithChildren, ReactElement, useCallback, useEffect, useState } from 'react';
import cn from 'classnames';

import styles from './category-browser.module.scss';
import { Header } from './header';
import { useRouter } from 'next/router';
import { AiOutlineArrowRight, AiOutlineClose } from 'react-icons/ai';

type TitleProps = {
	title: string;
};

type LinkProps = TitleProps & {
	href: string;
	depth?: number;
	highlight?: boolean;
};

type CategoryBrowserProps = PropsWithChildren<{ className?: string }>;

export const CategoryBrowser: FC<CategoryBrowserProps> = ({
	children,
	className = '',
}: CategoryBrowserProps): ReactElement => <div className={cn(className, styles.categoryBrowser)}>{children}</div>;

export const TitleLink: FC<LinkProps> = ({ title, href }: LinkProps): ReactElement => (
	<Link href={href}>
		<a className={cn(styles.title, styles.link)}>{title}</a>
	</Link>
);

export const Title: FC<TitleProps> = ({ title }: TitleProps): ReactElement => (
	<span className={cn(styles.title, styles.smol)}>{title}</span>
);

export const MobileTitle: FC<TitleProps> = ({ title }: TitleProps): ReactElement => (
	<span className={cn(styles.mobileTitle, styles.smol)}>{title}</span>
);

export const LinkList: FC = ({ children }): ReactElement => <ul className={styles.linkList}>{children}</ul>;

export const CategoryLink: FC<LinkProps> = ({ depth = 0, href, title, highlight = false }: LinkProps): ReactElement => (
	<li style={{ marginLeft: `${depth * 0.45}rem`, textDecoration: `${highlight ? 'underline' : 0}` }}>
		<Link href={href}>
			<a className={cn(styles.link, styles.default)}>{title}</a>
		</Link>
	</li>
);

// eslint-disable-next-line @typescript-eslint/no-empty-function
const CloseContext = createContext(() => {});

type CategoryBrowserMobileProps = CategoryBrowserProps & {
	title: string;
};

export const CategoryBrowserMobile: FC<CategoryBrowserMobileProps> = ({
	children,
	title,
}: CategoryBrowserMobileProps): ReactElement => {
	const [isOpen, setIsOpen] = useState(false);
	const { asPath } = useRouter();

	const open = () => setIsOpen(true);
	const close = useCallback(() => setIsOpen(false), [setIsOpen]);

	useEffect(() => {
		close();
	}, [asPath, close]);

	return (
		<CloseContext.Provider value={close}>
			<button className={styles.openButton} onClick={open}>
				{title}
			</button>
			{isOpen && (
				<div className={styles.mobileOverlay} style={{ overflowY: 'auto' }}>
					<Header />
					<ul className={styles.mobileContainer}>{children}</ul>
					<button className={cn(styles.closeButton)} onClick={close}>
						<AiOutlineClose />
					</button>
				</div>
			)}
		</CloseContext.Provider>
	);
};

export const CategoryLinkMobile: FC<LinkProps> = ({ href, title, depth }: LinkProps): ReactElement => (
	<li>
		<Link href={href}>
			<a className={cn(styles.mobileLinkButton)}>
				<p style={{ marginLeft: `${depth}rem` }}>{title}</p>
				<AiOutlineArrowRight />
			</a>
		</Link>
	</li>
);
