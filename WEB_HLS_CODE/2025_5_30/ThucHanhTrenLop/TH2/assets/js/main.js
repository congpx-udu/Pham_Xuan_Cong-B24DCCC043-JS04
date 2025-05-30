class Person {
  name;
  age;
  salary;
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    document.writeln("Hihi");
  }
  hello() {
    document.writeln("Hello " + this.name);
  }
  tuoi() {
    document.writeln(`<br> Tuổi của ${this.name} là: ${this.age}`);
  }
  luong() {
    document.writeln(
      `<br> Mức lương mong muốn của ${this.name} là: ${this.salary}`
    );
  }
}

xuanCong = new Person("Xuân Công", 19, "2000$");
xuanCong.hello();
xuanCong.tuoi();
xuanCong.luong();
