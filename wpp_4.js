// Ques -> Write js program to calculate the days left before Christmas.

function daysUntilChristmas() {
    const today = new Date();
    const year = today.getFullYear();
    const christmas = new Date(year, 11, 25); 

    if (today > christmas) {
        christmas.setFullYear(year + 1);
    }
    const difference = christmas - today;
    const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return daysLeft;
}
console.log(`Days until Christmas: ${daysUntilChristmas()}`);
