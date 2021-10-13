// function print(person){
//     console.log(person.name);
// }

// const person = {
//     name:'John'
// };

// print(person);

// function print(person){
//     if(person === undefined){
//         return;
//     }
//   console.log(person.name);
// }

// const person =null;

// print(person);

// function print(person){
//     // 널체킹
//     // 하지만 언디파인드와 함께 적어주는 것은 별로다.
//     if(person === undefined || person === null){
//         return;
//     }
//   console.log(person.name);
// }

// const person =null;

// print(person);

// function print(person){
//     // 널체킹
//     // 하지만 언디파인드와 함께 적어주는 것은 별로다.
//     if(!person){
//         return;
//     }
//   console.log(person.name);
// }

// const person =null;

// print(person);

// !은 값을 반전해주는 것
// undefined 나 null은 falsy한 값이기 때문에 !를 붙이는 경우 true 출력
// console.log(!undefined);
// console.log(!null);
// console.log(!0);
// console.log(!'');
// console.log(!NaN);
// console.log(!false);

// 위를 제외하고는 다 truthy한 값이다
// console.log(!3);
// console.log(!'hello');
// console.log(!['array']);
// console.log(![]);
// console.log(!{});

//느낌표를 붙이지 안하도 사용할 수 있다

// const value = { a : 1 };
// // value값을 null 로 바꾼다면 출력도 되지 않는다.

// if(value){
//     console.log('value가 truthy 하네요.');
// }
//
const value = 4;
// const truthy = value ? true : flase;
const truthy = !!value
console.log(truthy);