class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name,
            this.age = age,
            this.energy = energy
    }
    sleep() {
        this.energy += 10
    }
    doSomething() {
        this.energy = -10
    }
}

class Worker extends Person {
    constructor(name = "Tom", age = 20, energy = 100, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10;
    }
}

function intern() {
    let newIntern = new Worker("Bob", 21, 110);
    newIntern.goToWork();
    return newIntern;
}

function manager() {
    let newManager = new Worker("Alice", 30, 120, 100, 30);
    newManager.doSomethingFun();
    return newManager;
}

let internObject = intern();
console.log(`Intern: Name=${internObject.name}, Age=${internObject.age}, Energy=${internObject.energy}, XP=${internObject.xp}, HourlyWage=${internObject.hourlyWage}`);

let managerObject = manager();
console.log(`Manager: Name=${managerObject.name}, Age=${managerObject.age}, Energy=${managerObject.energy}, XP=${managerObject.xp}, HourlyWage=${managerObject.hourlyWage}`);