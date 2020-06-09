/*
 * Array Helper Methods
 */

const colors = ["red", "blue", "green"];

/* I. for */
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// 1. for...of
for (let color of colors) {
  console.log(color);
}

// 2. forEach 헬퍼 메서드 (return 값이 없음)
colors.forEach(function (color) {
  console.log(color);
});

/* II. filter() */
const numbers = [-20, -15, 5, 10];

const positiveNumbers1 = [];
numbers.forEach((number) => {
  if (number > 0) {
    positiveNumbers1.push(number);
  }
});
console.log(positiveNumbers1);

const positiveNumbers2 = numbers.filter((num) => num > 0);

/* III. map() */
// - 순회를 하며, 내부의 모든 요소에 동일한 작업을 해야하는 경우
// - 숫자 배열 <-> 글자배열, 동일한 데이터를 적용해야하는 경우
inputs = ["1", "5", "3", "6"];
const numberInputs = inputs.map((input) => (input *= 1));

/* IV. reduce() */
// - 순회를 하며, 내부의 모든 요소를 하나의 값으로 환원해야하는 경우
numberInputs.reduce((acc, cur) => acc + cur, 0);
