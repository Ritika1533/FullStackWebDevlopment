const inputBtn = document.querySelector(".age-dob-input");
const calculateBtn = document.querySelector(".Calculate-btn");
const btnYear = document.querySelector(".btn-year");
const btnMonth=document.querySelector(".btn-month");
const btnDay=document.querySelector(".btn-day");
calculateBtn.addEventListener("click", () => {
    if (inputBtn.value == "") {
        alert("Please enter your age");
    } else {
        const dob = new Date(inputBtn.value);
        const dobYear = dob.getFullYear();
        const dobMonth = dob.getMonth();
        const dobDay=dob.getDay();
        // Current date
        const today = new Date();
        const nowYear = today.getFullYear();
        const nowMonth = today.getMonth();
        const nowDay=today.getDay();
        //calculation
        const year = nowYear - dobYear;
        let month;
        if(dobMonth>nowMonth){
            month =dobMonth-nowMonth ;
        }else{
            month = nowMonth - dobMonth;
        }
        let day;
        if(dobDay>nowDay){
             day=dobDay-nowDay;
        }else{
             day=nowDay-dobDay;
        }
        btnYear.innerText = `${year} years`;
        btnMonth.innerText=`${month} Months`;
        btnDay.innerText=`${day} days`;
    }
});
