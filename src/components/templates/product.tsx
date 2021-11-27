import Link from 'next/link';
import React, { FC, ReactElement, useMemo, useState } from 'react';
import { ProductData, ProductItemData } from 'types/product';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import marked from 'marked';
import { sanitize } from 'isomorphic-dompurify';

import styles from './product.module.scss';
import { Media } from 'utils/responsive';
import { ProductItem } from 'components/product/product-item';
import { EditorialItem } from 'components/editorial/editorial-item';
import { getProductCategory } from 'utils/category';
import { SimpleCategoryRelation } from 'types/category';
import { ComponentProductVariations } from 'types';

type ProductTemplateProps = {
	product: ProductData;
	similarBrandProducts: ProductItemData[];
	similarCategoryProducts: ProductItemData[];
};

const ProductTemplate: FC<ProductTemplateProps> = ({
	product,
	similarBrandProducts,
	similarCategoryProducts,
}): ReactElement => {
	const __html = useMemo(() => {
		const dirty = marked(product.description);
		return sanitize(dirty);
	}, [product]);

	const [showBrand, setShowBrand] = useState(false);

	const category = getProductCategory(product.appearsIn as SimpleCategoryRelation[]);
	const [variation, setVariation] = useState<null | Pick<
		ComponentProductVariations,
		'id' | 'title' | 'abbreviation' | 'skuPrefix' | 'units'
	>>(null);

	const content = (
		<>
			<div className={styles.productContainer}>
				<section className={styles.productInfo}>
					<h2>{product.brand.title}</h2>
					<h3>{product.title}</h3>
					<div dangerouslySetInnerHTML={{ __html }} />
					<p>{product.sku}</p>
				</section>
				<section>
					<CarouselProvider
						naturalSlideWidth={1}
						naturalSlideHeight={1}
						totalSlides={product.images.length}
						visibleSlides={1}
						step={1}
						className={styles.carouselContainer}
					>
						<div>
							<Slider className={styles.slider}>
								{product.images.map((image, i) => (
									<Slide index={i} key={image.url}>
										<Image hasMasterSpinner={false} src={image.url} />
									</Slide>
								))}
							</Slider>
							<ButtonBack className={styles.sliderBackButton}>
								<FiChevronLeft />
							</ButtonBack>
							<ButtonNext className={styles.sliderNextButton}>
								<FiChevronRight />
							</ButtonNext>
						</div>
					</CarouselProvider>
				</section>
				<section>
					<div className={styles.sectionSpacer}>
						<span>${product.price} USD</span>
						<p>VAT included. Free shipping on orders above $150.</p>
						<Link href="/customer-service/sizing">
							<a target="_blank" rel="nofollower noopener norefferer">
								Sizing Chart
							</a>
						</Link>
						<select
							className={styles.select}
							name="variation"
							onChange={event => {
								const variation = product.variations.find(v => v.id === event.target.value);
								if (variation !== undefined) {
									setVariation(variation);
								}
							}}
						>
							<option selected disabled>
								SELECT A SIZE
							</option>
							{product.variations.map(variation => (
								<option key={variation.id} value={variation.id} disabled={variation.units < 1}>
									{`${variation.title}${variation.units < 1 ? ' - out of stock' : ''}`}
								</option>
							))}
						</select>
						<button
							className="snipcart-add-item"
							data-item-id={`${product.id}${variation ? `-${variation.skuPrefix}` : ''}`}
							data-item-price={product.price}
							data-item-description={product.description}
							data-item-image={product.thumbnail.url}
							data-item-name={`${product.title}${variation ? `| ${variation.title}` : ''}`}
							data-item-max-quantity={variation?.units}
						>
							Add to bag
						</button>
					</div>
				</section>
			</div>

			<aside className={styles.buttonRow}>
				<button style={{ textDecoration: showBrand ? 'underline' : 'none' }} onClick={() => setShowBrand(true)}>
					{product.brand.title}
				</button>
				<button
					style={{ textDecoration: showBrand ? 'none' : 'underline' }}
					onClick={() => setShowBrand(false)}
				>
					{category?.title}
				</button>
			</aside>

			<Media greaterThanOrEqual="desktop">
				<aside className={styles.productsContainerDesktop}>
					<ul>
						{[...(showBrand ? similarBrandProducts : similarCategoryProducts)].splice(0, 7).map(product => (
							<ProductItem key={product.id} product={product} />
						))}
					</ul>
				</aside>
			</Media>
			<Media lessThan="desktop">
				<aside className={styles.productsContainerMobile}>
					<ul>
						{[...(showBrand ? similarBrandProducts : similarCategoryProducts)].splice(0, 4).map(product => (
							<ProductItem key={product.id} product={product} />
						))}
					</ul>
				</aside>
			</Media>

			<Media greaterThanOrEqual="desktop">
				<aside>
					{product.relatedProducts && (
						<div className={styles.productsContainerDesktop}>
							<span />
							<h3 className={styles.caption}>Related Products</h3>
							<ul>
								{[...product.relatedProducts].splice(0, 8).map(product => (
									<ProductItem key={product.id} product={product} />
								))}
							</ul>
						</div>
					)}
				</aside>
				<aside>
					{product.relatedEditorials && (
						<div className={styles.editorialContainerDesktop}>
							<span />
							<h3 className={styles.caption}>Related Stories</h3>
							<ul>
								{[...product.relatedEditorials].splice(0, 2).map(editorial => (
									<EditorialItem key={editorial.id} editorial={editorial} />
								))}
							</ul>
						</div>
					)}
				</aside>
			</Media>
			<Media lessThan="desktop">
				<aside>
					{product.relatedProducts && (
						<div className={styles.productsContainerMobile}>
							<span />
							<h3 className={styles.caption}>Related Products</h3>
							<ul>
								{[...product.relatedProducts].splice(0, 4).map(product => (
									<ProductItem key={product.id} product={product} />
								))}
							</ul>
						</div>
					)}
				</aside>
				<aside>
					{product.relatedEditorials && (
						<div className={styles.editorialContainerMobile}>
							<span />
							<h3 className={styles.caption}>Related Stories</h3>
							<ul>
								{[...product.relatedEditorials].splice(0, 2).map(editorial => (
									<EditorialItem key={editorial.id} editorial={editorial} />
								))}
							</ul>
						</div>
					)}
				</aside>
			</Media>
		</>
	);

	return (
		<>
			<Media greaterThanOrEqual="desktop">
				<article className={styles.desktopContainer}>{content}</article>
			</Media>
			<Media lessThan="desktop">
				<article className={styles.mobileContainer}>{content}</article>
			</Media>
		</>
	);
};

export { ProductTemplate };
