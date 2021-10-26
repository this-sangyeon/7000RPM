var sliderWrapper = document.getElementsByClassName('container'),
sliderContainer = document.getElementsByClassName('slider-container');
var slides = document.getElementsByClassName('slide');
let slideCount = slides.length; // 슬라이드의 개수를 저장
// 시작하자마자 첫번째
let currentIndex = 0;
// 슬라이드 높이 중에 가장 높은 것을 부모의 높이로 지정해줄 것.
let topHeight = 0;

// 좌우 버튼
const navPrev = document.querySelector('#prev');
const navNext = document.querySelector('#next');


// 변수들이 제대로 지정됐는지 확인하기 위해 console 확인.
// console.log(sliderWrapper);
// console.log(sliderContainer);
// console.log(slides);
// console.log(slideCount);
// console.log(currentIndex);
// console.log(topHeight);
// console.log(navPrev);
// console.log(navNext);

// 슬라이드의 높이를 확인하여 부모의 높이로 지정하기
// 슬라이드의 높이를 구해주는 변수 선언
// topHeight = slides.offsetHeight;
// calulate 계산하라 높은 것을
// 
function calulateTallestSlide(){
    // 높이를 구해와서 topHeight에 할당시킬 것이다.
    // 슬라이드의 높이가 안나오는 이유는 슬라이드 컨테이넝의 높이가 없기 때문이다.
    // sliderWrapper의 높이 안에 
    // 슬라이드 컨텐츠 중 가장 높은 높이를 할당해주면
    // 자동으로 그 안에 height가 생깁니다.

    /* 
    for(시작; 언제깢 할 지의 끝값(조건); 증감){
        실제로 반복할 일
    }
    */
    for(let i = 0; i < slideCount; i++){
        // 이렇게 되면 제일 높은 높이가 저장되는 게 아니라
        // 가장 마지막 i의 높이가 topHeight에 저장된다.
        // topHeight = slides[i].offsetHeight;
        // 만약 slides[i].offsetHeight의 높이가 topHeight보다 높다면
        if(slides[i].offsetHeight > topHeight){
            // 크다면 그 값을 topHeight에 할당
            // 만약 뒷번호 슬라이드 번호들이 앞선 슬라이드의 높이보다 낮다면 값은 바뀌지 않고 유지된다.
            topHeight = slides[i].offsetHeight;
        }

    }
    // 숫자로 나오면 안되고 픽셀로 나와야 한다.
    sliderWrapper[0].style.height = topHeight + 'px';
    sliderContainer[0].style.height = topHeight + 'px';
}
calulateTallestSlide();// 함수 실행

// 슬라이드가 있으면 가로로 배열하기
/* 
    for(시작; 언제깢 할 지의 끝값(조건); 증감){
        실제로 반복할 일
        slides[0].style.left = ???? + '%';
    }
*/
// function slideLeftMove(){
    for(let i = 0; i < slideCount; i++){
        // i의 값마다 100%를 추가한다.
        // 그럼 가로로 정렬된다.
        // 마치 flex처럼
        slides[i].style.left = i*100 + '%';
    }
// }
// slideLeftMove();


// 슬라이드 이동 함수
// 슬라이드가 직접 움직이는 것이 아니라 슬라이드를 감싸고 있는 ul이 움직이는 것이다

function goToSlide(idx){
    // 입력값이 있어야 한다.
    // 반드시 매개변수가 있어야 한다.
    sliderContainer[0].style.left = idx * -100 + '%';
    sliderContainer[0].classList.add('active');
    // 저장값은 0이었지만 다음 버튼을 눌러서 1이 넘어와서 이동을 한 상태에서
    // currentIndex 에 새로운 idx값이 담기게 되고 계속 갱신해준다.
    currentIndex = idx;
    // updateNav();
}



// 버튼 기능 업데이트 함수

function updateNav(){
    // 처음일 때;
    if(currentIndex == 0){
        navPrev.classList.add('disabled');
    }else{
        navPrev.classList.remove('disabled');
    }
    // 슬라이드의 마지막일 때
    if(currentIndex == slideCount - 1){
        navNext.classList.add('disabled');
    }else{
        navNext.classList.remove('disabled');
    }
}



// 버튼을 클릭하면 슬라이드 이동하기 

navPrev.addEventListener('click',function(e){
    e.preventDefault();
    // 이전 버튼을 누르면 현재 currentIndex 값의 -1을 하고
    // 이미 첫화면인데도 이전버튼을 눌렀을 때 마지막 슬라이드가 나왔으면 좋겠다.
    // 처음이 아니라면 하나씩 이동하는 것
    // goToSlide(currentIndex - 1);
    // 처음이라면 goToSlide()
    // currentIndex > 0
    if(currentIndex != 0){
        goToSlide(currentIndex - 1);
    }else{
        goToSlide(slideCount - 1);
    }



    
})
navNext.addEventListener('click',function(e){
    // 기본적으로 a태그이기 때문에 기본속성을 없애줘야 한다.
    e.preventDefault();
    // 이전 버튼을 누르면 현재 currentIndex 값의 1을 하고
    // goToSlide(currentIndex + 1);
    // slideCount번호가 5보다 작을 때 슬라이드가 움직여라
    if(currentIndex < slideCount - 1){
        goToSlide(currentIndex + 1);
    }else{
        // 끝까지 왔을 때 다시 첫화면으로 
        goToSlide(0);
    }
})

// 시작하자마자 첫번째 슬라이드 먼저 보이게 하기
// 첫 슬라이드가 보이지만 이전버튼이 그대로 보인다.
// 그냥 슬라이드 개념으로, 무한 슬라이드를 하지 않고 처음이면 처음 끝이면 끝 하려면 여기서 멈춰도 된다.
goToSlide(0); 


// 하지만 무한 루프를 한다면??
 // updateNav(); 가 실행되면 안된다.
//  클릭하면 이동하는 부분에서 식을 추가해야 한다.
// 버튼 클릭 함수들로 다시 돌아가보자

