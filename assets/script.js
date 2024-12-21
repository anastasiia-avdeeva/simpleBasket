const total = document.getElementById("total-sum");
const items = document.querySelector(".items");
const couponBtn = document.getElementById("couponBtn");
const prices = document.getElementsByClassName("item__price");
const quantities = document.getElementsByClassName("quantity-val");
const rubSymbol = "&#8381;";
const discount = 0.2;

function calculateTotal() {
  let sum = 0;

  if (prices && quantities) {
    for (let i = 0; i < prices.length; i++) {
      const priceStr = prices[i].textContent.replace(/[^\d.]/g, "");
      const price = parseFloat(priceStr);
      const quantity = parseFloat(quantities[i].textContent);
      sum += price * quantity;
    }
    return sum;
  }
}

function pasteTotal(sum) {
  total.innerHTML = sum.toLocaleString("ru-RU") + rubSymbol;
}

window.addEventListener("load", () => {
  const sum = calculateTotal();
  pasteTotal(sum);
});

function deleteItem(event) {
  const target = event.target;
  if (target.tagName === "BUTTON") {
    const itemToDel = target.closest(".item");
    itemToDel.remove();
  }
}

items.addEventListener("click", (e) => {
  deleteItem(e);
  const newTotal = calculateTotal();
  pasteTotal(newTotal);
});

function calculateNewTotal() {
  const sum = calculateTotal();
  const newSum = sum * (1 - discount);
  return newSum;
}

couponBtn.addEventListener("click", () => {
  const newSum = calculateNewTotal();
  pasteTotal(newSum);
  couponBtn.disabled = true;
});
