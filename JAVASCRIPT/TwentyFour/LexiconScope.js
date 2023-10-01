function parentFunction() {
    let parentVariable = "I am a parent variable";
    //console.log(apple); can't access outside the child function
    function childFunction() {
        let apple = "not good";
        console.log(parentVariable); // Accessing the parent variable
    }
    childFunction();
}
parentFunction();
//I am a parent variable



//======================================================
function bank() {
    let heros = ["spider", "bat"];
    function cry() {
        for (let hero of heros) {
            console.log(`help ${hero}`);
        }
    }
    cry();
}
bank();
//help spider
//VM635:5 help bat