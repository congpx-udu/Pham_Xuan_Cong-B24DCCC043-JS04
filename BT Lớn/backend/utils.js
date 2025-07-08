const fs = require("fs").promises;
const path = require("path");

const usersPath = path.join(__dirname, "users.json");
const cartPath = path.join(__dirname, "data", "cart.json");
const ordersPath = path.join(__dirname, "data", "orders.json");
const lienHePath = path.join(__dirname, "data", "lienhe.json");

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

async function readOrders() {
  const data = await fs.readFile(ordersPath, "utf-8");
  return JSON.parse(data || "[]");
}

async function writeOrders(orders) {
  await fs.writeFile(ordersPath, JSON.stringify(orders, null, 2));
}

async function readLienHe() {
  const data = await fs.readFile(lienHePath, "utf-8");
  return JSON.parse(data || "[]");
}

async function writeLienHe(messages) {
  await fs.writeFile(lienHePath, JSON.stringify(messages, null, 2));
}

module.exports = {
  readUsers,
  writeUsers,
  readCart,
  writeCart,
  readOrders,
  writeOrders,
  readLienHe,
  writeLienHe,
};
