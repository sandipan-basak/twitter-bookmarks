import Koa from 'koa';

const app = new Koa();
const port = 8000;

app.use(async ctx => {
	ctx.body = 'Hello World!';
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
