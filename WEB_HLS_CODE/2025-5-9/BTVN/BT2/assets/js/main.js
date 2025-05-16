var n;

do {
  n = parseInt(prompt("Nhập số nguyên n (n > 0):"));
} while (isNaN(n) || n <= 0);

if (n % 2 === 0) {
  document.writeln(`${n} là số chẵn`);
} else {
  document.writeln(`${n} là số lẻ`);
}
