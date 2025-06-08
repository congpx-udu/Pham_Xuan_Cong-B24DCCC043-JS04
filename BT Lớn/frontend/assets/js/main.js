//Banner tự chuyển động
const imgList = [
  "./assets/img/cat-banner-2.webp",
  "./assets/img/banner-du-lich-viet-nam-03.jpg",
  "./assets/img/banner-tour-du-lich-02-1024x640.jpg",
  "./assets/img/maxresdefault-2.jpg",
  "./assets/img/poster-du-lich-45.jpg",
  "./assets/img/dich-vu-thiet-ke-banner-du-lich-chuyen-nghiep-tai-ha-noi1.jpg",
];

let chiSoHienTai = 0;

const bannerImg = document.querySelector("#banner img");

function hienThiAnh(index) {
  bannerImg.src = imgList[index];
}

hienThiAnh(chiSoHienTai);

setInterval(() => {
  chiSoHienTai = (chiSoHienTai + 1) % imgList.length;
  hienThiAnh(chiSoHienTai);
}, 5000);

//gợi ý tìm kiếm
const destinations = [
  "Hà Nội",
  "Đà Nẵng",
  "Hồ Chí Minh",
  "Nha Trang",
  "Phú Quốc",
];
const input = document.getElementById("destination-input");
const suggestions = document.getElementById("suggestions");

suggestions.style.position = "absolute";
suggestions.style.left = input.offsetLeft + input.offsetWidth + 10 + "px";
suggestions.style.top = input.offsetTop + "px";
suggestions.style.zIndex = 1000;

input.addEventListener("input", function () {
  const value = this.value.trim().toLowerCase();
  suggestions.innerHTML = "";
  if (!value) {
    suggestions.style.display = "none";
    return;
  }
  const matches = destinations.filter((d) => d.toLowerCase().includes(value));
  if (matches.length) {
    matches.forEach((d) => {
      const li = document.createElement("li");
      li.textContent = d;
      li.onclick = () => {
        input.value = d;
        suggestions.style.display = "none";
      };
      suggestions.appendChild(li);
    });
    suggestions.style.left = input.offsetLeft + input.offsetWidth + 10 + "px";
    suggestions.style.top = input.offsetTop + "px";
    suggestions.style.display = "block";
  } else {
    suggestions.style.display = "none";
  }
});

document.addEventListener("click", function (e) {
  if (e.target !== input) suggestions.style.display = "none";
});
