const btn =document.getElementById('submit');
const container = document.querySelector('.container');

// function(){} = 함수:할 일

btn.addEventListener('click',function(){
    // 클릭하면 실제로 할 일
    btn.style.color = 'red';
    console.log('click');
})

// click 마우스 클릭
// mouseenter 마우스 엔터 - 마우스커서가 영역에 올렸을 때
// mouseleave 마우스 리브 - 마우스커서가 영역을 벗어났을 때

// container.addEventListener('mouseenter', function(){
//     console.log('mouseenter~');
// })
// container.addEventListener('mouseleave', function(){
//     console.log('mouseleave~');
// })

// keydown  특정 키를 눌렀을 때 발생하는 이벤트
//addEventListener('keydown',function(event) = 키보드가 어떤 키를 눌렀는지를 가져오게 된다.
window.addEventListener('keydown',function(event){ 
    // 이벤트의 키 무엇을 눌렀는가.
    console.log(event.key);
    // 키보드의 코드는 무엇인가.
    console.log(event.keyCode);
    // 만약 키코드의 값이 esc와 동일했을 때 무언가 창을 닫고 싶다
    // 그럴 때 if문과 함께 사용할 수 있다.
})