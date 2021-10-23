const btn =document.getElementById('submit');
// function(){} = 함수:할 일

btn.addEventListener('click',function(){
    // 클릭하면 실제로 할 일
    btn.style.color = 'red';
    console.log('click');
})

//  click 마우스 클릭
// mouseenter 마우스 오버 - 마우스커서가 영역에 올렸을 때
// mouseleave 마우스 리브 - 마우스커서가 영역을 벗어났을 때