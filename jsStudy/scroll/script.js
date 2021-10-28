
let testLi = document.querySelectorAll('#back > ul > li');
const printerDiv = document.querySelector('#printer');
window.addEventListener('scroll',()=>{
    console.log(window.scrollY);

    // if(window.scrollY >= 500){
    //     testLi[0].style.display ='none';
    // }
    // 문서 안의 객체에 텍스트를 추가해줄 것이고
    // 상단 기준으로 스크롤의 값을 저장
    printerDiv.innerHTML = document.documentElement.scrollTop;
    
})