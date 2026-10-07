const addNewAddressBtn = document.querySelector(".new-address-btn");
const newAddressContainer = document.querySelector(".new-address-inputs");
const saveNewAddressBtn = document.querySelector(".save-new-address-btn");
const existingAddressContainer = document.querySelector(".address-cards");
const placeInput = document.getElementById("address-place");
const streetInput = document.getElementById("street-address"); 

addNewAddressBtn.addEventListener("click", () => {
  newAddressContainer.style.display = "flex";
});

saveNewAddressBtn.addEventListener("click", () => {
  const place = placeInput.value.trim();
  const street = streetInput.value.trim();

  if (!place || !street) {
    alert("Please fill both fields");
    return;
  }

  const newAddress = {
    id: Date.now(),
    place: place,
    street: street,
  };

  const addresses = JSON.parse(localStorage.getItem("addresses")) || [];

  addresses.push(newAddress);

  localStorage.setItem("addresses", JSON.stringify(addresses));

  createAddressCard(newAddress);

  placeInput.value = "";
  streetInput.value = "";

  newAddressContainer.style.display = "none";
});

function createAddressCard(address) {
  const addressCard = document.createElement("div");
  addressCard.classList.add("address-card");

  addressCard.innerHTML = `
    <div class="address-card-header">
      <div class="address-icon">
        ${address.place.charAt(0).toUpperCase()}
      </div>

      <div class="address-title-wrapper">
        <h3 class="address-title">${address.place}</h3>
      </div>
    </div>

    <p class="address-details">
      ${address.street}
    </p>

    <div class="address-card-actions">
      <button
        type="button"
        class="btn btn-outline default-btn"
      >
        Set as default
      </button>

      <button
        type="button"
        class="btn btn-outline"
      >
        Edit
      </button>

        <button
          type="button"
          class="btn btn-outline remove">
          Remove
        </button>
    </div>
  `;

  existingAddressContainer.appendChild(addressCard);

  const removeBtn = addressCard.querySelector(".remove");

  removeBtn.addEventListener("click", () => {
    const items = JSON.parse(localStorage.getItem("addresses"));
    const filteredItem = items.filter((item) => item.id !== address.id);
    localStorage.setItem("addresses", JSON.stringify(filteredItem));
    addressCard.remove();
    return;
  });
}

const savedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];

savedAddresses.forEach((address) => {
  createAddressCard(address);
});


// ------- logout ---------

const logout = document.querySelector('.logout')

logout.addEventListener('click', () => {
    localStorage.removeItem('user')
    window.location.href = 'createAccount.html'
})