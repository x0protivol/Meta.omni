export function generateCategoryLink(section: string, focusedBrand: string, slug: string): string {
	let base = `/store/${section}`;

	if (focusedBrand !== '') {
		base = `${base}/brands/${focusedBrand}`;
	}

	if (slug !== '') {
		return `${base}/${slug}`;
	}

	return base;
}

export function generateBrandLink(section: string, focusedCategory: string, slug: string): string {
	let base = `/store/${section}`;

	if (slug !== '') {
		base = `${base}/brands/${slug}`;
	}

	if (focusedCategory !== '') {
		return `${base}/${focusedCategory}`;
	}

	return base;
}

export function generateProductLink(section: string, brandSlug: string, productSlug: string, sku: string): string {
	return `/store/${section}/product/${brandSlug}/${productSlug}/${sku}`;
}
