// let list = {
//   category: "car",
//   brands: ["Opel", "Mercedes", "Audi", "BMW"],
//   call: function () {
//     this.brands.map((name) => console.log(`${this.category} ${name}`));
//   },
// };

// list.call();

function Game() {
  this.live = 0;
  this.addLive = () => {
    this.oneUp = setInterval(() => console.log(this.live++), 1000);
  };
}

let player = new Game();
player.addLive();
