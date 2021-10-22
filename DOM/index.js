// 1

// var title =document.getElementById('main-title');
// 태그 이름을 이용해서 엘리먼트를 가졍오는 것이다.
// 아이디는 문서에 한번정도 사용하는 것이고
// 태그는 여러개가 들어갈 수 있다는 가정하에서 복수 s가 되는 것이다.

// var titleSpan = title.getElementsByTagName('span');
//console결과 > HTMLCollection(3) [span, span, span]
// 마치 배열처럼 출력된다.
// 태그의 이름은 여러개가 나올 수 있기 때문에 배열처럼 리턴을 해준다.
// 첫번째것만 출력하고 싶을 땐 인덱스 넘버를적어주면 된다. [0], [1] 등등
// console.log(titleSpan);

// ---------------------------------------!

// 2
// 굉장히 많이 쓰인다!
// querySelector를 쓰는 이유는 그냥 css 선택자를 선택하면 된다.
// const mainTitle = document.querySelector('#main-title small');
// console.log(mainTitle);

//querySelector 는 포함되는 객채가 여러개더라도 맨 처음 인덱스만 가져오게 된다.
// const testImg= document.querySelector('.testimg');
// querySelectorAll = 모두 다 가져오자! 배열처럼 출력된다.
// let testImg= document.querySelectorAll('.testimg img');
// for(let i =0; i < testImg.length;i++){
//     testImg[i].style.border = '1px solid red';
// }
// testimg 중에서 두번째 것을 가지고 오고 싶다면
// 배열-인덱스 번호 지정하여 출력
// console.log(testImg[1]);
// console.log(testImg);


// ---------------------------------------!

// 3
// 속성의 값을 세팅해주거나 가져오는 것
// getAttribute(), setAttribute()
// const link = document.querySelector('.testimg a');
// a에 걸려있는 링크가 궁금할 때는 href 가져오면 된다.
// link 가 가진 메서드를 불러와준다.
//> getAttribute(! 이 안에 문자열로 가져오려는 속성을 적어주면 된다. )
// 만약 class나 id명도 불러오고 싶다면 class나 id를 문자열로 적어주면 된다.
// console.log(link.getAttribute('href'));
// console.log(link.getAttribute('class'));

// 가져오는 거 뿐만 아니라 세팅도 하고 싶을 때
// setAttribute('속성이름', '새롭게 불러올 무언가' )는 매개변수가 2개이다.
// link.setAttribute('href', 'https://www.naver.com')
// console.log(link.getAttribute('href'));
// console.log(link.setAttribute('href', 'https://www.naver.com')); // undifind


// ---------------------------------------!
// 4 
// return
// getAttribute()는 리턴이 되는가 => 리턴이 된다. 
// 반환할 값이 있기 때문에 콘솔에 출력된다.
// 리턴 값이 없다면 undifind가 뜰 것이다.
// setAttribute()는 리턴이 되는가 => 리턴이 안 된다.
// 값을 얻어오는 용도가 아니라 바꿔주는 용도이기 때문에. 


// ---------------------------------------!

// 5
//  class 추가, 삭제

const link = document.querySelector('.testimg a');
// 먼저 a에 걸려있던 class가 className을 추가하자 아래의 클래스로 교체되었다.
// class 속성의 값을 바꿔버린다.
// link.className ='special';
// 두개를 다 같이 써주면 각각의 속성값이 적용된다. 하지만 비효율적
// link.className ='special link-google';

// 내가 넣고 싶은 속성을 추가하고 싶을 때
// css의 class들에 관련된 기능을 가지고 있다.
//classList.add() 클래스를 추가하겠다
link.classList.add('special');
//클래스를 여러개 추가하고 싶을 때 쉼표 하고 이어주면 된다.
link.classList.add('special','foo');
//classList.remove() 클래스를 삭제하겠다.
link.classList.remove('link-google');
// 2초 뒤에 함수를 실행하겠다.
// 2초 뒹에 클래스를 삭제하겠다.
setTimeout(()=>{
    link.classList.remove('link-google');
},2000);

