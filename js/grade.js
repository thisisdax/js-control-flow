var testscore = 50;
var grade;
if (testscore > 90) {
  grade = "A";
} else if (testscore > 70) {
  grade = "B";
} else if (testscore > 60) {
  grade = "C";
} else if (testscore > 49) {
  grade = "D";
} else {
  grade = "F";
}

switch (grade) {
  case "A":
    console.log("You scored an A");
    break;
  case "B":
    console.log("You got a B");
    break;
  case "C":
    console.log("You scored a C");
    break;
  case "D":
    console.log("You scored a D");
    break;
  case "F":
    console.log("You didn't pass the test.");
    break;
  default:
    console.log("I'm not quite sure...");
}
