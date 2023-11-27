let names = ["Mike", "Aaron", "Gabriel", "Jose", "Cassie"];

const list = document.querySelector(".main");

let html = ``;

names.forEach((name) => {
  html += `<li>${name}</li>`;
});

list.innerHTML = html;
