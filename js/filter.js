//filter
// filter는 특정 배열에서 원하는 것들만 뽑아낼 수 있다.
// 특정 배열의 원소를 찾아서 그 원소들로 배열을 만드는 것

const todos = [
    {
      id: 1,
      text: "자바스크립트 입문",
      done: true
    },
    {
      id: 2,
      text: "함수 배우기",
      done: true
    },
    {
      id: 3,
      text: "객체와 배열 배우기",
      done: true
    },
    {
      id: 4,
      text: "배열 내장함수 배우기",
      done: false
    }
  ];
// 컴퓨터 프로그래밍에서 매개변수(영어: parameter 파라미터[*])란 변수의 특별한 한 종류로서, 함수 등과 같은 서브루틴[1]의 인풋으로 제공되는 여러 데이터 중 하나를 가리키기 위해 사용된다.
//   const tasksNotDone = todos.filter(todo => todo.done === false);

// 더 쉽게 나타낼 수 있는 방법
//false
//const tasksNotDone = todos.filter(todo => !todo.done);
//true
const tasksNotDone = todos.filter(todo => todo.done);
console.log(tasksNotDone);
