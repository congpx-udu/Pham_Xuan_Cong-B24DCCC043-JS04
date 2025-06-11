document.querySelectorAll(".tour-items button").forEach((btn) => {
  btn.addEventListener("click", function () {
    const parent = btn.closest(".tour-items");

    const tour = {
      id: "tour-" + Date.now(),
      title: parent.querySelector("h4").innerText,
      image: parent.querySelector("img").getAttribute("src"),
      time: parent.querySelector(".fa-calendar-days").nextElementSibling
        .innerText,
      price: parent.querySelector(".tour-price b").innerText,
      departure:
        parent.querySelector(".fa-business-time").nextElementSibling.innerText,
    };

    fetch("http://localhost:3000/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tour),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
      })
      .catch((err) => {
        console.error("Lỗi:", err);
      });
  });
});
