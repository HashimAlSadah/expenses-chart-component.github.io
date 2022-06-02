const chart = document.querySelector(".chart");
let chartHeight = 600;
let data;
let total = 0;
let apiLink = "./data.json";
//--------------------

getData();

//--------Render Data----------
async function getData(){
    const response = await fetch(apiLink);
    data = await response.json();
    data.forEach(object => {
        total += object.amount;
    })
    displayResult();
    
}

//----------Display in HTML----------
function displayResult(){

    data.forEach((object, objIndex) => {
        let barContainer = document.createElement("div");
        barContainer.classList.add("bar-container");
        let bar = document.createElement("div");
        let barAmount = document.createElement("p");
        barAmount.classList.add("bar-amount");
        barAmount.innerText = "$" + object.amount;
        bar.classList.add("bar");
        bar.id = (object.day);
        let day = document.createElement("small");
        day.innerText = object.day;
        bar.style.height = ( (object.amount / total) * chartHeight ) + "px";
        bar.style.bottom = "0"; 
        bar.append(barAmount);
        barContainer.append(bar, day);
        chart.append(barContainer);
    });

};






