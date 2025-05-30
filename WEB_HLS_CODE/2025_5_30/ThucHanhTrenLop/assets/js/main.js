student = { id: "B24DCCC043", name: "Phạm Xuân Công", salary: 40000000 };
document.writeln(student.id + " " + student.name + " " + student.salary);

var student = new Object();
student.id = "B24DCCC037";
student.name = "Đặng Thị Bích";
student.salary = 4000;
document.writeln(student.id + " " + student.name + " " + student.salary);

function student(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;
}
nam = new student("B24DCCC043", "Phạm Xuân Công", 40000000);
document.writeln(nam.id + " " + nam.name + " " + nam.salary);

class Person {
  name;
  age;
  salary;
  hello() {
    document.write("Hello " + this.name);
  }

  changeSalary(newSalary) {
    this.salary = newSalary;
  }
}

a = new Person();
a.name = "Park Jung Hoan";
a.hello();
a.salary = 1;
document.write("<br>" + a.name + ": " + a.salary);
a.changeSalary(12);
document.write("<br>" + a.name + ": " + a.salary);
