// try {
//   console.log(myFunction());
// } catch (e) {
//   console.log(e);
//   console.log(e.message);
//   console.log(e.name);
//   console.log(e instanceof ReferenceError);
//   console.log(e instanceof TypeError);
//   console.log(typeof e);
// }

let info = {
  name: "Bill Smith",
};

try {
  console.log(info.name);
  if (!info.numberOfTel) {
    throw new Error("User has no contact info!");
  }
} catch (e) {
  console.log(e);
} finally {
  console.log("Finally block!");
}
