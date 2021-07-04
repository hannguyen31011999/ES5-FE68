function Validator() {

}

Validator.prototype.checkEmpty = function (keyword, id, message) {
    if (!keyword.length > 0) {
        document.getElementById(id).style.display = "block";
        document.getElementById(id).innerHTML = message;
        return false;
    }
    document.getElementById(id).style.display = "none";
    document.getElementById(id).innerHTML = "";
    return true;
}

Validator.prototype.checkExist = function (list, keyword, id, message) {
    var isBool = list.findIndex(item => {
        return (item.activity_name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
    })
    if (isBool !== -1) {
        document.getElementById(id).style.display = "block";
        document.getElementById(id).innerHTML = message;
        return false;
    }
    document.getElementById(id).style.display = "none";
    document.getElementById(id).innerHTML = "";
    return true;
}