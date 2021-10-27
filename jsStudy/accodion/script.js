const btnCollapse = document.querySelector('#btn-collapse');
let headding = document.querySelectorAll('.panel-heading');
let question = document.querySelectorAll('.panel-question');
let answer = document.querySelectorAll('.panel-body');


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
            activateBody();
        }
    });
}

 // 부모에게 엑티브가 있으면 자식의 접혀있는 바디가 나오게 해준다.
 // 일단 패널의 바디를 다 접고 question에 엑티브가 있는가에 따라 바디를 펼치게끔.
 // activateBody();

 function activateBody(){
     // panel-body가 모두 안 보이도록
     // display : none;
    for(let x = 0; x < answer.length; x++){
        answer[x].style.display = 'none';
    }    
    
     // 클래스명 active가 붙어있는 panel-question 자식 중 
     // panel-body가 나타나도록
     // .panel-question.active .panel-body
     // 실행되는 것은 active가 추가되는 하나 뿐이기 때문에
     // querySelector을 사용, 배열을 잡아주지 않아도 된다.
     const activePanel = document.querySelector('.panel-question.active .panel-body');
     activePanel.style.display = 'block';
 };
 // 첫화면에서도(열자마자) 닫혀있어야 하기 때문에 함수 실행
 activateBody();

 // btn-collapse - Collapse All 버튼을 클릭하면 모든 answer이 보이지 않게 된다.
 btnCollapse.addEventListener('click',()=>{
     // answer들 마다 할 일 이기 때문에 for문을 사용해야 한다.
     for(let i = 0; i < answer.length; i++ ){
        answer[i].style.display = 'none'; 
     }

 })
