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
