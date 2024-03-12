const baseURL = 'https://jsonplaceholder.typicode.com/todos/';

const fetchData = () => {
    fetch(baseURL).then(response => {
        console.log('fetched')
        console.log(response);
    }).catch(err => console.log(err))
}

fetchData()