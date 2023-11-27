const obj = {
  a: 2,
  b: 6,
  c: ["alien", "velvet", "memory"],
  5: true,
  printNames() {
    this.c.forEach((name) => {
      console.log(name);
    });
  },
};

obj.printNames();
