import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 })
);

app.get('/api/test', (req, res) => res.send('Hello World'));

const port = 9000;
app.listen(port, () => console.log(`Example app listening on porttt ${port}!`));
