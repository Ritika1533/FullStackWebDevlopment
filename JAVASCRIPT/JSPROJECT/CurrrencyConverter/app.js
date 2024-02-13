const BASE_URL =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const dropdowns = document.querySelectorAll(".dropdown select");
//added option in select
for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
}
//function to update flag
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};
//flag is updated when option is changed
for (let select of dropdowns) {
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }
    //  console.log(fromCurr.value.toLowerCase(), toCurr.value);
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    //console.log(response);
    let data = await response.json();
    //console.log(data);
    let rate = data[toCurr.value.toLowerCase()];
    console.log(rate);
    let finalAmt = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`;
});
const inputBtn=document.querySelector(".age-dob-input");
const calculateBtn=document.querySelector(".Calculate-btn");
const ageResult=document.querySelector(".age-result");
const btnYear=document.querySelector(".btn-year");
calculateBtn.addEventListener("click",()=>{
    if(inputBtn.value==""){
        alert("Please enter your age");
    }else{
        console.log(inputBtn.value);
        const dob=new Date(inputBtn.value);
        console.log(dob);
        const dobYear= dob.getFullYear();
        console.log(dobYear);
        const dobMonth=dob.getMonth();
        //current year
        const today=new Date();
        console.log(today);
        const nowYear=today.getFullYear();
        const nowMonth=today.getMonth();
        const month=nowMonth-dobMonth;
        const year=nowYear-dobYear;
        console.log(year);
        btnYear.innerText=`${year} year`;

    }
});