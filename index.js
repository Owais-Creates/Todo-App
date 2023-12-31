const input = document.getElementById("input-box");
const taskContainer = document.getElementById("task-list");

function addTask() {

    if (input.value === "") {
        alert("Please write the task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        taskContainer.appendChild(li);
        let cross = document.createElement("span");
        cross.innerHTML = "\u00d7";
        li.appendChild(cross);
    }
    input.value = "";
    saveData();

}

taskContainer.addEventListener("click", function (e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked")
        saveData();

    } else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
})

const saveData = () => {
    localStorage.setItem("data", taskContainer.innerHTML);
}

const showData = () => {
    taskContainer.innerHTML = localStorage.getItem("data");
}

showData();