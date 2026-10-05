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
  const newAddressElement = document.createElement("div");
  newAddressElement.classList.add("newAddress");

  const place = document.createElement("h3");
  place.textContent = placeInput.value;

  const street = document.createElement("p");
  street.textContent = streetInput.value;

  newAddressElement.appendChild(place);
  newAddressElement.appendChild(street);

  existingAddressContainer.append(newAddressElement);

  JSON.stringify(localStorage.setItem("newAddress", placeInput.value));

  placeInput.textContent = "";
  streetInput.textContent = "";
});
