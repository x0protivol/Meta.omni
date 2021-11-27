import React, { FC, ReactElement, useMemo } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import cn from 'classnames';
import Link from 'next/link';

import styles from './pagination.module.scss';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

export type Pagination = {
	currentPage: number;
	perPage: number;
	totalCount: number;
};

type PaginationControlsProps = {
	currentPage: number;
	pageCount: number;
	hasNextPage: boolean;
	hasPreviousPage: boolean;
	perPage: number;
};

function getPaginationParams(query: ParsedUrlQuery, defaultLimit = '24'): [number, number] {
	let page = query.page || '1';
	let limit = query.limit || defaultLimit;

	if (Array.isArray(page)) {
		page = page[0];
	}

	if (Array.isArray(limit)) {
		limit = limit[0];
	}

	return [parseInt(page), parseInt(limit)];
}

function generatePaginationBar(currentPage: number, pageCount: number) {
	// var current = c,
	// 	last = m,

	const delta = 3,
		left = currentPage - delta,
		right = currentPage + delta + 1,
		range = [],
		rangeWithDots = [];
	let l = 0;

	for (let i = 1; i <= pageCount; i++) {
		if (i == 1 || i == pageCount || (i >= left && i < right)) {
			range.push(i);
		}
	}

	for (const i of range) {
		if (l) {
			if (i - l === 2) {
				rangeWithDots.push(l + 1);
			} else if (i - l !== 1) {
				rangeWithDots.push('...');
			}
		}
		rangeWithDots.push(i);
		l = i;
	}

	return rangeWithDots;
}

const PaginationControls: FC<PaginationControlsProps> = ({
	pageCount,
	currentPage,
	hasNextPage,
	hasPreviousPage,
	perPage,
}): ReactElement => {
	const pageRange = useMemo(() => generatePaginationBar(currentPage, pageCount), [currentPage, pageCount]);
	const { asPath } = useRouter();
	const pathBase = asPath.split('?')[0];

	return (
		<div className={styles.paginationContainer}>
			{hasPreviousPage && (
				<Link href={`${pathBase}?page=${currentPage - 1}&limit=${perPage}`}>
					<a className={styles.textButtonLeft}>
						<FiArrowLeft />
						<p>Previous</p>
					</a>
				</Link>
			)}
			{(pageRange as string[]).map(rangeElement => {
				if (rangeElement === '...') {
					return <span className={cn(styles.pageElement, styles.dots)}>...</span>;
				}
				return (
					<Link key={rangeElement} href={`${pathBase}?page=${rangeElement}&limit=${perPage}`}>
						<a
							style={{ textDecoration: rangeElement === currentPage.toString() ? 'underline' : 'none' }}
							className={cn(styles.pageElement, styles.number)}
						>
							{rangeElement}
						</a>
					</Link>
				);
			})}
			{hasNextPage && (
				<Link href={`${pathBase}?page=${currentPage + 1}&limit=${perPage}`}>
					<a className={styles.textButtonRight}>
						<p>Next</p>
						<FiArrowRight />
					</a>
				</Link>
			)}
		</div>
	);
};

export { PaginationControls, getPaginationParams };
