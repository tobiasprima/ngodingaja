function loadCheckout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("checkout-section");
  const emptyMessage = document.getElementById("checkout-empty");
  const checkoutSummary = document.getElementById("checkout-summary");
  const checkoutTotal = document.getElementById("checkout-total");
  container.innerHTML = "";

  if (cart.length === 0) {
    container.classList.add("hidden");
    emptyMessage.classList.remove("hidden");
    checkoutSummary.classList.add("hidden");
    return;
  }

  const uniqueCart = cart.filter(
    (course, index, self) =>
      index === self.findIndex((t) => t.title === course.title)
  );

  let totalPrice = 0;

  uniqueCart.forEach((course) => {
    totalPrice += course.price;

    const courseCard = `
        <div class="course-card bg-white p-4 w-[250px] rounded-lg shadow-lg relative">
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
        </div>
      `;
    container.innerHTML += courseCard;
  });

  checkoutTotal.textContent = totalPrice.toLocaleString();
  checkoutSummary.classList.remove("hidden");
}

document.getElementById("confirm-purchase").addEventListener("click", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;

  if (!name || !email || !address) {
    alert("Please fill in all billing information.");
    return;
  }

  localStorage.removeItem("cart");

  alert("Your Purchase has been Confirmed!");

  setTimeout(() => {
    window.location.href = "../index.html";
  }, 2000);
});

window.onload = loadCheckout;
