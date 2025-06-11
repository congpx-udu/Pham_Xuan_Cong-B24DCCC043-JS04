const fs = require("fs").promises;
const path = require("path");

const usersPath = path.join(__dirname, "users.json");
const cartPath = path.join(__dirname, "data", "cart.json"); // Đường dẫn chính xác

async function readUsers() {
  const data = await fs.readFile(usersPath, "utf-8");
  return JSON.parse(data || "[]");
}

async function writeUsers(users) {
  await fs.writeFile(usersPath, JSON.stringify(users, null, 2));
}

async function readCart() {
  const data = await fs.readFile(cartPath, "utf-8");
  return JSON.parse(data || "[]");
}

async function writeCart(cart) {
  await fs.writeFile(cartPath, JSON.stringify(cart, null, 2));
}

module.exports = {
  readUsers,
  writeUsers,
  readCart,
  writeCart,
};
