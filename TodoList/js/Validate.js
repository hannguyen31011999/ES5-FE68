function Validator() {
    this.checkEmpty = function (keyword, id, message) {
        if (keyword.length < 1) {
            getElement(id).style.display = "block";
            getElement(id).innerHTML = message;
            return false;
        }
        getElement(id).style.display = "none";
        getElement(id).innerHTML = "";
        return true;
    }
    this.checkExist = function (list, keyword, id, message) {
        var bool = list.findIndex(item => {
            return (item.task.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
        });
        if (bool !== -1) {
            getElement(id).style.display = "block";
            getElement(id).innerHTML = message;
            return false;
        }
        getElement(id).style.display = "none";
        getElement(id).innerHTML = "";
        return true;
    }
}