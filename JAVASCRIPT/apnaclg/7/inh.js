class Person {
    constructor() {
        this.species = "homo sepians";
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
    work() {
        console.log("do nothing");
    }
}
class Engineer extends Person {

    constructor(branch) {
        super()
        this.branch = branch;
    }
    earn() {
        console.log("yes");
    }
    work() {
        console.log("solve problem ");
    }
}
class Doctor extends Person {
    work() {
        console.log("treat people");
    }
}
let p1 = new Person();
let e1 = new Engineer("cs");
let d1 = new Doctor();