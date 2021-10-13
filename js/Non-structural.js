// 비구조화 할당(구조분해)

// const object = { a : 1 , b: 2};
const object = { a : 1 };
// const { a, b } =  object;
// console.log(a);
// console.log(b);

// function print({a ,b}){
//     console.log(a);
//     console.log(b);
// }

// print(object);

// 위의 상황에서 b의 값이 없다고 가정할 때
// 
// function print({a ,b }){
//     console.log(a);
//     // console.log(b || 2); 

// }
// print(object);

// 함수에서만 사용할 수 있는 게 아니라 비구조할당으로 얼마든 사용할 수 있음
// 비구조 할당을 하게될 때 기본값을 설정하기 위해서 = 를 사용한다
// const { a, b = 2 } = object;
// console.log(a);
// console.log(b);

// // ---------------------------------------------- !

// // 비구조  할당을 하게될 때 이름을 바꾸는 상황
// const animal = {
//     name  : '멍멍이',
//     type: '개'
// };

// // const nickname = animal.name;
// // 위의 변수를 비구조할당으로 바꿔본다면
// // 비구조할당을 할 때는 이름을 바꿔줄  수도 있다.
// // {원래 있던 이름 : 새로 짓고 싶은 이름} 넣어서 밖으로 꺼내주면 된다.
// // 그렇다고 기존으 animal 의 값이 바뀌는 것은 아니다.
// const {name : nickname} = animal;
// console.log(nickname);
// console.log(animal);


// ---------------------------------------------- !

// 비구조할당은 배열에도 적용이 가능하다.

const array = [ 1, 2];
const one =  array[0];