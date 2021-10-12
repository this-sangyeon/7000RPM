// function calculateCircleArea(r){
function calculateCircleArea(r =){
    // const radius = r ||  1;
    return Math.PI * r * r;
    // //만약 r이 주어지지 않았다면 기본값은 1로
    // return Math.PI * radius * radius;

    // 다른 방법으로 기본값을정해줄 수 있다.
}
const area = calculateCircleArea(4);
console.log(area);