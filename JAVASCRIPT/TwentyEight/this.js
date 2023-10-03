//THIS KEYWORD
const person = {
    first: "ritika",
    last: "keshri",
    firstname() {
        //console.log(`${this.first} + ${this.last} `);
        return `${this.first} ${this.last}`;

    }
}
person.firstname();//ritika keshri
person.last = "rana";
person.firstname();//ritika rana