// event
// const btn = document.querySelector('.btn');
// const mainTitle = document.querySelector('#main-title');
// function btnClickHandler() {
//     mainTitle.style.background='dodgerblue';
// }
// btn.addEventListener('click',btnClickHandler);

// 예제
// 버튼을 누르면 활성화

var menuLinks = document.querySelectorAll('.menu-link');
// menuLinks[0].addEventListener('click', clickMenuHandler);

// function clickMenuHandler(){

    // 1
    // 클릭했을 때 menu-active 지워지게
    // 제이쿼리 스타일 - 간단하다.
    // 단점: 쓸데없이 for문이 돈다.
    // for(var i=0; i <menuLinks.length; i++){
    //     menuLinks[i].classList.remove('menu-active');
    // }

    // 2
    //오류가 뜨는 이유 처음에 로드 했을 때 메뉴 엑티브 붙은 것이 없다.
    //활성화된 것이 없다.
    // var activeMenu = document.querySelector('.menu-active');
    // activeMenu.classList.remove('menu-active');
    // 만약 activeMenu 값이 있을 때 실행되도록
    // 단점 : dom script가 속도가 느림 / 식 자체가 돔스크립트 의존적이다.
    // if(activeMenu){
    //     activeMenu.classList.remove('menu-active');
    // }
    // this로 내가 지금 현재 클릭하는 것 = addEventListener가 붙은 것
    // this.classList.add('menu-active');
// }

// 3
// 현재 활성화된 메뉴를 담을 변수
// 다른 버튼을 눌렀을 때 먼저 담겨졍있던 remove class를 비활성화하고
// 지금 누른 this를 활성화 해줍니다..~
// 내가 누른 걸 담아뒀다가 그거 하나만 체킹체킹하면 된다!
var currentMenu; 
var activeMenu = document.querySelector('.menu-active');

function clickMenuHandler(){
    // currentMenu가 값을 가지고 있을 때 remove를 해줘야됨/
    // 처음 눌렀을 때는 currentMenu에 값이 있지 않아서 undifind인 상태로 식이 진행되고
    // 후에 this 값이  currentMenu에 갱신되면서 함수가 끝나게 된다.
    // 내가 클릭한 버튼을 currentMenu가 가리키고 있고 
    // 다른 버튼을 눌렀을 때 currentMenu는 값을 가지고 있기 때문에 
    // if문이 실행되어 remove가 진행된다.
    // 그리고 새로 누른 버튼은 this가 실행되어 활성화된다.
    if(currentMenu){
        currentMenu.classList.remove('menu-active');
    }
    // 현재 누른 버튼의 값이 담겨있다고 가정을 하고
    // currentMenu.classList.remove('menu-active');
    // 지금 내가 누른 this를 활성화 해주고 
    this.classList.add('menu-active');
    // this를 currentMenu로 갱신해준다.
    // error 발생. 정의되어있지 않은 클래스에 접근되어있다.
    //값을 안 넣고 선언만 한 상태이기 때문이다. => 48줄 추가
    currentMenu = this;
}

for(var i = 0; i < menuLinks.length;i++){
    menuLinks[i].addEventListener('click', clickMenuHandler)
}