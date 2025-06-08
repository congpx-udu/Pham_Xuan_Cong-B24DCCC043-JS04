const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const { readUsers, writeUsers } = require("./utils");

app.use(cors());
app.use(express.json());

app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;
  const users = await readUsers();

  const existing = users.find((user) => user.email === email);
  if (existing) return res.status(400).json({ message: "Email đã tồn tại!" });

  users.push({ name, email, password });
  await writeUsers(users);

  res.json({ message: "Đăng ký thành công!" });
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const users = await readUsers();

  const user = users.find((u) => u.email === email && u.password === password);
  if (!user)
    return res.status(401).json({ message: "Sai email hoặc mật khẩu!" });

  res.json({ message: "Đăng nhập thành công!", user });
});

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
