import Link from 'next/link';
import React, { FC, LegacyRef, ReactElement, useState } from 'react';
import { AiOutlineMenu, AiOutlineShopping, AiOutlineClose, AiOutlineArrowRight } from 'react-icons/ai';
import cn from 'classnames';
import { useMeasure } from 'react-use';

import { Media } from 'utils/responsive';

import styles from './header.module.scss';

type MobileNavProps = {
	top: number;
};

const TitleLink: FC = (): ReactElement => (
	<span className={styles.title}>
		<Link href="/">
			<a>Meta.Omni</a>
		</Link>
	</span>
);

const MobileNav: FC<MobileNavProps> = ({ top }): ReactElement => {
	const [showMenu, setShowMenu] = useState(false);

	const closeMenu = () => setShowMenu(false);
	const toggleMenu = () => setShowMenu(!showMenu);

	return (
		<>
			<button className={styles.mobileIcon} onClick={toggleMenu}>
				<AiOutlineMenu />
			</button>

			<div
				style={{
					visibility: showMenu ? 'visible' : 'hidden',
					top,
				}}
				className={styles.mobileMenuContainer}
			>
				<nav>
					<ul>
						<li>
							<Link href="/store/women">
								<a>
									<p>Womenswear</p>
									<AiOutlineArrowRight />
								</a>
							</Link>
						</li>
						<li>
							<Link href="/store/men">
								<a>
									<p>Menswear</p>
									<AiOutlineArrowRight />
								</a>
							</Link>
						</li>
						<li>
							<Link href="/store/gallery">
								<a>
									<p>Gallery</p>
									<AiOutlineArrowRight />
								</a>
							</Link>
						</li>
						<li>
							<Link href="/store/lifestyle">
								<a>
									<p>Lifestyle</p>
									<AiOutlineArrowRight />
								</a>
							</Link>
						</li>
						<li>
							<Link href="/editorial">
								<a>
									<p>Editorial</p>
									<AiOutlineArrowRight />
								</a>
							</Link>
						</li>
						<span />
						<li>
							<Link href="/customer-service">
								<a>
									<p>Customer Care</p>
									<AiOutlineArrowRight />
								</a>
							</Link>
						</li>

						<li>
							<Link href="/about">
								<a>
									<p>About</p>
									<AiOutlineArrowRight />
								</a>
							</Link>
						</li>
					</ul>
				</nav>

				<button onClick={closeMenu}>
					<AiOutlineClose />
				</button>
			</div>
		</>
	);
};

const DesktopNav: FC = (): ReactElement => (
	<nav className={styles.desktopNav}>
		<ul>
			<li>
				<Link href="/store/women">
					<a>Womenswear</a>
				</Link>
			</li>
			<li>
				<Link href="/store/men">
					<a>Menswear</a>
				</Link>
			</li>
			<li>
				<Link href="/store/gallery">
					<a>Gallery</a>
				</Link>
			</li>
			<li>
				<Link href="/store/lifestyle">
					<a>Lifestyle</a>
				</Link>
			</li>
			<li>
				<Link href="/editorial">
					<a>Editorial</a>
				</Link>
			</li>

			<li>
				<Link href="/editorial">
					<a>Current Votings</a>
				</Link>
			</li>
		</ul>
	</nav>
);

const DesktopShoppingBagLink: FC = (): ReactElement => (
	<button className={cn('snipcart-checkout', styles.desktopShoppingBagLink)}>LUKSO UBP-WALLET</button>
);

const MobileShoppingBagLink: FC = (): ReactElement => (
	<button className={cn('snipcart-checkout', styles.mobileIcon)}>
		<AiOutlineShopping />
	</button>
);

const Header: FC = (): ReactElement => {
	const [ref, { height }] = useMeasure();

	return (
		<>
			<Media greaterThanOrEqual="desktop" className={styles.headerContainer}>
				<header className={styles.desktopHeader}>
					<DesktopNav />
					<TitleLink />
					<div className={styles.headerEnd}>
						<DesktopShoppingBagLink />
					</div>
				</header>
			</Media>
			<Media lessThan="desktop" className={styles.headerContainer}>
				<header ref={ref as LegacyRef<HTMLElement>} className={styles.mobileHeader}>
					<TitleLink />
					<div className={styles.headerEnd}>
						<MobileShoppingBagLink />
						<MobileNav top={height} />
					</div>
				</header>
			</Media>
		</>
	);
};

export { Header };
