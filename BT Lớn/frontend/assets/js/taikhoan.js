const user = JSON.parse(sessionStorage.getItem("user"));
const taiKhoan = document.querySelector(".nav-item.taikhoan");
const taiKhoanText = taiKhoan.querySelector("p");
const loginBox = taiKhoan.querySelector(".login");

function showLoggedIn(user) {
  taiKhoanText.textContent = user.name || user.email || "Tài khoản";

  loginBox.innerHTML = `
    <div class="logout"><a href="#" id="logout-link">Đăng xuất</a></div>
  `;
  loginBox.style.display = "none";

  taiKhoan.addEventListener("mouseenter", () => {
    loginBox.style.display = "block";
  });

  taiKhoan.addEventListener("mouseleave", () => {
    loginBox.style.display = "none";
  });

  const logOutLink = document.getElementById("logout-link");
  logOutLink.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.removeItem("user");
    showLoggedOut();
  });
}

function showLoggedOut() {
  taiKhoanText.textContent = "Tài khoản";

  loginBox.innerHTML = `
    <div class="tk"><a href="./login.html">Đăng nhập</a></div>
    <div><a href="./login.html">Đăng Ký</a></div>
  `;
  loginBox.style.display = "none";

  taiKhoan.addEventListener("mouseenter", () => {
    loginBox.style.display = "flex";
    loginBox.style.flexDirection = "column";
    loginBox.style.alignItems = "end";
    loginBox.style.justifyContent = "center";
    loginBox.style.gap = "10px";
  });

  taiKhoan.addEventListener("mouseleave", () => {
    loginBox.style.display = "none";
  });
}

if (user) {
  showLoggedIn(user);
} else {
  showLoggedOut;
}
