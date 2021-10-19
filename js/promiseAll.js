function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
}
const getRabbit = async () => {
    await sleep(500);
    return '토끼';
}

const getTurtle = async() => {
    await sleep(3000);
    return '거북이';
}

// async function process(){
//     const dog = await getDog();
//     console.log(dog);
//     const rabbit = await getRabbit();
//     console.log(rabbit);
//     const turtle = await getTurtle();
//     console.log(turtle);
// }


// d여러개의 프로미스를 한번에 실행하고 싶을 때/
// async function process(){
//     //const start = Date.now(); // 얼마나 걸렸는지 ㅇ알고 싶ㅇㄹ때
//     // promise가 끝날 때는 < 배열 안의 모든 값들이 실행이 완료되고 나서
//     const result = await Promise.all([getDog(),getRabbit(), getTurtle()]);
//     //console.log(Date.now() - start);
//     console.log(result);

// all 은 셋중에 하나라도 에러가 발생하면 전체 프로미스가 에러가 난 것으로 간주한다.

    
// }

async function process(){
    //const start = Date.now(); // 얼마나 걸렸는지 ㅇ알고 싶ㅇㄹ때
    // promise가 끝날 때는 < 배열 안의 모든 값들이 실행이 완료되고 나서
     //각각 다른 변수로 빼내주고 싶을 때 사용하는
    const first = await Promise.race([getDog(),getRabbit(), getTurtle()]);
    //console.log(Date.now() - start);
    console.log(first);

    //각각 다른 변수로 빼내주고 싶을 때 사용하는
    
}
process();