const totalPar = document.querySelector(".total-paragraph");
const total = document.getElementById("total-sum");
const items = document.querySelector(".items");

const prices = document.getElementsByClassName("item__price");
const quantities = document.getElementsByClassName("quantity-val");
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

function deleteItem(event) {
  const target = event.target;
  if (target.tagName === "BUTTON") {
    const itemToDel = target.closest(".item");
    itemToDel.remove();
    calculateTotal();
  }
}

items.addEventListener("click", deleteItem);
