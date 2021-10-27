/* 

    실행에 앞서 tab-content가 다 닫혀있어야 한다.
    tab-content 안의 div들 모두 보이지 않도록 한다.
    링크를 클릭하면 클릭한 그 요소의 href 속성의 값을
    변수 tabTarget에 저장.
    저장된 값에서 #을 삭제한다.
    tabTarget = tabs-1

    tabTarget의 값이 getElementById안에 들어오게끔 식을 작성하면
    tabs-1가 보이게 해.
    document.getElementById('').style.display = 'block';

    active가 있는 것은 일단 열려있다.
    ㄴ 해당 타겟은 보이게 된다 
*/



// 변수 선언
let targetLink = document.querySelectorAll('.tab-menu a');
let tabContent = document.querySelectorAll('#tab-content > div');
console.log(tabContent); 
// a 태그마다 할 일로 접근해야 한다.
for(let i = 0; i < targetLink.length;i++){
    // targerLink을 클릭하면 할 일
    targetLink[i].addEventListener('click',function(e){
        // a링크의 기본속성을 막아준다.
        e.preventDefault();
        // 어떤 걸 클릭해야되는지 알려면 반드시 본인을 적어주어야 한다.
        // e, ev, event 등 변수 지정
        // 요소의 속성을 가져오는 방법 getAttribute();
        let orgTarget =  e.target.getAttribute('href');
        // console.log(orgTarget);

        let tabTarget = orgTarget.replace('#', '');
        // tabContent들을 선택해서 그중 원하는 것만 실행되도록 해야한다.

        for(let j = 0; j < tabContent.length; j++){
            tabContent[j].style.display ='none';
        }
        document.getElementById(tabTarget).style.display = 'block';
        
        for(let x = 0; x < targetLink.length;x++){
            // targetLink를 클릭하면 active를 삭제
            targetLink[x].classList.remove('active');
            // 클릭한 타겟만 active 추가
            e.target.classList.add('active');
        }
    
    });
}
// 열자마자 첫 탭은 열려있어라.
document.getElementById('tabs-1').style.display = 'block';

console.log(targetLink);
// let orgTarget = '#tabs-1';
//이것은 방법이 아니었다
// orgTarget.replace('#',' ');
// let tabTarget = orgTarget;
// a.replace('원래 값', '바꿔줄 값')
// a 태그들을 클릭하면 클릭한 요소의 속성의 벨류를 가져와서

