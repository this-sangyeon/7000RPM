// 작업을 동기적으로 진행하면 작업이 끝날때 까지 다른작업을 진행하지 못한다.
// 비동기적은 ,, 한꺼번에 여러가지 작업ㅇ을 할 수 ㅇㅆ다.


// 동기형태
// function work(){
//     // Data.now() js 내장함수 현재시각
//     const start = Date.now();
//     for(let i = 0; i < 1000000000; i++){

//     }
//     const end = Date.now();
//     // 얼마나 걸렸는지 알려주는 함수
//     console.log(end - start + 'ms');
// }

// work();
// console.log('다음 작업');

//비동기적
function work(callback){
    // Data.now() js 내장함수 현재시각
    setTimeout(() => {
        const start = Date.now();
        for(let i = 0; i < 1000000000; i++){
    
        }
        const end = Date.now();
        // 얼마나 걸렸는지 알려주는 함수
        console.log(end - start + 'ms');
        callback(end - start)
    // 수치만큼의 시간이 지난 후 특정작업을 실행을 하겠다.
    },0)
}

//callback 함수는
//함수 타입ㅇ의값을 파라미터로 넘겨줘서 파라미터로 받은 값을 특정 작업이 끝나고 나서 호출하는 것
console.log('작업시작')
work((ms) =>{
    console.log('작업종료');
    console.log(ms+'ms 걸렸다고 해요.')
});
console.log('다음 작업');