function listTask() {
    this.list = [];
    this.render = function (isBool) {
        var temp = ''
        this.list.forEach(item => {
            if (isBool === item.isActive) {
                temp += `
                    <li>
                    <span>${item.task}</span>
                    <div class="buttons">
                        <button onclick="deleteActivity(${item.id})">
                        <i class="fa fa-trash-alt"></i>
                        </button>
                        <button onclick="updateActivity(${item.id})">
                        <i class="fa fa-check-circle"></i>
                        </button>
                    </div>
                    </li>
                `;
            }
        });
        return temp;
    }
}

listTask.prototype.addTask = function (item) {
    this.list.push(item);
}

listTask.prototype.findIndx = function (id) {
    return this.list.findIndex(item => {
        return item.id === id;
    });
}

listTask.prototype.changeActive = function (index, active) {
    if (active) {
        this.list[index].isActive = false;
        return;
    }
    this.list[index].isActive = true;
}

listTask.prototype.deleteTask = function (index) {
    this.list.splice(index, 1);
}