const amountSummary = document.getElementsByClassName("cart__total-price");
const products = document.getElementsByClassName("cart__item");
const productArr = [...products];
const calculateBtn = document.getElementsByClassName("cart__btn-calculate");

const calculateTotalPrice = (e) => {
  e.preventDefault();
  let totalPrice = 0;

  productArr.forEach((item) => {
    const input = item.querySelector("input");
    console.log(input.dataset);
    const quantity = Number(input.value);
    const { price } = input.dataset;
    const itemPrice = Number(price);
    const totalSingleProductPrice = quantity * itemPrice;
    totalPrice += totalSingleProductPrice;
  });
  amountSummary[0].innerText = totalPrice;
  console.log(totalPrice);
};
calculateBtn[0].addEventListener("click", calculateTotalPrice);
