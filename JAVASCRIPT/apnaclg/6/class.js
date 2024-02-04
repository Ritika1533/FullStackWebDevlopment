let student = {
    name: "ritika keshri ",
    id: 211001001109,
    printMarks: () => {
        console.log("name ", this.name);
    },
    printName: function () {
        console.log("my name is ritika");
    },
    printId() {
        console.log("211001001109");
    }

};
let kranrjun = {
    salary: 50000
};
kranrjun.__proto__ = student;
