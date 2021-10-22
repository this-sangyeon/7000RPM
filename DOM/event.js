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

function clickMenuHandler(){
    // 클릭했을 때 menu-active 지워지게
    // 제이쿼리 스타일 - 간단하다.
    // 단점: 쓸데없이 for문이 돈다.
    // for(var i=0; i <menuLinks.length; i++){
    //     menuLinks[i].classList.remove('menu-active');
    // }

    //오류가 뜨는 이유 처음에 로드 했을 때 메뉴 엑티브 붙은 것이 없다.
    //활성화된 것이 없다.
    var activeMenu = document.querySelector('.menu-active');
    // activeMenu.classList.remove('menu-active');
    // 만약 activeMenu 값이 있을 때 실행되어라.
    if(activeMenu){
        activeMenu.classList.remove('menu-active');
    }
    // this로 내가 지금 현재 클릭하는 것 = addEventListener가 붙은 것
    this.classList.add('menu-active');
}


for(var i = 0; i < menuLinks.length;i++){
    menuLinks[i].addEventListener('click', clickMenuHandler)
}