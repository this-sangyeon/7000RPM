const superheros = ["아이언맨", "캡틴 아메리카", "토르", "닥터 스트레인지"];

//배열 안의 모든 원소를 출력하고 싶을 때
for(let i = 0; i < superheros.length; i++){
  console.log(superheros[i]);
}

// 특정함수를 사용해서 위와 똑같은 작업을 해보자.

//foreach
function print(hero){
    console.log(hero);
}

superheros.forEach(print);

// 더 쉽고 간단하게 나타낼 수 있다.
superheros.forEach(function(hero) {
    console.log(hero);
});

// 화살표함수
superheros.forEach( hero => {
    console.log(hero);
});