
// weekly task goal
function weeklyGoal(userName, dailyGoal, bonusTasks) {
    let weeklyGoal = dailyGoal * 5;
    let totalGoal = weeklyGoal + bonusTasks;

    let output = `${userName}, your weekly task goal is ${totalGoal} tasks.`;

    document.getElementById("goal-message").textContent = output;
}

// calculate weekly goal
document.getElementById("goal-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let userName = document.getElementById("user-name").value;
    let dailyGoal = Number(document.getElementById("daily-goal").value);
    let bonusTasks = Number(document.getElementById("bonus-tasks").value);

    weeklyGoal(userName, dailyGoal, bonusTasks);
});

// task manager
let tasks = [];
let nextTaskId = 1;

const userTasks = document.getElementById("user-tasks");

// log the task list after changes
function logTasks() {
    console.log(JSON.stringify(tasks));
}

// add a new task
function addTask(name, priority, isImportant) {
    const task = {
        id: nextTaskId++,
        name: name,
        priority: priority,
        isImportant: isImportant,
        isCompleted: false
    };

    tasks.push(task);
    displayTasks();
    logTasks();
}

// display tasks using DOM nodes
function displayTasks() {
    userTasks.replaceChildren();

    tasks.forEach(function(task) {
        const listItem = document.createElement("li");
        const taskName = document.createElement("span");

        taskName.textContent = task.name + " (" + task.priority + ")";

        // style tasks based on priority
        if (task.priority === "High") {
            listItem.style.borderLeft = "5px solid orange";
        } else if (task.priority === "Medium") {
            listItem.style.borderLeft = "5px solid blue";
        } else {
            listItem.style.borderLeft = "5px solid green";
        }

        // important tasks are red
        if (task.isImportant) {
            taskName.style.color = "red";
            taskName.style.fontWeight = "bold";
        }

        // completed tasks have a strikethrough
        if (task.isCompleted) {
            taskName.style.textDecoration = "line-through";
        }

        listItem.style.padding = "10px";
        listItem.style.marginBottom = "8px";
        listItem.style.backgroundColor = "#f5f5f5";
        listItem.style.borderRadius = "5px";

        // complete task button
        const completeButton = document.createElement("button");
        completeButton.textContent = task.isCompleted ? "Undo" : "Complete";
        completeButton.type = "button";

        completeButton.addEventListener("click", function() {
            task.isCompleted = !task.isCompleted;
            displayTasks();
            logTasks();
        });

        // edit task button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.type = "button";

        editButton.addEventListener("click", function() {
            const newName = prompt("Edit task:", task.name);

            if (newName !== null && newName.trim() !== "") {
                task.name = newName.trim();
                displayTasks();
                logTasks();
            }
        });

        // delete individual task button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.type = "button";

        deleteButton.addEventListener("click", function() {
            tasks = tasks.filter(function(item) {
                return item.id !== task.id;
            });

            displayTasks();
            logTasks();
        });

        completeButton.style.marginLeft = "10px";
        editButton.style.marginLeft = "5px";
        deleteButton.style.marginLeft = "5px";

        listItem.appendChild(taskName);
        listItem.appendChild(completeButton);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        userTasks.appendChild(listItem);
    });
}

// task form submission
document.getElementById("task-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const taskInput = document.getElementById("task-name");
    const priority = document.getElementById("task-priority").value;
    const isImportant = document.getElementById("task-important").checked;
    const taskName = taskInput.value.trim();

    if (taskName === "") {
        return;
    }

    addTask(taskName, priority, isImportant);

    taskInput.value = "";
    document.getElementById("task-important").checked = false;
});

// delete the list
document.getElementById("delete-list").addEventListener("click", function() {
    tasks = [];
    displayTasks();
    logTasks();
});
