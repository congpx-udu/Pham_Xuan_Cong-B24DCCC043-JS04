document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const countTourEl = document.querySelector(".count-tour");
  const totalPriceEl = document.querySelector(".total-price");
  const checkoutBtn = document.querySelector(".checkout-btn");

  fetch("http://localhost:3000/api/cart")
    .then((res) => res.json())
    .then((cart) => {
      if (cart.length === 0) {
        container.innerHTML = "<p>Chưa có tour nào trong giỏ hàng.</p>";
        return;
      }

      let total = 0;

      cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "cart-item";

        const price = parseInt(item.price.replace(/[^\d]/g, ""));
        total += price;

        div.innerHTML = `
          <img src="${item.image}" width="200" />
          <div class="info">
            <h3>${item.title}</h3>
            <p>${item.departure}</p>
            <p>${item.time}</p>
            <p><strong>${item.price}</strong></p>
            <button class="delete-btn" data-id="${item.id}">Xóa</button>
          </div>
        `;

        container.appendChild(div);
      });

      countTourEl.innerText = `(${cart.length} tour)`;
      totalPriceEl.innerText = formatCurrency(total);

      document.querySelectorAll(".delete-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
          const tourId = this.getAttribute("data-id");
          fetch(`http://localhost:3000/api/cart/${tourId}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then(() => {
              location.reload();
            })
            .catch((err) => {
              console.error("Lỗi khi xóa tour:", err);
            });
        });
      });

      checkoutBtn.addEventListener("click", function () {
        alert("Bạn đã đặt tour thành công!");
        fetch("http://localhost:3000/api/cart/clear", { method: "POST" }).then(
          () => location.reload()
        );
      });
    })
    .catch((err) => {
      console.error("Lỗi khi tải giỏ hàng:", err);
    });

  function formatCurrency(amount) {
    return amount.toLocaleString("vi-VN") + "₫";
  }
});
