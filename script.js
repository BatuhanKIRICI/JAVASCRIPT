document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();

  let name = document.getElementById("name");
  let age = document.getElementById("age");
  let errors = document.getElementById("errors");
  errors.innerHTML = "";

  try {
    if (name.value.length === 0) {
      throw new Error("No name input!");
    }
    if (name.value.length > 20) {
      throw new Error("Name is too long!");
    }

    if (age.value.length === 0) {
      throw new Error("No age input!");
    }

    if (isNaN(age.value)) {
      throw new Error("Age is not numeric!");
    }

    console.log("Form is submitted.");
  } catch (err) {
    errors.innerHTML = err;
  } finally {
    name.value = "";
    age.value = "";
  }

  e.preventDefault();
});
