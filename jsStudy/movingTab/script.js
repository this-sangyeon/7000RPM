let tabLink = document.querySelectorAll('.tab-menu li');
const highLight = document.querySelector('.highlight');
const test2 = document.querySelector('.tab-menu li:nth-child(2)').offsetLeft;
console.log(test2);
//offsetLeft 란 상대적인 offsetParent의 왼쪽에서의 상대적인 거리를 픽셀화
// (offsetParent)가까운 부모 중에 스태틱이 아닌(포지션이 기본값이 아닌 요소를 기준으로 왼쪽에서의 거리를 알려준다. )

// for(let i = 0; i < tabLink.length; i++){
//     tabLink[i].addEventListener('click',function(e){
//         e.preventDefault();
//         // 새로 변수를 선언하고 클릭한 링크의 레프트값을 구해 할당.
//         let targerLeft = this.offsetLeft;
//         // span highLight의 left 값을 바꿔라.
//         // 픽셀 값을 적용해줘야 인터렉션이 실행된다.
//         highLight.style.left = targerLeft + 'px'; 
//         console.log(targerLeft);
//     });
// }

// 다른 방법
for(let link of tabLink){
    // 하나하나를 링크로 가져오겠다는 소리
    link.addEventListener('click',function(e){
        e.preventDefault();
        // 새로 변수를 선언하고 클릭한 링크의 레프트값을 구해 할당.
        let targerLeft = this.offsetLeft;
        // span highLight의 left 값을 바꿔라.
        // 픽셀 값을 적용해줘야 인터렉션이 실행된다.
        highLight.style.left = targerLeft + 'px'; 
        console.log(targerLeft);
    });
}