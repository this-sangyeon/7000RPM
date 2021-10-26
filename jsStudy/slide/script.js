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
function slideLeftMove(){
    for(let i = 0; i < slideCount; i++){
        // i의 값마다 100%를 추가한다.
        // 그럼 가로로 정렬된다.
        // 마치 flex처럼
        slides[i].style.left = i*100 + '%';
    }
}
slideLeftMove();


// 슬라이드 이동 함수

// 버튼 기능 업데이트 함수

// 버튼을 클릭하면 슬라이드 이동하기 