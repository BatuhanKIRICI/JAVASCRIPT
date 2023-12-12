/* fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json)); */

fetch("/json/first.json")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(data));
