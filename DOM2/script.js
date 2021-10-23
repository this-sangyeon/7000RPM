// console.log(window);

// single element
// const form = document.getElementById('todo-form');
// console.log(document.getElementById('todo-form'))
// const form = document.querySelector("#todo-form");
// console.log(form);

// multiple element
// console.log(document.querySelectorAll('.item'));
// const items = document.querySelectorAll('.item');
// items.forEach((item)=>{
//     console.log(item);
// })
// console.log(items);

// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// 되도록 querySelector, querySelectorAll을 사용해주는 것이 효율적이다.

const todos = document.querySelector('#todo-list');
const button = document.querySelector('.submit');
const todoInput = document.querySelector('#todo-input');
const msg = document.querySelector('#msg');
// console.log(todos);
// todos.remove(); 삭제
// todos.style.background ='green';
// todos.lastElementChild.remove();
// todos.firstElementChild.textContent = 'hello';
// todos.lastElementChild.innerHTML ='<h1>안녕하세요</h1>';


// console.log(button);
// button.addEventListener(어떤 이벤트, 어떤 기능){}


// button.addEventListener('click',(e)=>{
//     // 클릭될 때마다 새로고침되어 출력된 click이 사라지는 이유는
//     // html 내의 form 태그 안에 있는 버튼이 자동적으로
//     // 제출을 하기 때문이다.
//     // 그것을 방지하기 위해!
//     // 기본적으로 일어나야 하는 이벤트가 방지가 된다.
//     // 즉 자동적으로 새로고침 되는 form이벤트(새로고침)가 발생하지 않는다.
//     e.preventDefault();
//     console.log('click');
//     console.log(e.target);
//     e.target.style.color ='red';

// });

// 안에 들어있는 함수를 바깥으로 뺄 수도 있다.
function onSubmit(e){
    e.preventDefault();
    // e.target.style.color ='red';
    // console.log('click');
    // 
    if(todoInput.value === ''){
        msg.style.display ='block';
        setTimeout(()=>{
            msg.style.display ='none';
        },2000)
        return;
    }
    const li = document.createElement('li');
    // li에 인풋 안의 텍스트를 담아줍니다
    li.appendChild(document.createTextNode(todoInput.value));
    // console.log(todoInput.value);
    // appendChild를 통해 추가되는 li에 클래스 값을 적용시켜준다
    li.classList.add('item');
    console.log(li);
    // todos > todo-list(ul)에 li를 추가시켜준다
    todos.appendChild(li);
    // 작성을 한 뒤 빈칸이 되어줘야한다.
    todoInput.value="";

    // 아무것도 작성하지 않고 저장을 누를 때 차지하는 여백 값을 없애주기 위한
}

button.addEventListener('click',onSubmit);