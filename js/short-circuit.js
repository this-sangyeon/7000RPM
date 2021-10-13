//and
// true && true // true
// true && false // false
// //or
// true || false //true
// false || true // true

// const dog = {
//     name: '멍멍이'
// };

// function getName(animal){
//     if(animal){
//         return animal.name;
//     }
//     return undefined;
// }

// function getName(animal){
//     return animal && animal.name;
// }
// const name = getName(dog);
// console.log(name);

// // console에는 'hello'가 출력된다
// // 출력되는 이유는 앞이 true라면 연산결과는 뒷부분이 된다.
// console.log(true && 'hello');
// // console에는 false가 출력된다
// // 출력되는 이유는 앞이 false라면 연산결과는 앞부분이 된다.
// console.log(false&&'hello');

// // 그러니까 앞에 있는 값이 truthy한 값이라면 결과물은 뒷부분에 있는 값
// console.log('helle'&& 'bye');


// console.log(null &&'hello');
// //앞ㅇㅇ이 false한 값이라면 뒤가 뭐든 false
// console.log(undefined &&'hello');
// console.log(''&& 'hello');
// console.log(0 && 'hello');
// console.log(1&& 'hello');
// console.log(1 && 1);

// d요약하자면 앞의 값이 true라면 뒤의 값이 출력되고
// 앞의 값이 false라면 앞의 값을 출력하는 것이다.

// 특정값이 유요할 때만 특정 값을 조회해야 할 상황이 생길 때 사용가능하다.

// const object = { name : 'asdf'};
// const name = object  && object.name;
// console.log(name);

// or연산자

// const namelessDog = {
//     name: '',
// };
// function getName(animal){
//     const name = animal && animal.name;
//     // if(!name){
//     //     return '이름이 없는 동물입니다.';
//     // }
//     // return name;

//     // 더 쉽게
//     return name|| '이름이 없는 동물입니다.';
// }
// const name = getName(namelessDog);
// console.log(name);

// 왜 작동하는지
// 다 뒤의 값이 출력되고 있다.
// 다 false하지 않은 값이 출력되고 있다.
console.log(false ||'hello');
console.log(''|| '이름없다');
console.log(null || '널이다');
console.log(undefined || 'defined 되지 않았다.');
console.log(0 || '제로다');


// 앞의 값이 true일 경우
// 뒤의 값이 뭐든 
console.log(1 || '음?');
console.log(ture || '여기 안본다');
console.log('와아'||'여기 안봐요');
console.log([]||'노노!!');