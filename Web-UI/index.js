

//----------------------------------------------------------------
// using DOM API
//----------------------------------------------------------------

const greetBtn = document.querySelector('.btn-primary');
const showBtn = document.querySelector('.btn-success');
const hideBtn = document.querySelector('.btn-danger');
const cardBody = document.querySelector('.card-body');

greetBtn.addEventListener('click', () => {
    cardBody.innerHTML = 'Hello World!';
});
showBtn.addEventListener('click', () => {
    cardBody.style.display = 'block';
});
hideBtn.addEventListener('click', () => {
    cardBody.style.display = 'none';
});


//----------------------------------------------------------------
// using DOM + XHR/Fetch API
//----------------------------------------------------------------

const top5TodosBtn = document.querySelector('.btn-dark');

top5TodosBtn.addEventListener('click', () => {
    const promise = fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    promise
        .then(response => response.json())
        .then(todos => {
            document.querySelector('#todos-body').innerHTML =
                todos.map(todo => {
                    return `
                    <tr>
                        <td>${todo.id}</td>
                        <td>${todo.title}</td>
                        <td>${todo.completed}</td>
                        <td>${todo.userId}</td>
                    </tr>
                `
                }).join(" ")
        })
})



