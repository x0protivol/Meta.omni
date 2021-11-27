import {
	CategoryBrowser,
	CategoryBrowserMobile,
	CategoryLink,
	CategoryLinkMobile,
	LinkList,
	Title,
	TitleLink,
} from 'components/page/category-browser';
import { Pagination, PaginationControls } from 'components/page/pagination';
import { ProductGrid } from 'components/product/product-grid';
import { ProductItem } from 'components/product/product-item';
import { useRouter } from 'next/router';
import React, { FC, ReactElement, useMemo } from 'react';
import { SimpleBrand } from 'types/brand';
import { SimpleCategoryRelation } from 'types/category';
import { ProductItemData, SortingAlgos } from 'types/product';
import { generateCategoryBrowserList } from 'utils/category';
import { generateBrandLink, generateCategoryLink } from 'utils/href';
import { Media } from 'utils/responsive';
import cn from 'classnames';

import styles from './product-browser.module.scss';

type Props = {
	categories: SimpleCategoryRelation[];
	products: ProductItemData[];
	categorySlug: string;
	brandSlug: string;
	section: string;
	brands: SimpleBrand[];
	sortingAlgo: SortingAlgos;
	pagination: Pagination;
};

export const ProductBrowser: FC<Props> = ({
	brands,
	categories,
	products,
	categorySlug,
	brandSlug,
	section,
	sortingAlgo,
	pagination,
}): ReactElement => {
	const { asPath } = useRouter();
	const pathBase = asPath.split('?')[0];

	const categoryMap = useMemo(() => {
		return generateCategoryBrowserList(categories, categorySlug);
	}, [categories, categorySlug]);

	const brandMap = useMemo(() => {
		// return brands.slice().sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
		return (
			// do not use [SimpleBrand[], SimpleBrand[]], prevents typescript from allowing the use of map
			brands
				.slice()
				.reduce<SimpleBrand[][]>(
					(arr, record) => {
						const index = record.title.match(/^\d/) ? 1 : 0;
						arr[index].push(record);
						return arr;
					},
					[[], []],
				)
				// We sort the two array respectively
				.map(arr => arr.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())))
				// We concat the two sorted array
				.reduce((curr, next) => curr.concat(next))
		);
	}, [brands]);

	const description = useMemo(() => {
		for (let i = 0; i < brands.length; i++) {
			if (brands[i].slug === brandSlug) {
				return brands[i].description;
			}
		}

		for (let i = 0; i < categories.length; i++) {
			if (categories[i].slug === categorySlug) {
				for (let j = 0; j < categories[i].categoryDescription.length; j++) {
					if (categories[i].categoryDescription[j].section.slug === section) {
						return categories[i].categoryDescription[j].description;
					}
				}
			}
		}

		return null;
	}, [categorySlug, categories, section, brandSlug, brands]);

	const title = useMemo(() => {
		let b = '';
		let c = '';

		for (let i = 0; i < categories.length; i++) {
			if (categories[i].slug === categorySlug) {
				c = categories[i].title;
			}
		}

		for (let i = 0; i < brands.length; i++) {
			if (brands[i].slug === brandSlug) {
				b = brands[i].title;
			}
		}

		if (b !== '' && c !== '') {
			return `${c} - ${b}`;
		} else if (b !== '') {
			return b;
		} else if (c !== '') {
			return c;
		}

		return null;
	}, [categories, categorySlug, brandSlug, brands]);

	return (
		<>
			<Media greaterThanOrEqual="desktop">
				<section className={styles.container}>
					<aside className={styles.categoryBrowser}>
						<CategoryBrowser>
							<TitleLink href={`/store/${section}`} title="All Categories" />
							<LinkList>
								{categoryMap.map(category => (
									<CategoryLink
										key={category.id}
										href={generateCategoryLink(section, brandSlug, category.slug)}
										title={category.title}
										depth={category.depth}
										highlight={category.slug === categorySlug}
									/>
								))}
							</LinkList>
							<TitleLink href={`/store/${section}`} title="All Brands" />
							<LinkList>
								{brandMap.map(brand => (
									<CategoryLink
										key={brand.id}
										href={generateBrandLink(section, categorySlug, brand.slug)}
										title={brand.title}
										highlight={brand.slug === brandSlug}
									/>
								))}
							</LinkList>
						</CategoryBrowser>
					</aside>
					<main className={styles.main}>
						{title && <h2 className={styles.title}>{title}</h2>}
						{description && <p className={styles.categoryDescription}>{description}</p>}
						<ProductGrid>
							{products.map(product => (
								<ProductItem key={product.id} product={product} />
							))}
						</ProductGrid>
						<PaginationControls
							perPage={pagination.perPage}
							currentPage={pagination.currentPage}
							pageCount={Math.ceil(pagination.totalCount / pagination.perPage)}
							hasNextPage={pagination.currentPage < Math.ceil(pagination.totalCount / pagination.perPage)}
							hasPreviousPage={pagination.currentPage > 1}
						/>
					</main>

					<aside className={styles.categoryBrowser}>
						<CategoryBrowser>
							<Title title="Sort" />
							<LinkList>
								<CategoryLink
									key={1}
									href={`${pathBase}`}
									title="Latest Arrivals"
									highlight={sortingAlgo === SortingAlgos.LatestArrivals}
								/>
								<CategoryLink
									key={2}
									href={`${pathBase}?sort=price-ascending`}
									title="Price Ascending"
									highlight={sortingAlgo === SortingAlgos.PriceAscending}
								/>
								<CategoryLink
									key={3}
									href={`${pathBase}?sort=price-descending`}
									title="Price Descending"
									highlight={sortingAlgo === SortingAlgos.PriceDescending}
								/>
							</LinkList>
						</CategoryBrowser>
					</aside>
				</section>
			</Media>
			<Media lessThan="desktop">
				<aside className={styles.mobileButtonRow}>
					<CategoryBrowserMobile title="Categories">
						<CategoryLinkMobile href={`/store/${section}`} title="All Categories" />
						{categoryMap.map(category => (
							<CategoryLinkMobile
								key={category.id}
								href={generateCategoryLink(section, brandSlug, category.slug)}
								title={category.title}
								highlight={category.slug === categorySlug}
								depth={category.depth}
							/>
						))}
					</CategoryBrowserMobile>
					<span />
					<CategoryBrowserMobile title="Brands">
						<CategoryLinkMobile href={`/store/${section}`} title="All Brands" />
						{brandMap.map(brand => (
							<CategoryLinkMobile
								key={brand.id}
								href={generateBrandLink(section, categorySlug, brand.slug)}
								title={brand.title}
								highlight={brand.slug === brandSlug}
							/>
						))}
					</CategoryBrowserMobile>
				</aside>
				<main className={styles.main}>
					{title && <h2 className={cn(styles.title, styles.mobileTitle)}>{title}</h2>}
					{description && (
						<p className={cn(styles.categoryDescription, styles.mobileDescription)}>{description}</p>
					)}
					<ProductGrid>
						{products.map(product => (
							<ProductItem key={product.id} product={product} />
						))}
					</ProductGrid>
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
