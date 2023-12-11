const getTodos = (callBack) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const info = JSON.parse(request.responseText);

      callBack(undefined, info);
    } else if (request.readyState === 4) {
      callBack("Not successful!", undefined);
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos");
  request.send();
};

getTodos((err, data) => {
  err ? console.log(err) : console.log(data);
});
