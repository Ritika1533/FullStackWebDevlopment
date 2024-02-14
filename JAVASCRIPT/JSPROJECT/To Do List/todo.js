const inputs = document.querySelector(".text-input");
const space = document.querySelector(".list-cointainer");

function add() {
    if (inputs.value === "") {
        alert("Enter your task");
    } else {
        let newEle = document.createElement("h2");
        newEle.innerHTML = `${inputs.value} <i class="fas fa-trash"></i>`;
        space.appendChild(newEle);
        inputs.value = "";
        newEle.querySelector("i").addEventListener("click",()=>{
            newEle.remove();
        })
    }
}

