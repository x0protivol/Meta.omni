import {
	AdvancedCategoryRelation,
	AdvancedCategoryRelationLink,
	SimpleCategoryRelation,
	SimpleCategoryRelationLink,
} from 'types/category';
import { SimpleSection } from 'types/section';

export function generateCategoryBrowserList(
	categories: SimpleCategoryRelation[],
	focusedSlug: string,
): SimpleCategoryRelationLink[] {
	if (focusedSlug === '') {
		return categories
			.filter(c => c.parent === null)
			.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
			.map(a => ({ ...a, depth: 0 }));
	}

	const sortedC = categories.slice().sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));

	const children = getChildren(sortedC, focusedSlug);
	const siblings = getSiblings(sortedC, focusedSlug);

	const index = siblings.findIndex(a => a.slug === focusedSlug);
	const first = siblings.slice(0, index + 1);
	const last = siblings.slice(index + 1);

	const [a, b, depth] = injectParents(sortedC, focusedSlug);

	const c = [
		...first.map(a => ({ ...a, depth })),
		...children.map(a => ({ ...a, depth: depth + 1 })),
		...last.map(a => ({ ...a, depth })),
	];

	return [...a, ...c, ...b];
}

export function generateCategorySectionTree(
	categories: AdvancedCategoryRelation[],
	section: SimpleSection,
): AdvancedCategoryRelationLink[] {
	const sortedC = categories
		.slice()
		.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
		.filter(category => category.appearsIn.find(s => s.id === section.id));

	const returnValue: AdvancedCategoryRelationLink[] = [];
	// returnValue.push(...sortedC.filter(c => c.parent === null).map(c => ({ ...c, depth: 0 })));

	const topLevels = sortedC.filter(c => c.parent === null).map(c => ({ ...c, depth: 0 }));
	for (let i = 0; i < topLevels.length; i++) {
		const children = getWithChildren(topLevels[i], sortedC, 1);
		returnValue.push(topLevels[i], ...children);
	}

	return returnValue;
}

function getWithChildren(
	category: AdvancedCategoryRelationLink,
	categories: AdvancedCategoryRelation[],
	depth: number,
): AdvancedCategoryRelationLink[] {
	const children = categories.filter(c => c.parent?.id === category.id).map(c => ({ ...c, depth }));
	const returnValue: AdvancedCategoryRelationLink[] = [];
	for (let i = 0; i < children.length; i++) {
		const furtherChildren = getWithChildren(children[i], categories, depth + 1);
		returnValue.push(children[i], ...furtherChildren);
	}
	return returnValue;
}

function injectParents(
	categories: SimpleCategoryRelation[],
	slug: string,
): [SimpleCategoryRelationLink[], SimpleCategoryRelationLink[], number] {
	const current = categories.find(c => c.slug === slug);

	const parents = getParents(categories, slug);

	if (parents.length === 0) {
		return [[], [], 0];
	}

	const index = parents.findIndex(a => a.slug === current?.parent?.slug);
	const first = parents.slice(0, index + 1);
	const last = parents.slice(index + 1);

	const [a, b, depth] = injectParents(categories, current?.parent?.slug || '');

	return [[...a, ...first.map(a => ({ ...a, depth }))], [...last.map(a => ({ ...a, depth })), ...b], depth + 1];
}

function getChildren(categories: SimpleCategoryRelation[], focusedSlug: string): SimpleCategoryRelation[] {
	const current = categories.find(c => c.slug === focusedSlug);
	return categories.filter(c => c.parent?.id === current?.id);
}

function getSiblings(categories: SimpleCategoryRelation[], focusedSlug: string): SimpleCategoryRelation[] {
	const current = categories.find(c => c.slug === focusedSlug);
	return categories.slice().filter(category => category.parent?.id === current?.parent?.id);
}

function getParents(categories: SimpleCategoryRelation[], focusedSlug: string): SimpleCategoryRelation[] {
	const current = categories.find(c => c.slug === focusedSlug);
	if (current && current.parent) {
		const parentSiblings = getSiblings(categories, current.parent.slug);
		return parentSiblings;
	}

	return [];
}

export function getProductCategory(appearsIn: SimpleCategoryRelation[]): SimpleCategoryRelation | null {
	for (let i = 0; i < appearsIn.length; i++) {
		for (let j = 0; j < appearsIn.length; j++) {
			if (appearsIn[j].parent?.id === appearsIn[i].id) {
				break;
			}
			return appearsIn[j];
		}
	}
	return null;
}
