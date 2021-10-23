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
    // 4분의 1 값보다 많으면~
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
    // console.log(scrollPos); // 확인
    
    /*
        if(scrollPos > offset){
        btt.className ='visible';
    }else{
        btt.className = '';
    }
    */
    // 조건연산자, 삼항연산자
    // 스크롤 양이 우리가 지정한 offset값 보다가 크다면 
    btt.className = (scrollPos > offset) ? 'visible' : '';
});
// className는 클래스를 추가하는 것이 아니라
// 기존에 클래스가 없다면 넣고 있다면 교체할라
 
// ---------------------------------------!

// 클릭 이벤트 추가
// 버튼을 클릭하면 급하게 첫화면으로 돌아가는 것이 아닌 스크롤 양을 0으로 바꿔 올라가도록 설정

btt.addEventListener('click', (e)=>{
    // ()안에 적힌 e는 btt(a링크)의 기본속성을 담아준다.
    // a태그는 기본적으로 링크속성이 있기 때문에 막아줘야 한다.
    // e의 본연의 기능을 막아주기 위해 preventDefault()를 넣어준다.
    // 변수의 기본속성을 막아버렸기 때문에 버튼을 눌러도 맨 위로 올라가지 않는다.
    e.preventDefault();
    // 도큐멘트의 스크롤값을 0으로 !!
    // 하지만 여전히 뚝 맨 위로 올라간다.
    // docElem.scrollTop = 0;
    // 일정 시간마다 도큐먼트의 스크롤 양을 줄이다 0이 되면 멈춘다.
    scrollToTop();
});
 // 일정 시간마다 도큐먼트의 스크롤 양을 줄이다 0이 되면 멈춘다.
 // 위의 조건을 충족시킬 함수를 만들어준다.
function scrollToTop(){
    // 일정시간마다 할 일
    // setInterval(할일, 시간);
    // 시간은 0.0015s = 15
    // 할 일 =  function(){실제로 할 일};
    // 실제로 할 일 window.scrollBy(x, y);
    //윈도우 스크롤이 0이 아닐 때 window.scrollBy(0, -55);를 해줘야 한다.
    // 실제로 할 일 window.scrollBy(0, -55);
    //스크롤양이 0이면 setInterval을 멈춰줘야 한다.
    // 멈추기 위해서는 clearInterval(이름); 을 해줘야 한다.

var scrollInterval = setInterval(function(){
    if(scrollPos != 0){
        window.scrollBy(0, -55);
    }else{
        clearInterval(scrollInterval);
    }
 }, 15);
 // 식 맞게 적었는데 뚝뚝 올라가는 이유는 위에 / docElem.scrollTop = 0;를 지워주지 않아서이다.
}

