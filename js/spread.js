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

// const numbers = [ 1,  2, 3, 4, 5];
// const spreadNumbers = [...numbers, 1000, ...numbers];

// console.log(spreadNumbers);

// -------------------------------------------- !

// spread - rest
// rest는 spread와 반대되는  개념이라고 볼 수 있다.
// spread는 퍼트리는 개념이라면 rest는 퍼져있는 것을 모아오는 역할
// const purpleCuteSlime = {
//     name : '슬라임',
//     attribute : 'cute',
//     color :'purple'
// }

// const { color, ...rest} = purpleCuteSlime;
// console.log(color);
// // rest 안에는 color를 제외한 값이 들어있다.
// console.log(rest);

// const numbers =  [0, 1, 2, 3, 4, 5, 6];
// const[ one, two, ...rest] = numbers;
// console.log(one, two);
// // 나머지 애들이 rest로 모이는 것이다.
// // 배열에서의 rest는 맨 마지막에  있어야 한다.
// console.log(rest);

// 함수파라미터에서의 rest
// function sum(a,b,c,d,e,f,g){
//     // return a + b + c +d + e + f + g;

// }
// console.log(sum(1,2,3,4,5,6,7));

// 하필  reduce를 쓰네..아
// 기본값 0으로 시작해서 current 안에  1234566~~ 이 주르륵 들어가게 된다.
// acc 가 누적되는 값
// current는 배열값
// function sum(...rest){
//     return rest.reduce((acc, current) => acc  + current, 0);
    
// }
// console.log(sum(1,2,3,4,5,6,7));

//함수의 인자에서 spread 를 사용하는 방법

// 함수에서 받아오는 값이 파라미터
// function subtract(x,y){
//     return  x - y ;
// }
// // 함수를 사용할 때 넣어주는 것이  인자

// const numbers = [1, 2];
// // const result = subtract(numbers[0],numbers[1]);
// const result = subtract(...numbers);
// console.log(result);

// const numbers = [1,2,3,4,5,6,7];
// console.log(sum(...numbers));

// 함수에 n 개의 숫자들이 파라미터로 주어졌을 때, 그 중 가장 큰 값을 알아내세요.
// acc 가 누적되는 값
// current는 배열값
function max(...numbers) {
    return numbers.reduce(
    // acc 이 current 보다 크면 결과값을 current 로 하고 (true)
    // 그렇지 않으면 acc 가 결과값 (false)
    // ? 조건연산자 
    // 조건연산자는 주어진 조건의 참과 거짓에 따라 값을 선택한다.
        (acc, current) => (current > acc ? current : acc), numbers[0]);
  }
  const result = max(1, 2, 3, 4, 10, 5, 6, 7);
  console.log(result);