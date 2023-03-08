// Từ khóa function (ES5)

function Employee(
  account,
  fullName,
  email,
  pass,
  workDate,
  salary,
  position,
  workTime
) {
  //Thuộc tính
  this.account = account;
  this.fullName = fullName;
  this.email = email;
  this.pass = pass;
  this.workDate = workDate;
  this.salary = salary;
  this.position = position;
  this.workTime = workTime;
  this.grossSalary = 0;
  this.employeeRating = "";
  //Phương thức
  this.payRoll = function () {
    if(this.position == "Sếp"){
    this.grossSalary = this.salary * 3;
    }else if(this.position == "Nhân viên"){
      this.grossSalary = this.salary * 1;
    }else if(this.position == "Trưởng phòng"){
      this.grossSalary = this.salary * 2;
    }
  };
  this.typeEmployee = function () {
    if(Number(this.workTime) >= 192){
      this.employeeRating = "Nhân viên xuất sắc";
    }else if(Number(this.workTime) >= 176){
      this.employeeRating = "Nhân viên giỏi";
    }else if(Number(this.workTime) >= 160){
      this.employeeRating = "Nhân viên khá";
    }else if(Number(this.workTime) < 160){
      this.employeeRating = "Nhân viên trung bình";
    }
  };
}
