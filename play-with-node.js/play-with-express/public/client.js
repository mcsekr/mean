
console.log("-client.js-")

// using DOM API

const todosBtn = document.querySelector(".btn-primary");
todosBtn.addEventListener("click", (e) => {

    const url = "http://localhost:4000/todos";
    fetch(url)
        .then(res => res.json())
        .then(todos => {
            const todoRows = todos.map((todo, idx) => {
                return `
                    <tr>
                    <td>${todo.id}</td>
                    <td>${todo.title}</td>
                    <td>${todo.completed}</td>
                    </tr>
                `
            })
            document.querySelector("#todos").innerHTML = todoRows.join("");
        });

})