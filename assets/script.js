const totalPar = document.querySelector(".total-paragraph");
const total = document.getElementById("total-sum");
let prices = document.querySelectorAll(".item__price");
let quantities = document.querySelectorAll(
  ".item__feature:last-child .item__feature-value",
);
const rubSymbol = "&#8381;";

function calculateTotal() {
  let sum = 0;
  let priceStr;
  let price;
  let quantity;

  if (prices && quantities) {
    for (let i = 0; i < prices.length; i++) {
      priceStr = prices[i].textContent.replace(/[^\d.]/g, "");
      price = parseInt(priceStr);
      quantity = parseInt(quantities[i].textContent);
      sum += price * quantity;
    }

    total.innerHTML = sum.toLocaleString("ru-RU") + rubSymbol;
  }
}

window.addEventListener("load", calculateTotal);
