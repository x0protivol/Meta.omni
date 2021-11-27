const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	createServer((req, res) => {
		const parsedUrl = parse(req.url, true);
		handle(req, res, parsedUrl);
	}).listen('/tmp/nginx.socket', err => {
		if (err) throw err;
		console.log('> NextJS Server running...');
		fs.openSync('/tmp/app-initialized', 'w');
	});
});
