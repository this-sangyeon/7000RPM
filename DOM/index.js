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
const testImg= document.querySelectorAll('.testimg');
// testimg 중에서 두번째 것을 가지고 오고 싶다면
// 배열-인덱스 번호 지정하여 출력
// console.log(testImg[1]);
console.log(testImg);