(function (name) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let today = new Date().getDay();

  let greet = `Hello ${name}! Today is ${days[today]}.`;
  console.log(greet);
})("Andrea");
