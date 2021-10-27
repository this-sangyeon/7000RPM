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
const targerLink = document.querySelector('.tab-menu a')
let orgTarget = '#tabs-1';
//이것은 방법이 아니었다
// orgTarget.replace('#',' ');
// let tabTarget = orgTarget;
// a.replace('원래 값', '바꿔줄 값')
// a 태그들을 클릭하면 클릭한 요소의 속성의 벨류를 가져와서
let tabTarget = orgTarget.replace('#', '');
document.getElementById(tabTarget).style.display = 'block';
