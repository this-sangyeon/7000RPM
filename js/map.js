// map 함수
// 모든 함수를 변환하고 싶을 때 사용하는 함수
// 배열이 존재할 때 안에 있는 내용을 가지고 전체적으로 변환을 해주고 싶을 때 사용하는 함수


// 1번째 ex 숫자로 만들어진 배열
// const array = [1, 2, 3, 4, 5, 6, 7, 8];

//배열 안의 모든 숫자를 제곱해서 새로운 배열을 만들고 싶다.

// 비어있는 배열을 만들어준다.
// const sqaured = [];

// for(let i = 0; i < array.length; i++) {
//     sqaured.push(array[i] * array[i]);
// }

// array.forEach(n => {
//     sqaured.push(n * n);
// })

// const sqaure  = n => n * n;
// const sqaured = array.map(sqaure);

// const sqaured = array.map( n => n * n);

// console.log(sqaured);

// ------------------------------------------------------------- !

// 2번째 ex 객체로 만들어진 배열

// const items = [
//   {
//     id: 1,
//     text: "hello"
//   },
//   {
//     id: 2,
//     text: "bye"
//   }
// ];
 
// 객체 배열을 텍스트로 되어있는 문자열 배열로 바꾸고 싶다면 
// 아이템의 텍스트만 출력하고 싶을 때
// const texts = items.map(item => item.text);
// console.log(texts);

// 배열 중 원하는 항목이 어디에 있는지 알려주는 함수
// indexOf

// const superheros = ["아이언맨", "캡틴 아메리카", "토르", "닥터 스트레인지"];

//  토르가 몇번째에 있는지 알고 싶을 때
// const index = superheros.indexOf('토르');
// console.log(index);



// 객체로 이루어진 배열
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

// 내가  세번째 객체를 찾고 싶을 때.
// findIndex는 몇번째 객체인지 알려주는 것
// const index = todos.findIndex(todo => todo.id === 3);
// console.log(index);

// const todo =  todos.find(todo => todo.id === 3)
// find는 찾은 값 자체를 반환해주는 것
const todo =  todos.find(todo => todo.done === false);
console.log(todo);