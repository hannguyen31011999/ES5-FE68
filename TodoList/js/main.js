var listTask = new listTask();
var validator = new Validator();

getLocalStorage();

function getElement(id) {
    return document.getElementById(id);
}

function renderHTML() {
    getElement('todo').innerHTML = listTask.render(false);
    getElement('completed').innerHTML = listTask.render(true);
}

getElement('addItem').addEventListener('click', function (e) {
    var task = getElement('newTask').value;
    var isBool = false;
    isBool = validator.checkEmpty(task, 'notiInput', 'Activity đang trống')
        && validator.checkExist(listTask.list, task, 'notiInput', 'Activity đã tồn tại');
    if (!isBool) return;
    listTask.addTask(new Task(Math.floor(Math.random() * 100), task, false));
    setLocalStorage();
    renderHTML();
    getElement('newTask').value = "";
});


function updateActivity(id) {
    var index = listTask.findIndx(id);
    listTask.changeActive(index, listTask.list[index].isActive);
    setLocalStorage();
    renderHTML();
}

function deleteActivity(id) {
    var index = listTask.findIndx(id);
    listTask.deleteTask(index);
    setLocalStorage();
    renderHTML();
}


function setLocalStorage() {
    localStorage.setItem('list', JSON.stringify(listTask.list));
}

function getLocalStorage() {
    if (localStorage.getItem('list') !== null) {
        listTask.list = JSON.parse(localStorage.getItem('list'));
        renderHTML();
    }
}