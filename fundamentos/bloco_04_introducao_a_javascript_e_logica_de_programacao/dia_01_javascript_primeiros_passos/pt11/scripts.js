let gradePercentage = 75;

if (gradePercentage >= 90) {
    console.log('A');
} else if (gradePercentage >= 80) {
    console.log('B');
} else if (gradePercentage >= 70) {
    console.log('C');
} else if (gradePercentage >= 60) {
    console.log('D');
} else if (gradePercentage >= 50) {
    console.log('E');
} else if (gradePercentage < 50) {
    console.log('F');
} else if (gradePercentage < 0 || gradePercentage > 100) {
    console.log('Invalid Grade');
}