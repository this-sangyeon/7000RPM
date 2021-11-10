
// let testLi = document.querySelectorAll('#back > ul > li');
// let blocks = document.querySelectorAll('.block');
// 스크롤 최상단이 아니라 모니터 중간부분이 목표지점
// blocks = Array.prototype.slice.call(blocks);
// 내부 높이 // 반절로 나눠야 센터가 됨
// window.innerHeight
var blocks = document.getElementsByClassName('block');
for(let i = 0; i < blocks.length; i++){
    // i는 1~4까지 갔다가 블록의 수 5까지 가면 포문이 멈춘다.
    // 블록의 개수보다 하나 적게 회전을 하자.
    // i의 값은 0, 1, 2, 3, 4 
    // 블록을 하나씩 살펴볼 수 있다.
    // 각각의 블록을 매 회전마다 선택할 수 있다.
    var one_block = blocks[i];
    //  one_block은 순서대로 불러와진다.
    // 각각의 값을 집어넣는다.
    // 각각의 내부에 offsetTop값을 넣어준다.
    one_block.innerHTML = one_block.offsetTop;
}
var printerDiv = document.getElementById('printer');
var screen_center = document.documentElement.scrollTop + window.innerHeight/2;
window.addEventListener('scroll',change_scroll);
function change_scroll(){
    printerDiv.innerHTML = document.documentElement.scrollTop;
    for(var i = 0; i <blocks.length; i++){
        var one_block =blocks[i];
        if(one_block.offsetTop < screen_center){
            one_block.classList.add('blue');
        }else{
            one_block.classList.remove('blue');
        }
    }
}

// window.addEventListener('scroll',change_scroll);