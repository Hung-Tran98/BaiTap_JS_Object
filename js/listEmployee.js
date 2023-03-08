function listEmployee() {
    this.ArrayEmpl = [];
    this.addEmployee = function(empl){
        this.ArrayEmpl.push(empl);
    }
    this.findIndexEmpl = function(account) {
        var indexFind = -1;
        indexFind = this.ArrayEmpl.findIndex(function(empl){
            //?return điều kiện tìm kiếm
            return empl.account == account;
        })
        return indexFind;
    }
    this.deleteEmpl = function(account) {
        var index = this.findIndexEmpl(account);
        if(index != -1){
            this.ArrayEmpl.splice(index, 1);
        }
    }
    this.updateEmpl = function(empl) {
        //Tìm index
        var index = this.findIndexEmpl(empl.account);
        if(index != -1){
            //Tìm thấy
            //Thay đổi giá trị phần tử theo index
            this.ArrayEmpl[index] = empl;
        }
    }
}

listEmployee.prototype.searchName = function(keyword){
    var arrayResult = [];
    //!trim(): xóa khoảng trắng trước và sau đoạn chữ
    // keyword = keyword.trim();
    var keywordLowerCase = keyword.toLowerCase();

    keywordLowerCase = keywordLowerCase.replace(/\s/g, "");

    this.ArrayEmpl.map(function(empl){
        var nameLowerCase = empl.employeeRating.toLowerCase().replace(/\s/g, "");
        // keywordLowerCase.replace(/\s/g, "");


        if(nameLowerCase.indexOf(keywordLowerCase) >-1){
            //Tìm được sv theo tên
            arrayResult.push(empl);
        }
    });

    return arrayResult;
}