
// 1. 변수 선언
// var는 한번 선언된 변수를 다시 선언할 수 있다.
// var는 선언하기 전에 사용할 수 있다.
// var name = 'mike';
// console.log(name);
// var name = 'jane';
// console.log(name);


// 호이스팅 : 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것 처럼 행동

// const / let 은 temporal dead zone에 해당되며 할당을 하기 전에는 사용할 수 없다 / 코드를 예측가능하게 하고 잠재적인 버그를 막을 수 있다.

// 변수의 생성과정
//var
// 1. 선언 및 초기화 단계 > 초기화 : undifined를 할당 해주는 단계
// 2. 할당 단계
// var는 함수 스코프 > 함수 내에서 선언된 변수만 지역변수가 되는 것이다.
// var 같은 경우 > if나 for문 내에서 선언한 변수도 스코프 외에서 사용할 수 있다.
// 하지만 함수 내에서 선언될 경우 함수 외(밖)에서 사용할 수 없다.
// let
// 1. 선언단계
// 2. 초기화 단계
// 3. 할당 단계
// lef은 선언단계와 초기화 단계가 나뉘어져 있다. 
// 호이스팅 되면서 선언단계가 이뤄지지만 초기화 단계는 실제 코드에 도달할 때 발생하기 때문에 에러발생.

// const
// 1. 선언 + 초기화 + 할당
// 선언과 할당이 동시에 이루어져야 한다.
// var과 let은 선언을 하고 나중에 할당하는 것이 가능하다. > 값을 바꿀 수 있다.

// let 과 const는 블록 스코프 < 코드블록 내에서만 접근 가능하며 함수 내부에서 선언한 변수는 지역변수
// let / const 같은 경우 > if나 for문 내에서 선언한 변수는 스코프 외에서 사용할 수 없다.

// 2. 생성자 함수
// 객체 리터럴
// let user = {
//     name : 'mike',
//     age  : 30,
// }
function User(name, age){
    this.name = name;
    this.age = age;
    this.sayName = function(){
        console.log(this.name);
    }
}
let user1 = new User('mike', 30);
let user2 = new User('jane', 22);
let user3 = new User('tom', 17);

// 생성자 함수는 붕어빵 틀이나 와플기계와 동일 / 필요한 재료를 넣고 찍어내는 것 > 생성되는 객체들은 와플
// new 함수명();을 실행하는 순간 일일이 객체 리터럴을 만드는 것보다 더 빠르고 쉽게 사용할 수 있다. 

let user5 = new User('han', 40);
user5.sayName();

function Item(title, price){
    // this는 {};
    this.title = title;
    this.price = price;
    this.showPrice = function(){
        console.log(`가격은 ${price}원 입니다`);
    }
    // return this;
}

const item1 = new Item('인형', 3000);
const item2 = new Item('식빵', 2000);
const item3 = new Item('콜라', 1000);

console.log(item1, item2, item3);
item1.showPrice();

//commputed property
// let a = 'age';
// const user = {
//     name : 'mike',
//     [a] :  30 // age : 30 > 배열이 할당되는 것이 아니라 let a = 'age';값을 온전히 가져오는 것이라고 한다.
// }

// 객체에서 사용할 수 있는 methods
// Object.assign(); > 객체를 복제
// 아래의 코드엔 객체값이 저장되는 것이 아니라 참조값이 저장되는 것이기 때문에
// const cloneUser = assign; 을 할당하여도 객체 안의 참조값이 할당되지 않는다.
const assign = {
    name : 'mike',
}
// const newAssign = Object.assign({}, assign); // {} 안엔 초기값 / 만약에 {}안에 새로운 프로퍼티를 넣게 된다면 참조값이 추가되는 것
// Object.assign({ gender : 'male' }, assign); // < 새로운 property가 추가되는 것이다.
const info1 = {
    age : 30,
}
const info2 ={
    gender : 'male',
}
const newAssign = Object.assign(assign, info1, info2); 
console.log(newAssign);
// Object.keys(); // 키 배열 반환
const keys = {
    name : 'mike',
    age : 30,
    gender : 'male',
}
Object.keys(keys);
console.log(Object.keys(keys));

const value = {
    name : 'mike',
    age : 30,
    gender : 'male',
}
Object.values(value);
console.log(Object.values(value));

// 키 값 배열 반환
const entries = {
    name : 'mike',
    age : 30,
    gender : 'male',
}
Object.entries(entries);
console.log(Object.entries(entries));

// 키값 배열을 객체로
const fromentries = [
    ["name","mike"],
    ["age", 30],
    ["gender", 'male']
];
Object.fromEntries(fromentries);
console.log(Object.fromEntries(fromentries));
// Object.vlaues();
// Object.entries();
// Object.fromEntries();
