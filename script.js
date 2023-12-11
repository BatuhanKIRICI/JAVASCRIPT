const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const info = JSON.parse(request.responseText);
        resolve(info);

        // callBack(undefined, info);
      } else if (request.readyState === 4) {
        // callBack("Not successful!", undefined);
        reject("Not successful!");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

getTodos("/json/first.json")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

const getPromise = () => {
  return new Promise((resolve, reject) => {
    // resolve("Successful!");
    reject("Unsuccessful!");
  });
};

/* getPromise()
  .then((data) => console.log("Successful!", data))
  .catch((err) => console.log("Unsuccessful!", err)); */
