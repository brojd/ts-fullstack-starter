import express from 'express';
import bodyParser from 'body-parser';

const app = express();
console.log('a');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
