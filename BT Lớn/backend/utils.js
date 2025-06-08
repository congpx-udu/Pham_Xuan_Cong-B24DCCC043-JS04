const fs = require("fs").promises;
const path = require("path");

const USERS_PATH = path.join(__dirname, "users.json");

async function readUsers() {
  try {
    const data = await fs.readFile(USERS_PATH, "utf8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

async function writeUsers(users) {
  try {
    await fs.writeFile(USERS_PATH, JSON.stringify(users, null, 2));
  } catch (err) {
    console.error("Lỗi ghi file:", err);
  }
}

module.exports = {
  readUsers,
  writeUsers,
};
