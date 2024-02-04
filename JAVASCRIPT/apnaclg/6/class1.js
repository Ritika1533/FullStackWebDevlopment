class ToyatoCar {
    constructor(brand, milage) {
        console.log("constructor ");
        this.brand = brand;
        this.mlilage = milage;
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    /*
    setBrand(brand) {
        this.brand = brand;
    }
    */
}
let fortuner = new ToyatoCar("fortuner", 10);
//fortuner.setBrand("fortuner");