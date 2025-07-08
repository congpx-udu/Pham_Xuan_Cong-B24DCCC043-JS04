document.addEventListener("DOMContentLoaded", function () {
  const countTourEl = document.querySelector(".counttour");
  fetch("http://localhost:3000/api/cart")
    .then((res) => res.json())
    .then((cart) => {
      countTourEl.innerText = cart.length;
    });
});
