const addBtns = document.querySelectorAll(".add-btn");
const checkoutLength = document.querySelector(".checkout-length");
const checkoutItems = document.querySelector(".checkout-items");
const checkoutTotal = document.querySelector(".checkout-total-price");
const emptyCardTitle = document.querySelector(".empty-card-title");
const emptyCardDescription = document.querySelector(".empty-card-dec");

// -------------------------Restaurant page---------------------------------
// The food list part in restaurant page (left side)
let carts = [];

addBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const foodCard = button.closest(".food-card");

    const id = foodCard.dataset.id;
    const name = foodCard.dataset.name;
    const price = Number(foodCard.dataset.price);

    const existingFood = carts.find((food) => food.id === id);

    if (existingFood) {
      existingFood.quantity++;
    } else {
      carts.push({
        id,
        name,
        price,
        quantity: 1,
      });
    }
    console.log(carts);

    listMealInCheckoutCard();
  });
});

// the checkout cart part in restaurant page (right side)

function listMealInCheckoutCard() {
  checkoutItems.innerHTML = "";
//   emptyCardTitle.innerHTML = "";
//   emptyCardDescription.innerHTML = "";

  checkoutLength.textContent = carts.length;

  carts.forEach((food) => {
    const item = document.createElement("div");
    item.classList.add("checkout-item");

    item.innerHTML = `
      <div>
        <h4>${food.name}</h4>
        <p>AFN ${food.price}</p>
      </div>

      <div>
        <button class="fill-checkout-remove" data-id="${food.id}">
          Remove
        </button>
        <button class="fill-checkout-plus" data-id="${food.id}">
          +
        </button>
        <span>${food.quantity}</span>
      </div>
    `;

    checkoutItems.appendChild(item);

  });

  calculateTotal();
}

// calculate the final price
const calculateTotal = () => {
  let total = 0;

  carts.forEach((cart) => {
    total += cart.price * cart.quantity;
  });

  checkoutTotal.textContent = `AFG${total}`;
};
