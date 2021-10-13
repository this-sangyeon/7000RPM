// spread 펼치다 퍼트리다

// const slime = {
//     name :'슬라임'
// }
// const cuteSlime = {
//     name : '슬라임',
//     attribute : 'cute'
// }
// // const purpleCuteSlime = {
// //     name : '슬라임',
// //     attribute : 'cute',
// //     color :'purple'
// // }

// // 만들었던 객체를 참고해서 새로운 객체를 만들고 싶을 때 spread를 사용하면 된다.
// // spread는 ...을 사용
// const purpleCuteSlime  = {
//     ...cuteSlime,
//     color :'purple'
// }

// const greenCuteSlime  = {
//     // color :'green' 위에다가 적어두면 덮어쓰기 전이기 때문에 기존에 있던 속성이 들어옴
//     ...purpleCuteSlime,
//     color :'green'
// }


// console.log(slime);
// console.log(cuteSlime);
// console.log(purpleCuteSlime);
// console.log(greenCuteSlime);

// console.log(slime ===  cuteSlime); //false


// -------------------------------------------- !

// 배열에서도 사용이 가능하다.
// const animals = ['개', '고양이','참새'];
// // animals 안에 있는 배열을 아래 배열에 넣어주고 싶을 때.
// const anotherAnimals = [...animals, ' 비둘기'];
// console.log(animals);
// console.log(anotherAnimals);

// spread를 여러번 사용할 수 있다.

const numbers = [ 1,  2, 3, 4, 5];
const spreadNumbers = [...numbers, 1000, ...numbers];

console.log(spreadNumbers);