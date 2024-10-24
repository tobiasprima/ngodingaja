function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-section");
  const emptyMessage = document.getElementById("cart-empty");
  const cartSummary = document.getElementById("cart-summary");
  const cartTotal = document.getElementById("cart-total");
  container.innerHTML = "";

  if (cart.length === 0) {
    container.classList.add("hidden");
    emptyMessage.classList.remove("hidden");
    cartSummary.classList.add("hidden");
    return;
  }

  const uniqueCart = cart.filter(
    (course, index, self) =>
      index === self.findIndex((t) => t.title === course.title)
  );

  let totalPrice = 0;

  uniqueCart.forEach((course, index) => {
    totalPrice += course.price;

    const courseCard = `
              <div class="course-card bg-white p-4 rounded-lg shadow-lg relative">
                  <img src="${course.image}" alt="${
      course.title
    }" class="w-full h-40 object-cover rounded-lg">
                  <div class="mt-4">
                      <h4 class="text-lg font-bold">${course.title}</h4>
                      <p class="text-sm text-gray-500">${course.instructor}</p>
                      <div class="flex items-center mt-2">
                          <span class="text-yellow-500 font-bold text-sm">${
                            course.rating
                          }</span>
                          <span class="ml-2 text-xs text-yellow-500">⭐⭐⭐⭐⭐</span>
                          <span class="ml-2 text-xs text-gray-500">(${
                            course.reviews
                          })</span>
                      </div>
                      <div class="flex items-center justify-between mt-2">
                          <h5 class="text-base font-bold">Rp ${course.price.toLocaleString()}</h5>
                          <span class="line-through text-sm text-gray-500">Rp ${course.originalPrice.toLocaleString()}</span>
                      </div>
                  </div>
                  <button class="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2" onclick="removeFromCart(${index})">
                      ✕
                  </button>
              </div>
          `;
    container.innerHTML += courseCard;
  });

  cartTotal.textContent = totalPrice.toLocaleString();
  cartSummary.classList.remove("hidden");
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

window.onload = loadCart;
