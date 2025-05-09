alert("hello js");
confirm("are you ok");
console.log("udu");
prompt("bạn bao nhiêu tuổi");

var fullName = "Phạm Xuân Công";
var age = 19;

if (age > 20) {
  console.log(`${fullName}" đã đủ tuổi lấy vợ"`);
} else {
  console.log(`${fullName}" chưa đủ tuổi lấy vợ"`);
}

var number = 20;
if (number === 10) {
  console.log("true");
} else {
  console.log("false");
}

for (var i = 0; i < 4; i++) {
  console.log(`học ptit ${i} năm`);
}

switch (age) {
  case 15:
    console.log("tuổi vị thành niên");
    break;
  case 18:
    console.log("tuổi trưởng thành");
    break;
  case 20:
    console.log("tuổi lấy vợ");
  default:
    console.log("không biết");
}
