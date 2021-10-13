// function calculateCircleArea(r){
function calculateCircleArea(r = 1){
    // 아래 area에 값을 넣어주지 않았을 때 r의 기본 값은 1로 지정된다.
    // const radius = r ||  1;
    return Math.PI * r * r;
    // //만약 r이 주어지지 않았다면 기본값은 1로
    // return Math.PI * radius * radius;

    // 다른 방법으로 기본값을정해줄 수 있다.
}

// 화살표함수로 나타내줄 수 있다
// 파라미터 값을 넣어주지 않았을 때 기본값으로 사용할 값을 지정하는 방법
const calculateCircleArea = ( r = 1 ) => Math.PI * r * r;
const area = calculateCircleArea();
console.log(area);

