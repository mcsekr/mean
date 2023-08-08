


import express from 'express';
import * as url from 'url';
// import logger from './middlewares/logger.js';
import morgan from 'morgan';
import bodyParser from 'body-parser';


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();

let todos = [
    { id: 1, title: 'todo-1', completed: false },
    { id: 2, title: 'todo-2', completed: false },
]

// app.use(logger);
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.static(`${__dirname}/public`));

app.param('id', (req, res, next) => {
    let _id = req.params.id
    req.todoId = _id
    next()
})
app.get("/todos", (req, res, next) => {
    let _limit = req.query._limit
    if (!_limit)
        res.json(todos);
    else
        res.json(todos.slice(0, _limit));
})
app.post("/todos", bodyParser.urlencoded({ extended: false }), (req, res, next) => {
    let { title } = req.body
    let newTodo = { id: todos.length + 1, title, completed: false }
    todos.push(newTodo)
    res.redirect("/")
})
app.get("/todos/:id", (req, res, next) => {
    let _todo = todos.find(todo => todo.id == req.todoId)
    if (_todo)
        res.json(_todo)
    else
        res.status(404).json({ error: "Todo not found" })
});

app.listen(4000, () => {
    console.log('Example app listening on port 4000!');
});