// function increaseAndPrint(n , callback){
//     setTimeout(()=> {
//         const increased = n + 1;
//         console.log(increased);
//         if(callback){
//             callback(increased);
//         }
//     }, 1000)
// }

// increaseAndPrint(0, n => {
//     increaseAndPrint(n ,n => {
//         increaseAndPrint(n, n =>{
//             increaseAndPrint(n, n => {
//                 increaseAndPrint(n, n => {
//                     console.log('작업 끝');
//                 })
//             })
//         })
//     });
// });

// const myPromise = new Promise((resolve, reject) => {
//     // 성공하면 resolve ,호출 실패하면 reject\
//     setTimeout(()=> {
//         resolve('result');
//     }, 1000)
// });

// // 프로미스가 끝나고 실행할작ㅇ업을  설정할 수 있다
// myPromise.then(result => {
//     console.log(result);
// })

//reject
// const myPromise = new Promise((resolve, reject) => {
//     // 성공하면 resolve ,호출 실패하면 reject\
//     setTimeout(()=> {
//         reject(new Error());
//     }, 1000)
// });

// //실패하는 상황
// myPromise.then(result => {
//     console.log(result);
// }).catch(e => {
//     console.error(e);
// })

// 프로미스를만드는함수작성
//
function  increaseAndPrint(n){
    // 새로운 프로미스를 만들어서 반환받을것
    return new Promise((resolve, reject) => {
        // 값이 5가 되면 실패처리를 할  거시다.
        setTimeout(() => {
            const value = n + 1;
            if(value === 5){
                const error = new Error();
                error.name = 'ValueIsFiveError';
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        }, 1000);
    });
}

// increaseAndPrint(0).then(n => {
//     return increaseAndPrint(n);
// }).then(n => {
//     return increaseAndPrint(n);
// }).then(n => {
//     return  increaseAndPrint(n);
// }).then(n => {
//     // 5가 출력되지 않는 이유는 5에서 에러가 발생하도록 설정해두었기 때문
//     return  increaseAndPrint(n);
// }).catch(e => {
//     console.error(e);
// })

// 단순하지만 어디서 에러가 났는지 찾기 ㅇ어렵다
increaseAndPrint(0).then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.catch(e => {
    console.error(e);
})
