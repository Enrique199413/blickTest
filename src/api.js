
const api = fetch('https://jsonplaceholder.typicode.com/posts/')
.then(response => response.json())
.then(users => console.log(users));

console.log(api);

export default api;
