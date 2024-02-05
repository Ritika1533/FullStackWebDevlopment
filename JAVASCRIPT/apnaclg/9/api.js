const url = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    let response = await fetch(url);
    console.log(response);//json format
    let data = await response.json();//js object
    console.log(data);
    factPara.innerText = data[3].text;
}
btn.addEventListener("click", getFacts);