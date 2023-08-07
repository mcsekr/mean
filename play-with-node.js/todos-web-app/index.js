


import express from 'express';
import * as url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();


// app.get('/', (req, res) => {
//     res.sendFile(`${__dirname}/public/index.html`);
// })
// app.get('/css/bootstrap.css', (req, res) => {
//     res.sendFile(`${__dirname}/public/css/bootstrap.css`);
// })
// app.get('/images/Todos_Logo.png', (req, res) => {
//     res.sendFile(`${__dirname}/public/images/Todos_Logo.png`);
// })


app.use(express.static(`${__dirname}/public`));



app.listen(4000, () => {
    console.log('Example app listening on port 4000!');
});