
const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");


function updateEmptyMessage() {
    if (taskList.children.length === 0) {
        emptyMessage.classList.remove("hidden");
    } else {
        emptyMessage.classList.add("hidden");
    }
}

function addNewTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Silakan masukkan tugas terlebih dahulu!");
        return;
    }

    const li = document.createElement("li");

    li.className =
        "flex items-center justify-between gap-3 bg-slate-100 p-3 rounded-lg";

    const span = document.createElement("span");
    span.textContent = taskText;
    span.className = "break-words flex-1";

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Hapus";
    deleteButton.className =
        "bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 shrink-0";


    deleteButton.addEventListener("click", function () {
        li.remove();
        updateEmptyMessage();
    });

    li.appendChild(span);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();

    updateEmptyMessage();
}


addTask.addEventListener("click", addNewTask);


taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addNewTask();
    }
});


updateEmptyMessage();