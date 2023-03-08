function Validation() {
  this.checkEmpty = function (valueInput, spanID, message) {
    if (valueInput == "") {
      document.getElementById(spanID).style.display = "block";
      document.getElementById(spanID).innerHTML = message;
      return false;
    }
    document.getElementById(spanID).style.display = "none";
    document.getElementById(spanID).innerHTML = "";
    return true;
  };
  this.checkID = function (valueInput, spanID, message, ArrayEmpl) {
    var isExist = false;
    isExist = ArrayEmpl.some(function (empl) {
      return valueInput === empl.account;
    });
    if (isExist) {
      document.getElementById(spanID).style.display = "block";
      document.getElementById(spanID).innerHTML = message;
      return false;
    } else {
      document.getElementById(spanID).style.display = "none";
      document.getElementById(spanID).innerHTML = "";
      return true;
    }
  };
  this.checkAccount = function (valueInput, spanID, message) {
    var pattern = /^[a-zA-Z0-9_-]{4,6}$/;
    if (valueInput.match(pattern)) {
      document.getElementById(spanID).style.display = "none";
      document.getElementById(spanID).innerHTML = "";
      return true;
    }
    document.getElementById(spanID).style.display = "block";
    document.getElementById(spanID).innerHTML = message;
    return false;
  };
  this.checkName = function (valueInput, spanID, message) {
    var pattern =
      /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
    if (valueInput.match(pattern)) {
      document.getElementById(spanID).style.display = "none";
      document.getElementById(spanID).innerHTML = "";
      return true;
    }
    document.getElementById(spanID).style.display = "block";
    document.getElementById(spanID).innerHTML = message;
    return false;
  };
  this.checkEmail = function (valueInput, spanID, message) {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (valueInput.match(pattern)) {
      document.getElementById(spanID).style.display = "none";
      document.getElementById(spanID).innerHTML = "";
      return true;
    }
    document.getElementById(spanID).style.display = "block";
    document.getElementById(spanID).innerHTML = message;
    return false;
  };
  this.checkPass = function (valueInput, spanID, message) {
    var pattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
    if (valueInput.match(pattern)) {
      document.getElementById(spanID).style.display = "none";
      document.getElementById(spanID).innerHTML = "";
      return true;
    }
    document.getElementById(spanID).style.display = "block";
    document.getElementById(spanID).innerHTML = message;
    return false;
  };
  this.checkDate = function (valueInput, spanID, message) {
    var pattern =
      /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
    if (valueInput.match(pattern)) {
      document.getElementById(spanID).style.display = "none";
      document.getElementById(spanID).innerHTML = "";
      return true;
    }
    document.getElementById(spanID).style.display = "block";
    document.getElementById(spanID).innerHTML = message;
    return false;
  };
  this.checkSalary = function (valueInput, spanID, message) {
    if (Number(valueInput) >= 1000000 && Number(valueInput) <= 20000000) {
      document.getElementById(spanID).style.display = "none";
      document.getElementById(spanID).innerHTML = "";
      return true;
    }
    document.getElementById(spanID).style.display = "block";
    document.getElementById(spanID).innerHTML = message;
    return false;
  };
  this.checkSelect = function (selectID, spanID, message) {
    var indexOption = document.getElementById(selectID).selectedIndex;
    if (indexOption != 0) {
      document.getElementById(spanID).style.display = "none";
      document.getElementById(spanID).innerHTML = "";
      return true;
    }
    document.getElementById(spanID).style.display = "block";
    document.getElementById(spanID).innerHTML = message;
    return false;
  };
  this.checkTime = function (valueInput, spanID, message) {
    if (Number(valueInput) >= 80 && Number(valueInput) <= 200) {
      document.getElementById(spanID).style.display = "none";
      document.getElementById(spanID).innerHTML = "";
      return true;
    }
    document.getElementById(spanID).style.display = "block";
    document.getElementById(spanID).innerHTML = message;
    return false;
  };
}