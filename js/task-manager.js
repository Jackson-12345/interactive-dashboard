
// weekly task goal
function weeklyGoal(userName, dailyGoal, bonusTasks) {
    let weeklyGoal = dailyGoal * 5;
    let totalGoal = weeklyGoal + bonusTasks;

    let output = `${userName}, your weekly task goal is ${totalGoal} tasks.`;

    document.getElementById("goal-message").innerHTML = output;
}

// click
document.getElementById("goal-btn").addEventListener("click", function(event) {
    event.preventDefault();

    let userName = document.getElementById("user-name").value;
    let dailyGoal = Number(document.getElementById("daily-goal").value);
    let bonusTasks = Number(document.getElementById("bonus-tasks").value);

    weeklyGoal(userName, dailyGoal, bonusTasks);
});

// weekly task manager
let myTasks = [];

const taskList = document.getElementById("task-list");
const userTasks = document.createElement("ul");

userTasks.id = "user-tasks";
taskList.appendChild(userTasks);

document.getElementById("task-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const taskInput = document.getElementById("task-name");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    myTasks.push(taskText);

    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    userTasks.appendChild(listItem);
    taskInput.value = "";
});
