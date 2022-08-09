let ballColor = document.querySelectorAll('.group > .ball');

function colorChange(){
    
    for(let i = 0; i < ballColor.length; i++){
        let ballNumber = Number(ballColor[i].innerText);
        if(ballNumber >= 1 && ballNumber <= 10){
            ballColor[i].style.background = "red";
        }else if(ballNumber >= 11 && ballNumber <= 20){
            ballColor[i].style.background = "blue";
        }
        else if(ballNumber >= 21 && ballNumber <= 30){
            ballColor[i].style.background = "pink";
        }
        console.log(ballNumber);
    }
}
colorChange();
