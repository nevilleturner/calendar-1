document.addEventListener("DOMContentLoaded", function () {
    const now = new Date();
    const dayOfWeek = now.getDay(); // Day of the week (0: Sunday, 1: Monday, ...)
    const hour = now.getHours(); // Current time (0–23)

    // Store the day of the week as an array
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let timePeriod;

    // Determine the time period
    if (hour >= 0 && hour < 12) {
        timePeriod = "0-12"; // 0 to 12
    } else if (hour >= 12 && hour < 24) {
        timePeriod = "12-24"; // 12 to 24
    } else {
        timePeriod = null; // Not displayed time period
    }

    // Display the element that matches the day and time period
    if (timePeriod) {
        const contentId = `${days[dayOfWeek]}-${timePeriod}`;
        const contentElement = document.getElementById(contentId);
        if (contentElement) {
            contentElement.style.display = "block";
        }
    }
});
