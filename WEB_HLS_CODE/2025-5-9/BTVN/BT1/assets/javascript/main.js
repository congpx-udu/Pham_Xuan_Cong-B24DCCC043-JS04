var tong = 0;
for (var i = 1; i <= 100; i++) {
  tong += i;
  if (tong > 100) {
    document.writeln(`${tong} ${i}`);
    break;
  }
}

var tong2 = 0;
j = 1;
while (tong2 <= 100) {
  tong2 += j;
  j++;
}

document.writeln(`${tong2} ${j}`);
