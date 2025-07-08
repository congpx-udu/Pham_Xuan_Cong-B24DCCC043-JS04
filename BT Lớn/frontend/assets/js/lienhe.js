document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnGui");

  btn.addEventListener("click", async () => {
    const hoTen = document.getElementById("hoTen").value.trim();
    const email = document.getElementById("email").value.trim();
    const dienThoai = document.getElementById("dienThoai").value.trim();
    const noiDung = document.getElementById("noiDung").value.trim();

    if (!hoTen || !email || !dienThoai || !noiDung) {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/lienhe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hoTen, email, dienThoai, noiDung }),
      });

      const data = await res.json();
      if (res.ok) {
        alert(data.message);
        document.getElementById("formLienHe").reset();
      } else {
        alert(data.message || "Gửi thất bại!");
      }
    } catch (error) {
      console.error(error);
      alert("Không thể gửi tin nhắn. Vui lòng thử lại sau.");
    }
  });
});
