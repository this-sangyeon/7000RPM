const btnCollapse = document.querySelector('#btn-collapse');
let headding = document.querySelectorAll('.panel-heading');
let question = document.querySelectorAll('.panel-question');
let answer = document.querySelector('.panel-body');


// 제목을 클릭하면 할 일

// console.log(btnCollapse);
// console.log(headding);
// console.log(question);
// console.log(answer);

// for(시작; 조건; 증감){}
for(let i = 0; i < headding.length; i++){
    // headding들 마다 할 일
    // 헤딩을 클릭할 때마다 벌어질 일
    // 클릭을 하면 active가 빠지는 것을 볼 수 있다.
    headding[i].addEventListener('click', (e)=>{
        // question 마다 할 일
        // question 마다 기존 액티브를 빼줘야 한다.
        for(let j = 0; j < question.length; j++){
            // question 안의 배열을 받아오기 위해.
            question[j].classList.remove('active');
            // 타겟의 바로 부모노드에 클래스를 추가해준다.
            // headding의 부모요소는 question
            e.target.parentNode.classList.add('active');
            // 부모에게 엑티브가 있으면 자식의 접혀있는 바디가 나오게 해준다.
        }
    });
}