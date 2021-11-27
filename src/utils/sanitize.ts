import marked from 'marked';
import DOMPurify from 'isomorphic-dompurify';

const renderer = new marked.Renderer();
const linkRenderer = renderer.link;
renderer.link = (href, title, text) => {
	const html = linkRenderer.call(renderer, href, title, text);
	return html.replace(/^<a /, '<a target="_blank" rel="nofollow noopener noreferrer" ');
};

DOMPurify.addHook('afterSanitizeAttributes', function(node) {
	// set all elements owning target to target=_blank
	if ('target' in node) {
		node.setAttribute('target', '_blank');
	}
	// set non-HTML/MathML links to xlink:show=new
	if (!node.hasAttribute('target') && (node.hasAttribute('xlink:href') || node.hasAttribute('href'))) {
		node.setAttribute('xlink:show', 'new');
	}
});

export function sanitizeMarkdown(content: string): string {
	const dirty = marked(content, { renderer });
	return DOMPurify.sanitize(dirty);
}
