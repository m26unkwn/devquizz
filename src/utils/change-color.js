export function changeColor(title, selectedAnswer, answer) {
  if (selectedAnswer.length > 0) {
    if (answer === selectedAnswer && selectedAnswer === title) {
      return "right-answer";
    }
    if (answer !== selectedAnswer && selectedAnswer === title) {
      return "wrong-answer";
    } else if (title === answer) {
      return "right-answer";
    }
  }
  return "";
}
