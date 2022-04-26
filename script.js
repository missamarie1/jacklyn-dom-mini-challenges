"use strict";
//mini challenge 1
const colaButton = document.querySelector(".cola");
const peanutsButton = document.querySelector(".peanuts");
const chocolateButton = document.querySelector(".chocolate");
const gummiesButton = document.querySelector(".gummies");
const totalParagraph = document.querySelector(".vending-total");

let total = 0;

// colaButton.addEventListener("click", (event) => {
//   total += 2;
//   //   console.log(total);
//   totalParagraph.textContent = `Total: $${total}.00`;
// });

colaButton.addEventListener("click", (event) => {
  total += 2;
  console.log(total);
  totalParagraph.textContent = `Total: $${total}.00`;
});
peanutsButton.addEventListener("click", (event) => {
  total += 3;
  console.log(total);
  totalParagraph.textContent = `Total: $${total}.00`;
});
chocolateButton.addEventListener("click", (event) => {
  total += 4;
  console.log(total);
  totalParagraph.textContent = `Total $${total}.00`;
});
gummiesButton.addEventListener("click", (event) => {
  total += 6;
  console.log(total);
  totalParagraph.textContent = `Total $${total}.00`;
});

//mini challenge 2

const coinsForm = document.querySelector(".make-money");
const coinContainer = document.querySelector(".coin-container");

const addACoin = coinsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const number = document.querySelector("#number").value;
  const typeCoin = document.querySelector("#type").value;

  for (let i = 0; i < number; i++) {
    console.log(typeCoin);
    console.log(number);
    const newCoin = document.createElement("div");
    newCoin.classList.add(typeCoin);
    coinContainer.append(newCoin);
    newCoin.textContent = `${typeCoin}`;
    newCoin.addEventListener("click", (e) => {
      newCoin.remove();
    });
  }
});

//// mini challenge 2
// const moneyForm = document.querySelector(".money-form");
// // form listens for submits
// moneyForm.addEventListener("submit", (zebra) => {
//   zebra.preventDefault();
//   const howManyCoins = document.querySelector("#howMany").value;
//   const typeOfCoin = document.querySelector("#whichCoin").value;
//   console.log(howManyCoins);
//   console.log(typeOfCoin);
//   for (let i = 0; i < howManyCoins; i++) {
//     const newCoin = document.createElement("div");
//     newCoin.classList.add(typeOfCoin, "coin");
//     newCoin.addEventListener("click", () => {
//       newCoin.remove();
//     });
//     document.querySelector(".coin-container").append(newCoin);
//   }
// });

//mini challenge 3
const onButton = document.querySelector(".on");
const offButton = document.querySelector(".off");
const toggleButton = document.querySelector(".toggle");
const endButton = document.querySelector(".end");
const lightBulb = document.querySelector(".light-bulb");
const allButtons = document.querySelectorAll(".button");

onButton.addEventListener("click", () => {
  lightBulb.classList.add("turn-on");
});
offButton.addEventListener("click", () => {
  lightBulb.classList.remove("turn-on");
});
toggleButton.addEventListener("click", () => {
  lightBulb.classList.toggle("turn-on");
});
endButton.addEventListener("click", () => {
  lightBulb.remove();
  allButtons.forEach((node) => {
    node.disabled = true;
  });
});
