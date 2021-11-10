const container = document.querySelector('.container');
const box = document.querySelector('.container .box');

// scrollPos = container.scrollTop;
// console.log(scrollPos);
let value;
container.addEventListener('scroll',function(){
    value = container.scrollTop;
    console.log(value);
    
    if(value === 0 ){
        box.style.transform ="translate(-50%, -50%) rotate(0deg)";
        box.style.transition = "0.3s ease-in"
    }
    if(value == 200){
        box.style.transform ="translate(-50%, -50%) rotate(30deg)";
        box.style.transition = "0.3s ease-in"
    }
    if(value >= 400 && value < 600){
        box.style.transform ="translate(-50%, -50%) rotate(60deg)";
        box.style.transition = "0.3s ease-in"
    }
    if(value >= 800 && value < 1000){
        box.style.transform ="translate(-50%, -50%) rotate(90deg)";
        box.style.transition = "0.3s ease-in"
    }
});

// window.addEventListener('mousedown', (e)=>{
//     console.log('마우스다운');
// })

// window.addEventListener('mouseup', (e)=>{
//     setTimeout(()=>{
//         console.log('마우스업');
//     },1000)
// })