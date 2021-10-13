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

// const array = [ 1, 2];
// // const one =  array[0];
// // const two =  array[1];
// // array에 담긴 값이 const 안의 배열에 적용된다.
// const[one, two] = array;
// // 기본값이 없는 경우 = 를 통해 할당해줄 수 있다.
// // const[one, two = 2] = array;

// console.log(one);
// console.log(two);

const deepObject ={
    state : {
        information :{
            name: 'velopert',
            languages : ['korean','engish','chinese']
        }
    },
    value : 5
}
// 위의 식에서 만약 name, languages,  value을 식 바깥으로 빼고싶다면?
// 두가지 방법이 있다.

// const { name, languages } = deepObject.state.information;
// const { value } = deepObject;
// // 내가 꺼낸 것을 출력하고 싶다면.
// // 특정키 이름으로 설정된 값이 있다면 value값 설정을 생략해도 된다.
// const extracted = {
//     name,
//     languages,
//     value
// };
// console.log(extracted);

// 또 다른 방법
// 비구조할당을 한번 실행하면서 값을 다 빼오는 방법

// state 안에 있는 information 안에 있는 name, languages를 빼올 것이다.
const  {
    state : {
        information : {
            name, languages
        }
    },
    value
} = deepObject;

const extracted = {
    name,
    languages,
    value
};
console.log(extracted);

// 위의 식의 다르게
// 허나 지저분해보임.  되도록 위의 식으로
// 상황에 따라 사용가능
// const  {
//     state : {
//         information : {
//             name, languages : [firstLang, secondLang]
//         }
//     },
//     value
// } = deepObject;

// const extracted = {
//     name,
//     firstLang, secondLang,
//     value
// };
// console.log(extracted);