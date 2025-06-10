import express, { Response } from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (_, res: Response) => {
    const options = {
        root: path.join(__dirname),
    };
    res.sendFile('/index.html', options);
});

app.listen(port, () => {
    console.log(`App running at port ${port}`);
});