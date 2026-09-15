// weekly task goal
function weeklyGoal(userName, dailyGoal, bonusTasks) {
    let weeklyGoal = dailyGoal * 5;
    let totalGoal = weeklyGoal + bonusTasks;

    let output = `${userName}, your weekly task goal is ${totalGoal} tasks.`;

    document.getElementById("goal-message").innerHTML = output;
}
