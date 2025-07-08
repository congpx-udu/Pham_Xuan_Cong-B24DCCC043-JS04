const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const {
  readUsers,
  writeUsers,
  readCart,
  writeCart,
  readOrders,
  writeOrders,
  readLienHe,
  writeLienHe,
} = require("./utils");

app.use(cors());
app.use(express.json());

// Đăng ký
app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;
  const users = await readUsers();

  const existing = users.find((user) => user.email === email);
  if (existing) return res.status(400).json({ message: "Email đã tồn tại!" });

  users.push({ name, email, password });
  await writeUsers(users);

  res.json({ message: "Đăng ký thành công!" });
});

// Đăng nhập
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const users = await readUsers();

  const user = users.find((u) => u.email === email && u.password === password);
  if (!user)
    return res.status(401).json({ message: "Sai email hoặc mật khẩu!" });

  res.json({ message: "Đăng nhập thành công!", user });
});

// Giỏ hàng
app.post("/api/cart", async (req, res) => {
  const cart = await readCart();
  cart.push(req.body);
  await writeCart(cart);
  res.json({ message: "Đã thêm vào giỏ hàng!" });
});

app.get("/api/cart", async (req, res) => {
  const cart = await readCart();
  res.json(cart);
});

app.delete("/api/cart/:id", async (req, res) => {
  const id = req.params.id;
  let cart = await readCart();
  cart = cart.filter((item) => String(item.id) !== String(id));
  await writeCart(cart);
  res.json({ message: "Đã xóa tour khỏi giỏ hàng!" });
});

app.post("/api/cart/clear", async (req, res) => {
  const cart = await readCart();
  const orders = await readOrders();
  const newOrders = {
    id: Date.now(),
    date: new Date().toLocaleString(),
    items: cart,
  };
  orders.push(newOrders);
  await writeOrders(orders);
  await writeCart([]);
  res.json({ message: "Đặt tour thành công và giỏ hàng đã được làm trống" });
});

// Gửi liên hệ
app.post("/api/lienhe", async (req, res) => {
  const { hoTen, email, dienThoai, noiDung } = req.body;
  if (!hoTen || !email || !dienThoai || !noiDung) {
    return res.status(400).json({ message: "Vui lòng điền đầy đủ thông tin" });
  }

  const lienHeList = await readLienHe();
  const newMessage = {
    id: Date.now(),
    hoTen,
    email,
    dienThoai,
    noiDung,
    date: new Date().toLocaleString(),
  };

  lienHeList.push(newMessage);
  await writeLienHe(lienHeList);

  res.json({ message: "Đã gửi tin nhắn liên hệ thành công!" });
});

// Chạy server
app.listen(port, () => {
  console.log(`✅ Server đang chạy tại http://localhost:${port}`);
});
