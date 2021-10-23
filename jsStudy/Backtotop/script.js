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
var offset;
// 스크롤 양을 저장하는 변수
var scrollPos;
// document의 높이를 구해온다.
var docHeight; 

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
scrollPos = docElem.scrollTop;
console.log(docHeight);//5074 윈도우 사이즈 바뀔 때마다 다른 값을 출력한다.
// 스크롤양의 값이 제대로 나오는지 확인
console.log(scrollPos);
// 스크롤 이벤트 추가


// 클릭 이벤트 추가