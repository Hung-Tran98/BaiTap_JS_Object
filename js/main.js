var listEmpl = new listEmployee();
var validation = new Validation();
function showTable(array) {
  var content = "";
  array.map(function (empl, index) {
    var trELE = `<tr>
                <td>${empl.account}</td>
                <td>${empl.fullName}</td>
                <td>${empl.email}</td>
                <td>${empl.workDate}</td>
                <td>${empl.position}</td>
                <td>${empl.grossSalary}</td>
                <td>${empl.employeeRating}</td>
                <td>    
                    <button class="btn btn-danger" onclick="deleteEmployee('${empl.account}')">Xóa</button>
                    <button class="btn btn-primary" data-target="#myModal" data-toggle="modal" onclick="showDentail('${empl.account}')">Xem</button>
                </td>
        </tr>
        `;
    content += trELE;
  });
  getELE("tableDanhSach").innerHTML = content;
}
function getELE(id) {
  return document.getElementById(id);
}
function setLocalStorage(array) {
  localStorage.setItem("ListEmployee", JSON.stringify(array));
}
function getLocalStorage() {
  if (localStorage.getItem("ListEmployee") != null) {
    listEmpl.ArrayEmpl = JSON.parse(localStorage.getItem("ListEmployee"));
    showTable(listEmpl.ArrayEmpl);
  }
}
getLocalStorage();
function addEmployee() {
  var account = getELE("tknv").value;
  var fullName = getELE("name").value;
  var email = getELE("email").value;
  var pass = getELE("password").value;
  var workDate = getELE("datepicker").value;
  var salary = getELE("luongCB").value;
  var position = getELE("chucvu").value;
  var workTime = getELE("gioLam").value;
  var isValid = true;
  isValid &=
    validation.checkEmpty(account, "tbTKNV", "Tài khoản không để trống!") &&
    validation.checkAccount(
      account,
      "tbTKNV",
      "Tài khoản không nhiều hơn 4-6 ký số!"
    ) &&
    validation.checkID(
      account,
      "tbTKNV",
      "Tài khoản không được trùng",
      listEmpl.ArrayEmpl
    );
  isValid &=
    validation.checkEmpty(fullName, "tbTen", "Tên không để trống") &&
    validation.checkName(fullName, "tbTen", "Tên phải là chữ");
  isValid &=
    validation.checkEmpty(email, "tbEmail", "Email không để trống") &&
    validation.checkEmail(email, "tbEmail", "Email phải đúng định dạng");
  isValid &=
    validation.checkEmpty(pass, "tbMatKhau", "Mật khẩu không để trống") &&
    validation.checkPass(pass, "tbMatKhau", "Mật khẩu phải đúng định dạng");
  isValid &=
    validation.checkEmpty(workDate, "tbNgay", "Ngày không để trống") &&
    validation.checkDate(workDate, "tbNgay", "Ngày phải đúng định dạng");
  isValid &=
    validation.checkEmpty(salary, "tbLuongCB", "Lương không để trống") &&
    validation.checkSalary(salary, "tbLuongCB", "1 triệu <= Lương <= 20 triệu");
  isValid &= validation.checkSelect(
    "chucvu",
    "tbChucVu",
    "Chức vụ chưa hợp lệ"
  );
  isValid &=
    validation.checkEmpty(workTime, "tbGiolam", "Thời gian không để trống") &&
    validation.checkTime(
      workTime,
      "tbGiolam",
      "80 giờ <= Thời gian <= 200 giờ"
    );
  if (isValid) {
    var empl = new Employee(
      account,
      fullName,
      email,
      pass,
      workDate,
      salary,
      position,
      workTime
    );
    empl.payRoll();
    empl.typeEmployee();
    listEmpl.addEmployee(empl);
    showTable(listEmpl.ArrayEmpl);
    setLocalStorage(listEmpl.ArrayEmpl);
  }
}
getELE("btnThemNV").onclick = addEmployee;
function deleteEmployee(account) {
  listEmpl.deleteEmpl(account);
  setLocalStorage(listEmpl.ArrayEmpl);
  getLocalStorage();
}
function showDentail(account) {
  var index = listEmpl.findIndexEmpl(account);
  if (index != -1) {
    getELE("tknv").value = listEmpl.ArrayEmpl[index].account;
    getELE("tknv").disabled = true;
    getELE("name").value = listEmpl.ArrayEmpl[index].fullName;
    getELE("email").value = listEmpl.ArrayEmpl[index].email;
    getELE("password").value = listEmpl.ArrayEmpl[index].pass;
    getELE("datepicker").value = listEmpl.ArrayEmpl[index].workDate;
    getELE("luongCB").value = listEmpl.ArrayEmpl[index].salary;
    getELE("chucvu").value = listEmpl.ArrayEmpl[index].position;
    getELE("gioLam").value = listEmpl.ArrayEmpl[index].workTime;
    clear("tbTKNV","tbTen","tbEmail","tbMatKhau","tbNgay","tbLuongCB","tbChucVu","tbGiolam");
  }
}
function updateEmployee() {
  var account = getELE("tknv").value;
  var fullName = getELE("name").value;
  var email = getELE("email").value;
  var pass = getELE("password").value;
  var workDate = getELE("datepicker").value;
  var salary = getELE("luongCB").value;
  var position = getELE("chucvu").value;
  var workTime = getELE("gioLam").value;
  var isValid = true;
  isValid &=
    validation.checkEmpty(account, "tbTKNV", "Tài khoản không để trống!") &&
    validation.checkAccount(
      account,
      "tbTKNV",
      "Tài khoản không nhiều hơn 4-6 ký số!"
    );
  isValid &=
    validation.checkEmpty(fullName, "tbTen", "Tên không để trống") &&
    validation.checkName(fullName, "tbTen", "Tên phải là chữ");
  isValid &=
    validation.checkEmpty(email, "tbEmail", "Email không để trống") &&
    validation.checkEmail(email, "tbEmail", "Email phải đúng định dạng");
  isValid &=
    validation.checkEmpty(pass, "tbMatKhau", "Mật khẩu không để trống") &&
    validation.checkPass(pass, "tbMatKhau", "Mật khẩu phải đúng định dạng");
  isValid &=
    validation.checkEmpty(workDate, "tbNgay", "Ngày không để trống") &&
    validation.checkDate(workDate, "tbNgay", "Ngày phải đúng định dạng");
  isValid &=
    validation.checkEmpty(salary, "tbLuongCB", "Lương không để trống") &&
    validation.checkSalary(salary, "tbLuongCB", "1 triệu <= Lương <= 20 triệu");
  isValid &= validation.checkSelect(
    "chucvu",
    "tbChucVu",
    "Chức vụ chưa hợp lệ"
  );
  isValid &=
    validation.checkEmpty(workTime, "tbGiolam", "Thời gian không để trống") &&
    validation.checkTime(
      workTime,
      "tbGiolam",
      "80 giờ <= Thời gian <= 200 giờ"
    );
  if (isValid) {
    var empl = new Employee(
      account,
      fullName,
      email,
      pass,
      workDate,
      salary,
      position,
      workTime
    );
    empl.payRoll();
    empl.typeEmployee();
    listEmpl.updateEmpl(empl);
    setLocalStorage(listEmpl.ArrayEmpl);
    getLocalStorage();
  }
}
getELE("btnCapNhat").onclick = updateEmployee;
function search() {
  var keyword = getELE("searchName").value;
  var arrayResult = listEmpl.searchName(keyword);
  showTable(arrayResult);
}
getELE("btnTimNV").onclick = search;
getELE("searchName").onkeyup = function () {
  var keyword = getELE("searchName").value;
  var arrayResult = listEmpl.searchName(keyword);
  showTable(arrayResult);
};
getELE("btnThem").onclick = function () {
  getELE("tknv").value = "";
  getELE("tknv").disabled = false;
  getELE("name").value = "";
  getELE("email").value = "";
  getELE("password").value = "";
  getELE("datepicker").value = "";
  getELE("luongCB").value = 0;
  // getELE("chucvu").defaultSelected;
  getELE("chucvu").selectedIndex = 0;
  getELE("gioLam").value = 0;
  clear("tbTKNV","tbTen","tbEmail","tbMatKhau","tbNgay","tbLuongCB","tbChucVu","tbGiolam");
};
function clear(tbTKNV,tbTen,tbEmail,tbMatKhau,tbNgay,tbLuongCB,tbChucVu,tbGiolam){
  getELE(tbTKNV).innerHTML = "";
  getELE(tbTen).innerHTML = "";
  getELE(tbEmail).innerHTML = "";
  getELE(tbMatKhau).innerHTML = "";
  getELE(tbNgay).innerHTML = "";
  getELE(tbLuongCB).innerHTML = "";
  getELE(tbChucVu).innerHTML = "";
  getELE(tbGiolam).innerHTML = "";
}
