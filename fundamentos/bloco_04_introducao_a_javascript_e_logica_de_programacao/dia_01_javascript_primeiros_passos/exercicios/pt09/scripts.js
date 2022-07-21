const angle1 = 45;
const angle2 = 30;
const angle3 = 90;

let angleTotal = angle1 + angle2 + angle3;

if (angleTotal === 180) {
    console.log("true");
} else if (angleTotal > 180 || angleTotal < 180) {
    console.log("false");
} else {
    console.log("invalid input");
}