const ToDos = async (todoBody) => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(todoBody)
    }

    let p = fetch('https://jsonplaceholder.typicode.com/posts', options);
    let res = (await p).json();
    return res;
}

const getToDo = async (id) => {
    let responce = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let res = await responce.json();
    return res;
}

const todo = async () => {
    let todoBody = {
        title: 'POST_Fetch_API',
        body: 'Parth',
        userId: 1,
    }
    let todo = await ToDos(todoBody);
    console.log(todo);
    console.log(await getToDo(100));
}

todo();