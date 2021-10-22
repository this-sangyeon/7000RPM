const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease =document.getElementById('decrease');

console.log(number.innerText);
console.log(increase.offsetTop);
console.log(decrease.id);

increase.addEventListener('click', ()=> {
    // parseInt 는 문자열을 숫자로 바꿔주는 것. 두번째숫자는 진법 (현재는 10진법)
    const current = parseInt(number.innerText, 10);
    number.innerText = current + 1;
})

decrease.addEventListener('click',() =>{
    const current = parseInt(number.innerText, 10);
    number.innerText = current - 1;
})