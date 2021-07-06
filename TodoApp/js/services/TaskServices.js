function TaskServices() {
}

TaskServices.prototype.listTaskApi = function () {
    var promise = axios({
        url: "https://60e46c855bcbca001749e9a4.mockapi.io/activity",
        method: "GET"
    });
    return promise;
}

TaskServices.prototype.createTaskApi = function (task) {
    var promise = axios({
        url: "https://60e46c855bcbca001749e9a4.mockapi.io/activity",
        method: "POST",
        data: task
    });
    return promise;
}

TaskServices.prototype.editTaskApi = function (id) {
    var promise = axios({
        url: `https://60e46c855bcbca001749e9a4.mockapi.io/activity/${id}`,
        method: "GET"
    });
    return promise;
}

TaskServices.prototype.updateTaskApi = function (id, form) {
    var promise = axios({
        url: `https://60e46c855bcbca001749e9a4.mockapi.io/activity/${id}`,
        method: "PUT",
        data: form
    });
    return promise;
}


TaskServices.prototype.deleteTaskApi = function (id) {
    var promise = axios({
        url: `https://60e46c855bcbca001749e9a4.mockapi.io/activity/${id}`,
        method: "DELETE"
    });
    return promise;
}