function TaskServices(url = "https://60e46eea5bcbca001749e9b7.mockapi.io/activity") {
    this.linkApi = url;
}

TaskServices.prototype.listTaskApi = function () {
    var promise = axios({
        url: this.linkApi,
        method: "GET"
    });
    return promise;
}

TaskServices.prototype.createTaskApi = function (task) {
    var promise = axios({
        url: this.linkApi,
        method: "POST",
        data: task
    });
    return promise;
}

TaskServices.prototype.editTaskApi = function (id) {
    var promise = axios({
        url: `${this.linkApi}/${id}`,
        method: "GET"
    });
    return promise;
}

TaskServices.prototype.updateTaskApi = function (id, form) {
    var promise = axios({
        url: `${this.linkApi}/${id}`,
        method: "PUT",
        data: form
    });
    return promise;
}


TaskServices.prototype.deleteTaskApi = function (id) {
    var promise = axios({
        url: `${this.linkApi}/${id}`,
        method: "DELETE"
    });
    return promise;
}