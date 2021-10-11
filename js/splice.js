const numbers = [10, 20, 30, 40];
// const index = numbers.indexOf(10);
// console.log(index);

// splice 인덱스로부터 1개 지우겠다
// 기존의 배열을 건드림...  배열이 바뀌는
// const spliced = numbers.splice(index, 2);
// // 잘린 값
// console.log(spliced);
// 결과 값

// slice
// start는 어떤 인덱스부터 자를지, 엔드는어디까지 잘를 것인지.
// 기존의배열을 건들지 않음
// const sliced = numbers.slice(0, 2);
// console.log(sliced);
// console.log(numbers);

// shift는 기존 배열을 수정한다.
// shift는 맨 앞에 있는 원소를 하나씩 빼내는 것
// const value = numbers.shift();
// console.log(value);
// console.log(numbers);

// 맨 뒤 원소를 빼내는 것
// const value =  numbers.pop();
// console.log(value);
// console.log(numbers);

// 맨 앞에 배열을 추가하는 것
// numbers.unshift(5);
// console.log(numbers);

// numbers.unshift(0);
// const value = numbers.shift();
// console.log(numbers);

// pop과 push는 하나의 쌍
// numbers.push(50);
// const value = numbers.pop();
// console.log(value);
// console.log(numbers);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// // 배열을 합치는 것 concat
// // 기존의 배열을 건들리 ㅇ않음.
// // 그냥 합쳐주기만 함
// const concated = arr1.concat(arr2);
// // 스프레드 연산자
// // const concated = [...arr1, ...arr2];
// console.log(concated);

const array = [1, 2, 3, 4, 5];
console.log(array.join());
console.log(array.join(" "));
console.log(array.join(", "));
