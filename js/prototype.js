function Animal(type, name, sound){ // 객체생성자를 사용할 때 함수 대문자 시작
    this.type = type;
    this.name = name;
    this.sound = sound;
    // this.say = function(){
    //     console.log(this.sound);
    // }
}

Animal.prototype.say =function(){
    console.log(this.sound);
}

// 객체 생성자 상속받기 
//call 첫번째 파라미터에 이 객채의 객채생성자 함수의 this를 넣ㅇ어준다
function Dog(name, sound){
    Animal.call(this,'개', name,sound);
}
function Cat(name, sound){
    Animal.call(this,'고양이', name,sound);
}
Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;


const dog = new Animal('개','멍멍이','멍멍');
const cat = new Animal('고양이','야옹이','야옹!');



dog.say();
cat.say();
