const monDiv = document.querySelector(".mon-div");
const tueDiv = document.querySelector(".tue-div");
const wedDiv = document.querySelector(".wed-div");
const thuDiv = document.querySelector(".thu-div");
const friDiv = document.querySelector(".fri-div");
const satDiv = document.querySelector(".sat-div");
const sunDiv = document.querySelector(".sun-div");

const divs = document.querySelectorAll(".diagram-day-div");

let amounts;
let largest;
let index;

window.onload = () => {
  fetch(("data.json"))
    .then(response => response.json())
    .then((data) => {
      //console.log(data)
      monDiv.style.height = `${data[0].amount}%`;
      monDiv.previousElementSibling.innerHTML = `$ ${data[0].amount}`;
      tueDiv.style.height = `${data[1].amount}%`;
      tueDiv.previousElementSibling.innerHTML = `$ ${data[1].amount}`;
      wedDiv.style.height = `${data[2].amount}%`;
      wedDiv.previousElementSibling.innerHTML = `$ ${data[2].amount}`;
      thuDiv.style.height = `${data[3].amount}%`;
      thuDiv.previousElementSibling.innerHTML = `$ ${data[3].amount}`;
      friDiv.style.height = `${data[4].amount}%`;
      friDiv.previousElementSibling.innerHTML = `$ ${data[4].amount}`;
      satDiv.style.height = `${data[5].amount}%`;
      satDiv.previousElementSibling.innerHTML = `$ ${data[5].amount}`;
      sunDiv.style.height = `${data[6].amount}%`;
      sunDiv.previousElementSibling.innerHTML = `$ ${data[6].amount}`;

      amounts = []
      data.forEach((day) => {
        amounts.push(day.amount)
      })
      //console.log(amounts)

      largest = 0
      amounts.forEach((amount) => {
        if (amount > largest) {
          largest = amount
        }
      })
      //console.log(largest)
      for(let i=0; i<data.length; i++) {
        if(data[i].amount === largest) {
          index = i;
        }
      }
      //console.log(index);
      divs[index].style.background = "var(--cyan)";
    })
}