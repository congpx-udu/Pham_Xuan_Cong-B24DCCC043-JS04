document.querySelector(".img-btn").addEventListener("click", function () {
  document.querySelector(".container").classList.toggle("s-signup");
});

document
  .querySelector(".sign-up .submit")
  .addEventListener("click", async () => {
    const name = document.querySelector('.sign-up input[type="text"]').value;
    const email = document.querySelector('.sign-up input[type="email"]').value;
    const password = document.querySelectorAll(
      '.sign-up input[type="password"]'
    )[0].value;
    const confirm = document.querySelectorAll(
      '.sign-up input[type="password"]'
    )[1].value;

    if (password !== confirm) {
      alert("Mật khẩu không khớp!");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message);
        window.location.href = "../frontend/login.html";
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Lỗi kết nối đến server.");
    }
  });

document
  .querySelector(".sign-in .submit")
  .addEventListener("click", async () => {
    const email = document.querySelector('.sign-in input[type="email"]').value;
    const password = document.querySelector(
      '.sign-in input[type="password"]'
    ).value;

    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        sessionStorage.setItem("user", JSON.stringify(data.user));
        window.location.href = "../frontend/index.html";
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Lỗi kết nối đến server.");
    }
  });
