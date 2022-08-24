// ITERATION 1

//const { product } = required("puppeteer");

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotalSpan = product.querySelector('.subtotal span');
  const subtotal = parseFloat(price.textContent) * parseInt(quantity.value);

  subtotalSpan.textContent = subtotal;
return subtotal;
}

function calculateAll() {
  const products = document.getElementsByClassName("product");

  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += updateSubtotal(products[i]);
} 
const totalSpan = document.querySelector("#total-value span")
totalSpan.textContent = total;
  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
