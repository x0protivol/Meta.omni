import { EditorialGrid } from 'components/editorial/editorial-grid';
import { EditorialItem } from 'components/editorial/editorial-item';
import {
	CategoryBrowser,
	CategoryBrowserMobile,
	CategoryLink,
	LinkList,
	Title,
	TitleLink,
	CategoryLinkMobile,
} from 'components/page/category-browser';
import React, { FC, ReactElement } from 'react';
import { SimpleCategory } from 'types/category';
import { EditorialItemData } from 'types/editorial';
import { Media } from 'utils/responsive';
import cn from 'classnames';

import styles from './editorial-browser.module.scss';
import { Pagination, PaginationControls } from 'components/page/pagination';

type Props = {
	categories: SimpleCategory[];
	editorials: EditorialItemData[];
	selection: SimpleCategory[];
	pagination: Pagination;
};

export const EditorialBrowser: FC<Props> = ({ pagination, editorials, categories, selection }: Props): ReactElement => {
	let title = 'Stories';
	if (selection.length > 0) {
		title = selection[0].title;
	}

	return (
		<>
			<Media greaterThanOrEqual="desktop">
				<section className={styles.container}>
					<aside className={styles.categoryBrowser}>
						<CategoryBrowser>
							<TitleLink href="/editorial" title="Stories" />
							<Title title="All Categories" />
							<LinkList>
								{categories.map(category => (
									<CategoryLink
										key={category.id}
										href={`/editorial/${category.slug}`}
										title={category.title}
									/>
								))}
							</LinkList>
						</CategoryBrowser>
					</aside>
					<main className={styles.main}>
						<h1 className={styles.category}>{title}</h1>
						<EditorialGrid className={styles.editorial}>
							{editorials.map(editorial => (
								<EditorialItem key={editorial.id} editorial={editorial} />
							))}
						</EditorialGrid>
						<PaginationControls
							perPage={pagination.perPage}
							currentPage={pagination.currentPage}
							pageCount={Math.ceil(pagination.totalCount / pagination.perPage)}
							hasNextPage={pagination.currentPage < Math.ceil(pagination.totalCount / pagination.perPage)}
							hasPreviousPage={pagination.currentPage > 1}
						/>
					</main>
				</section>
			</Media>
			<Media lessThan="desktop">
				<aside>
					<CategoryBrowserMobile title="Categories">
						<CategoryLinkMobile href="/editorial" title="Stories" />
						{categories.map(category => (
							<CategoryLinkMobile
								key={category.id}
								href={`/editorial/${category.slug}`}
								title={category.title}
							/>
						))}
					</CategoryBrowserMobile>
				</aside>
				<h1 className={cn(styles.category, styles.mobileTitle)}>{title}</h1>
				<main>
					<EditorialGrid className={styles.editorial}>
						{editorials.map(editorial => (
							<EditorialItem key={editorial.id} editorial={editorial} />
						))}
					</EditorialGrid>
					<PaginationControls
						perPage={pagination.perPage}
						currentPage={pagination.currentPage}
						pageCount={Math.ceil(pagination.totalCount / pagination.perPage)}
						hasNextPage={pagination.currentPage < Math.ceil(pagination.totalCount / pagination.perPage)}
						hasPreviousPage={pagination.currentPage > 1}
					/>
				</main>
			</Media>
		</>
	);
};
