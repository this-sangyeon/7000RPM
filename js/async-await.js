function sleep(ms){
    // 특정 ms 가 지난 후에 resolve가 ㅅㄹ행
    return new Promise(resolve => setTimeout(resolve, ms));
}
// error를 잡아낼 때는 트라이 캐치문을 사용하면 됩니다.
async function makeError(){
    await sleep(1000);
    const error = new Error();
    // 에러를 발생시킬 때는 throw
    throw error;
}
// 에러를 잡아내고 싶다!
async function process(){
 try {
     await makeError();
 } catch(e){
     console.error(e);
 }
}

// async function process(){
// console.log('안녕하세여');
// // 1초동안 기다리자
// await sleep(1000);
// console.log('반갑습니다');
// }
// 함수의 결과물은 promise를 반환하게 된다.
// process().then(value => {
//     console.log(value);
// }) 

process()