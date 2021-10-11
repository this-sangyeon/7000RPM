// 배열이 주워졌을 때 그 배열 안에 있는 모든 값을 사용하여 어떤 값을 연산할 때 사용가능
// const numbers = [1, 2,3, 4, 5];

// n이 각 원소들을 나타낸다.
// let sum = 0;
// numbers.forEach(n => {
//     sum += n;
// });
// console.log(sum);


// 0은 초기 accumulator 
// accumulator 는 누적된 값을 의미한다.
// current는 배열 값
// const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

// index 각 원소가 몇번째 아이템인지 알려준다.
// array는 우리가 함수를 실행하고 있는 자기 자신을 나타낸다.
// const avg = numbers.reduce((accumulator, current, index, array) => {
// //현재 처리하고 있는 배열 원소가 맨 마지막 거라면
//  if(index === array.length - 1){
//     return (accumulator + current)  / array.length;
//  }
//  // 그 외의 경우
//  return accumulator + current;
// }, 0);
// // console.log(sum);
// console.log(avg);



const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];
const counts =alphabets.reduce((acc, current) => {
    // acc안에 current가 존재하고 있는지
if(acc[current]){
    // 만약 acc 안에 current가 존재하면 + 1 해준다.
    acc[current] += 1;
    // 아니라면
    }else{
        acc[current] = 1;
    }
    return acc;
}, {})
console.log(counts);