/* fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json)); */

/* fetch("/json/first.json")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err)); */

getTodos = async () => {
  let response = await fetch("/jsoscn/first.json");
  response.status !== 200 && console.log("Wrong endpoint!");
  const data = await response.json();
  return data;
};

getTodos()
  .then((response) => response)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
