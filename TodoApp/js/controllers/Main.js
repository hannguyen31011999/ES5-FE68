var taskServices = new TaskServices();
var validator = new Validator();
getListTask();

function getElement(id) {
    return document.getElementById(id);
}

function isLoading(isLoader) {
    return isLoader ? getElement('loader').style.display = "block" : getElement('loader').style.display = "none";
}

function getListTask() {
    isLoading(true);
    taskServices.listTaskApi().then(res => {
        var list = res.data;
        console.log(list);
        getElement('todo').innerHTML = renderHTML(list, false);
        getElement('completed').innerHTML = renderHTML(list, true);
        isLoading(false);
    }).catch(e => {

    });
}

getElement('addItem').addEventListener('click', function () {
    isLoading(true);
    taskServices.listTaskApi().then(res => {
        var list = res.data;
        var name = getElement('newTask').value;
        var isBool = false;
        isBool = validator.checkEmpty(name, 'notiInput', 'Activity đang bỏ trống')
            && validator.checkExist(list, name, 'notiInput', 'Activity đã tồn tại');
        if (!isBool) {
            isLoading(false);
            return;
        }
        taskServices.createTaskApi(new Task(name, false)).then(res => {
            getListTask();
            getElement('newTask').value = "";
            isLoading(false);
        }).catch(e => {

        })
    }).catch(e => {

    });
});

function updateActiveTask(id) {
    var alertConfirm = confirm("Bạn có muốn cập nhật trạng thái activity này không?");
    isLoading(true);
    if (alertConfirm) {
        taskServices.editTaskApi(id).then(res => {
            if (res.data.isActive) {
                res.data.isActive = false;
            } else {
                res.data.isActive = true;
            }
            taskServices.updateTaskApi(id, res.data).then(res => {
                getListTask();
                isLoading(false);
            }).catch(e => {

            })
        }).catch(e => { })
    }
}

function deleteTask(id) {
    var alertConfirm = confirm("Bạn có muốn xóa activity này không?");
    isLoading(true);
    if (alertConfirm) {
        taskServices.deleteTaskApi(id).then(res => {
            getListTask();
            isLoading(false);
        }).catch(e => { });
    }
}

function renderHTML(list, isBool) {
    var str = '';
    list.forEach(item => {
        if (item.isActive === isBool) {
            str += `
                <li>
                    <span>${item.activity_name}</span>
                    <div class="buttons">
                        <button onclick="deleteTask(${item.id})"><i class="fa fa-trash-alt"></i></button>
                        <button onclick="updateActiveTask(${item.id})"><i class="fa fa-check-circle"></i></button>
                    </div>
                </li>
            `;
        }
    });
    return str;
}