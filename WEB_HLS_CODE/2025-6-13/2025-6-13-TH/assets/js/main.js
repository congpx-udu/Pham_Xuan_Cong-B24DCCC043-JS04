const imgList = [
  "./assets/img/anh1.jpg",
  "./assets/img/anh2.jpg",
  "./assets/img/anh3.jpg",
  "./assets/img/anh4.jpg",
  "./assets/img/anh5.jpg",
];

let chiSoHienTai = 0;
let timer;

const imgHienThi = document.getElementById("slide");
const dotsContainer = document.getElementById("dots");

imgList.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (index === chiSoHienTai) dot.classList.add("active");

  dot.addEventListener("click", () => {
    chiSoHienTai = index;
    hienThiAnh(chiSoHienTai);
    resetTimer();
  });

  dotsContainer.appendChild(dot);
});

function hienThiAnh(index) {
  imgHienThi.src = imgList[index];
  capNhatDotActive();
}

function capNhatDotActive() {
  document
    .querySelectorAll(".dot")
    .forEach((dot, i) => dot.classList.toggle("active", i === chiSoHienTai));
}

function anhTiepTheo() {
  chiSoHienTai = (chiSoHienTai + 1) % imgList.length;
  hienThiAnh(chiSoHienTai);
  resetTimer();
}

function anhTruocDo() {
  chiSoHienTai = (chiSoHienTai - 1 + imgList.length) % imgList.length;
  hienThiAnh(chiSoHienTai);
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(anhTiepTheo, 5000);
}
resetTimer();
