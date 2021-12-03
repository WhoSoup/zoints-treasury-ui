import * as express from 'express';
const app = express.default();
const port = 8080;

app.use('/', express.static('./'));

app.listen(port, async () => {
    console.log(`Server started at http://localhost:${port}`);
});
