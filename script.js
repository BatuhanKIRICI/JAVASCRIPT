const getTodos = (callBack) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      // console.log(request.responseText);
      callBack(undefined, request.responseText);
    } else if (request.readyState === 4) {
      // console.log("Not successful!");
      callBack("Not successful!", undefined);
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
  request.send();
};

getTodos((err, data) => {
  // console.log(err, data);
  err ? console.log(err) : console.log(data);
});
