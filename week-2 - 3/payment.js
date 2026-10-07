const addBtns = document.querySelectorAll(".add-btn");
const checkoutLength = document.querySelector(".checkout-length");
const checkoutItems = document.querySelector(".checkout-items");
const checkoutTotal = document.querySelector(".checkout-total-price");
const emptyCardTitle = document.querySelector(".empty-card-title");
const emptyCardDescription = document.querySelector(".empty-card-des");

// -------------------------Restaurant page---------------------------------
// The food list part in restaurant page (left side)

let carts = JSON.parse(localStorage.getItem("cart")) || [];

const renderCards = () => {
  checkoutItems.innerHTML = "";

  const length = carts.reduce((acc, current) => {
    return acc + current.quantity
  }, 0)

  checkoutLength.textContent = length;
  emptyCardTitle.style.display = carts.length ? "none" : "block";
  emptyCardDescription.style.display = carts.length ? "none" : "block";

  let total = 0;

  carts.forEach((food) => {
    total += food.price * food.quantity;

    const item = document.createElement("div");
    item.classList.add("checkout-item");

    //div one
    const info = document.createElement('div')
    const foodName = document.createElement('h4')
    foodName.textContent = food.name
    const foodPrice = document.createElement('p')
    foodPrice.textContent = food.price

    info.appendChild(foodName)
    info.appendChild(foodPrice)

    //div two
    const actionContainer = document.createElement('div')

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('fill-checkout-remove')
    deleteBtn.dataset.id = food.id
    deleteBtn.textContent = 'Remove'

    const addBtn = document.createElement('button')
    addBtn.classList.add('fill-checkout-plus')
    addBtn.dataset.id = food.id
    addBtn.textContent = '+'

    const foodQuantity = document.createElement('span')
    foodQuantity.textContent = food.quantity

    actionContainer.appendChild(deleteBtn)
    actionContainer.appendChild(addBtn)
    actionContainer.appendChild(foodQuantity)

    item.appendChild(info)
    item.appendChild(actionContainer)

    //TODO: Add a (-) button so customer can decrease the item.

    checkoutItems.appendChild(item);

    const removeBtn = item.querySelector(".fill-checkout-remove");
    const plusBtn = item.querySelector('.fill-checkout-plus')

    removeBtn.addEventListener("click", () => {
      const savedFoods = JSON.parse(localStorage.getItem("cart"));
      const filteredItem = savedFoods.filter((meal) => meal.id !== food.id);
      localStorage.setItem("cart", JSON.stringify(filteredItem));
      item.remove()
      return;
    });

    plusBtn.addEventListener('click', () => {
      //FIXME: increase the quantity of item
    })
  });

  checkoutTotal.textContent = `AFN ${total}`;
  localStorage.setItem("cart", JSON.stringify(carts));
};

renderCards();

addBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const foodCard = button.closest(".food-card");

    const id = foodCard.dataset.id;
    const name = foodCard.dataset.name;
    const price = Number(foodCard.dataset.price);

    const isFoodAlreadyExist = carts.find((food) => food.id === id);

    if (isFoodAlreadyExist) {
      isFoodAlreadyExist.quantity++;
    } else {
      carts.push({
        id,
        name,
        price,
        quantity: 1,
        //TODO: here add the portions, tips, spicy level to store in localStorage and after that get it in another cards
      });
    }

    renderCards();
  });
});
