// script.js
function addTask() {
    var taskInput = document.getElementById("taskInput").value;
    if (taskInput === '') {
        alert("Por favor, insira uma tarefa!");
        return;
    }
    
    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    var textNode = document.createTextNode(taskInput);
    li.appendChild(textNode);
    taskList.appendChild(li);
    
    document.getElementById("taskInput").value = '';
}
