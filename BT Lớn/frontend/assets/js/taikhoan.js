const user = JSON.parse(sessionStorage.getItem("user"));
const taikhoan = document.querySelector(".nav-item.taikhoan");
const taikhoanText = taikhoan.querySelector("p");
const loginBox = taikhoan.querySelector(".login");

function showLoggedIn(user) {
  taikhoanText.textContent = user.name || user.email || "Tài khoản";

  loginBox.innerHTML = `
    <div class="logout"><a href="#" id="logout-link">Đăng xuất</a></div>
  `;
  loginBox.style.display = "none";

  taikhoan.addEventListener("mouseenter", () => {
    loginBox.style.display = "block";
  });
  taikhoan.addEventListener("mouseleave", () => {
    loginBox.style.display = "none";
  });

  const logoutLink = document.getElementById("logout-link");
  logoutLink.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.removeItem("user");
    showLoggedOut();
  });
}

function showLoggedOut() {
  taikhoanText.textContent = "Tài khoản";

  loginBox.innerHTML = `
    <div class="tk"><a href="./login.html">Đăng nhập</a></div>
    <div><a href="./login.html">Đăng Ký</a></div>
  `;
  loginBox.style.display = "none";

  taikhoan.addEventListener("mouseenter", () => {
    loginBox.style.display = "flex";
    loginBox.style.flexDirection = "column";
    loginBox.style.alignItems = "end";
    loginBox.style.justifyContent = "center";
    loginBox.style.gap = "10px";
  });
  taikhoan.addEventListener("mouseleave", () => {
    loginBox.style.display = "none";
  });
}

if (user) {
  showLoggedIn(user);
} else {
  showLoggedOut();
}
