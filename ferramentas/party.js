function calculateAverage() {
    let totalLevels = 0;
    let count = 0;

    const levels = document.querySelectorAll('input[name="characterLevel"]');

    levels.forEach(level => {
        const levelValue = parseInt(level.value);
        if (!isNaN(levelValue) && levelValue > 0) {
            totalLevels += levelValue;
            count++;
        }
    });

    const average = count > 0 ? totalLevels / count : 0;
    const roundedAverage = Math.round(average);

    document.getElementById("averageLevel").textContent = roundedAverage;
}
