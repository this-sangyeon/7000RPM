//  Back to top : 클릭하면 상단으로 자동으로 올라가는 버튼 구현하기 (스크롤 이벤트)

/*
    * - 변수 지정하기
    * - 문서의 높이를 계산하고 원하는 부분이 상단에서 얼마큼 떨어져 있는지 offset 값을 계산하기
    * - 스크롤과 클릭 이벤트 작성하기
    */
const btt = document.getElementById('back-to-top');
// 요소의 높이를 구하기 위한 변수 선언
// documentElement는 문서 자체를 가져온다.
const docElem = document.documentElement;
// 일정 위치에 올라오더라도 top 버튼이 나타나게끔
let offset;
// 스크롤 양을 저장하는 변수
let scrollPos;
// document의 높이를 구해온다.
let docHeight; 

// ---------------------------------------!
// 문서 높이 계산하기

// 문서의 높이 전체를 구해오는 방법은
// scrollHeight가 있다.
// docHeight = docElem.scrollHeight;
// scrollHeight가 있다.
// docHeight = docElem.offsetHeight;
docHeight = Math.max(docElem.scrollHeight,docElem.offsetHeight);
// scroll 양을 담아줘야한다.
// 얼마나 올라갔는지의 값을 구하는 것이다.
// 스크롤을 하고 새로고침을 해야 콘솔에 스크롤값이 출력된다.
// scrollPos = docElem.scrollTop;
// console.log(docHeight);//5074 윈도우 사이즈 바뀔 때마다 다른 값을 출력한다.
// 스크롤양의 값이 제대로 나오는지 확인
console.log(scrollPos);

//
// 항상 헷갈리는 것 집고 넘어가기!!
// == 값이 같음 / a 값과 b값이 같으면 true, 그 외에는 false
// != 값이 다름 / a 값과 b값이 다르면 true, 그 외에는 false
// === 값과 타입이 같음 / a와 b의 값과 타입이 같으면 true, 그 외에는 false
// !== 값과 타입이 다름 / a와 b의 값과 타입이 다르면 true, 그 외에는 false
//

// 적정 위치까지 스크롤하더라도 이벤트가 실행되도록
// docHeight == 0
// docHeight != ''
// docHeight != 'undifind' 등을 넣어줄 수 있다.
// 만약 docHeight 에 값이 있으면
if(docHeight != 'undifind'){
    // docHeight 를 4번 나눈 값을 offset에 저장
    offset = docHeight / 4;
}

// ---------------------------------------!

// 스크롤 이벤트 추가

// 윈도우에 스크롤 이벤트가 생기면 할일
window.addEventListener('scroll',()=>{
    // 스크롤이 생기면 스크롤의 실시간 양을 알 수 있다.
    // docElem의 스크롤 양을 scrollPos에 저장한다.
    // 새로고침을 하지 않아도 스크롤하면 콘솔에 실시간으로 스크롤 값이 출력된다.
    scrollPos = docElem.scrollTop;
    console.log(scrollPos);
})



// 클릭 이벤트 추가