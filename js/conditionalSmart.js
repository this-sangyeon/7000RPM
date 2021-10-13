// function isAnimal(text){
//     return (
//         text === '고양이' || text === '개' || text === '거북이' || text === '너구리'
//     );
// }

// 더 쉽게 하는 방법
// function isAnimal(text){
//     // 배열로 적어준다
//     const animals = ['고양이', '개', '거북이','너구리'];
//     // 배열 안에 text가 존재하다면 true
//     // 존재하지 않는다면 false
//     // includes 배열 내장함수
//     // includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별합니다.
//     return animals.includes(text);
// }


// 화살표함수 버전
// const isAnimal = (text) => ['고양이', '개', '거북이','너구리'].includes(text);


// console.log(isAnimal('개'));
// console.log(isAnimal('노트북'));

// 비효율적인 코드
// function getSound(animal){
//     if(animal === '개') return '멍멍';
//     if(animal === '고양이') return '야옹';
//     if(animal === '참새') return '짹짹';
//     if(animal === '비둘기') return '구구';
//     return '...?';
// }

// ------------------------------------------- !

// 이것도 비효율적인 코드
// function getSound(animal){
//     switch(animal){
//         case '개':
//             return '멍멍';
//         case '고양이':
//             return '야옹';
//         case '참새':
//             return '짹짹';
//         case '비둘기':
//             return '구구';
//         default:
//             return '...?';
//     }
//}

// ------------------------------------------- !

// 객체를 활용하는 방법 !!!!!!!!!!!/
// 좀 더 간단하게 나타낼 수 있다.
// 특정 값을 반환 하는 방법
// 키 벨류 형태로 애니멀 값에 따라서 다른 결과를 반환하는 경우
// function getSound(animal){
//     const sound = {
//         개 : '멍멍',
//         고양이 : '야옹',
//         참새 : '참새',
//         비둘기 : '구구'
//     };
//     return  sound[animal] || '...?';
// }

// console.log(getSound('개'));
// console.log(getSound('참새'));
// console.log(getSound('인간'));
// ------------------------------------------- !

// 특정 값이 무엇으로 주어지느냐에 따라서 다른 코드를 실행하고 싶은 경우
// 함수를 넣어서 호출하는 방법
function makeSound(animal){
    const tasks = {
        개 : () => {
            console.log('멍멍');
        },
        고양이 : () => {
            console.log('야옹');
        },
        참새 : () => {
            console.log('짹짹');
        },
        비둘기 : () => {
            console.log('구구');
        }
    }
    // 객체 안에 원하는 값이 있는지 확인해야한다.
    // 없는 경우
    const task = tasks[animal];
    if(!task){
        console.log('...?');
        return;
    }
    tasks[animal]();
}


makeSound('개');
makeSound('비둘기');
makeSound('인간');