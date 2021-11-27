import Link from 'next/link';
import React, { FC, ReactElement, useMemo } from 'react';
import cn from 'classnames';

import styles from './product-item.module.scss';
import { ProductItemData } from 'types/product';

type ProductItemProps = {
	product: ProductItemData;
	className?: string;
};

export const ProductItem: FC<ProductItemProps> = ({ product, className = '' }: ProductItemProps): ReactElement => {
	//let href = `/not-found/editorial/${editorial.slug}`;
	//if (editorial.appearsIn.length > 0) {
	//	href = `/editorial/${editorial.appearsIn[0].slug}/${editorial.slug}`;
	//}
	//
	//let date = editorial.published_at;
	//if (editorial.publishOverride) {
	//	date = editorial.publishOverride;
	//}
	//date = moment(date).format('MMM Do YYYY');
	const href = useMemo(() => {
		/*let parentCategorySlug = '';
		if (product.appearsIn.length > 0) {
			parentCategorySlug = product.appearsIn[0].slug;
			for (let i = 0; i < product.appearsIn.length; i++) {
				let found = false;
				for (let j = 0; j < product.appearsIn.length; j++) {
					if (product.appearsIn[i].slug === product.appearsIn[j].parent.slug) {
						found = true;
					}
				}

				if (found) {
					parentCategorySlug = product.appearsIn[i].slug;
				}
			}
		}*/
		return `/store/${product.section.slug}/product/${product.brand.slug}/${product.slug}/${product.sku}`;
	}, [product]);

	return (
		<li className={cn(className, styles.container)}>
			<Link href={href}>
				<a>
					<figure>
						<div>
							<img src={product.thumbnail.url} alt={product.thumbnail.alternativeText || ''} />
						</div>
						<figcaption>
							<h3>{product.brand.title}</h3>
							<span>{product.title}</span>
							<p>${product.price}</p>
						</figcaption>
					</figure>
				</a>
			</Link>
		</li>
	);
};
