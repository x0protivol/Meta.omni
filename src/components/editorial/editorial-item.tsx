import Link from 'next/link';
import React, { FC, ReactElement, useMemo } from 'react';
import { EditorialItemData } from 'types/editorial';
import moment from 'moment';
import cn from 'classnames';

import styles from './editorial-item.module.scss';
import textStyles from 'styles/text-container.module.scss';
import { Markup } from 'interweave';

type EditorialItemProps = {
	editorial: EditorialItemData;
	className?: string;
	hideHeadline?: boolean;
};

function getEditorialHREF(editorial: EditorialItemData): string {
	let href = `/not-found/editorial/${editorial.slug}`;
	if (editorial.appearsIn.length > 0) {
		href = `/editorial/${editorial.appearsIn[0].slug}/${editorial.slug}`;
	}
	return href;
}

function getEditorialDate(editorial: EditorialItemData): string {
	let date = editorial.published_at;
	if (editorial.publishOverride) {
		date = editorial.publishOverride;
	}
	return moment(date).format('MMM Do YYYY');
}

export const EditorialItemBoldText: FC<EditorialItemProps> = ({ editorial, className }): ReactElement => {
	const href = getEditorialHREF(editorial);

	return (
		<li className={cn(className, styles.titleContainer)}>
			<Link href={href}>
				<a>
					<h4>{editorial.title}</h4>
					<div className={textStyles.container}>
						<Markup content={editorial.headline} />
					</div>
				</a>
			</Link>
		</li>
	);
};

export const EditorialItemWithCategory: FC<EditorialItemProps> = ({
	editorial,
	className,
	hideHeadline,
}): ReactElement => {
	const [href, date] = useMemo(() => {
		return [getEditorialHREF(editorial), getEditorialDate(editorial)];
	}, [editorial]);

	return (
		<li className={cn(className, styles.container)}>
			<Link href={href}>
				<a>
					<figure>
						<img
							className={styles.image}
							src={editorial.cover.url}
							alt={editorial.cover.alternativeText || ''}
						/>

						<figcaption className={styles.splitContainer}>
							<div className={styles.categoryContainer}>
								<h4>{editorial.appearsIn[0].title}</h4>
							</div>
							<div>
								<h3>{editorial.title}</h3>
								<span>{date}</span>
								{!hideHeadline && (
									<div>
										<Markup content={editorial.headline} />
									</div>
								)}
							</div>
						</figcaption>
					</figure>
				</a>
			</Link>
		</li>
	);
};

export const EditorialItem: FC<EditorialItemProps> = ({
	editorial,
	className = '',
	hideHeadline = false,
}: EditorialItemProps): ReactElement => {
	const [href, date] = useMemo(() => {
		return [getEditorialHREF(editorial), getEditorialDate(editorial)];
	}, [editorial]);

	return (
		<li className={cn(className, styles.container)}>
			<Link href={href}>
				<figure>
					<img
						className={styles.image}
						src={editorial.cover.url}
						alt={editorial.cover.alternativeText || ''}
					/>

					<figcaption className={styles.captionContainer}>
						<h3>{editorial.title}</h3>
						<span>{date}</span>
						{!hideHeadline && (
							<div>
								<Markup content={editorial.headline} />
							</div>
						)}
					</figcaption>
				</figure>
			</Link>
		</li>
	);
};

export const StretchedEditorialItem: FC<EditorialItemProps & { height: number }> = ({
	editorial,
	className = '',
	hideHeadline = false,
	height,
}: EditorialItemProps & { height: number }): ReactElement => {
	const [href, date] = useMemo(() => {
		return [getEditorialHREF(editorial), getEditorialDate(editorial)];
	}, [editorial]);

	return (
		<li className={cn(className, styles.stretchContainer)}>
			<Link href={href}>
				<a>
					<figure>
						<div style={{ height, backgroundImage: `url(${editorial.cover.url})` }} />

						<figcaption className={styles.splitContainer}>
							<div className={styles.categoryContainer}>
								<h4>{editorial.appearsIn[0].title}</h4>
							</div>
							<div>
								<h3>{editorial.title}</h3>
								<span>{date}</span>
								{!hideHeadline && (
									<div>
										<Markup content={editorial.headline} />
									</div>
								)}
							</div>
						</figcaption>
					</figure>
				</a>
			</Link>
		</li>
	);
};
