//실행하려면 ctrl alt N

//자바스크립트에서 변수 선언
//ES6 변수, 상수 선언
var name; //함수 레벨 스코프
let name1='abc'; //변수 선언 방법
const name2='abc'; //final(변경 불가능 -상수)

//선언- 식별자를 등록
//초기화 단계 - 값을 위한 공간을 할당하고 식별자랑 연결함. 초기화하지 않았다면 undefined

console.log(name1);
console.log(name2);

//식별자(identifier)
//변수 
// 함수
// 클래스
// 식별자 - 실행 컨텍스트에 등록됨
/*
-특수문자 제외한 숫자, 문자, 언더스코어(_), 달러($) 기호 가능
- 숫자로 식별자 이름 시작은 불가능
-예약어(keyword, reserved word) 사용 불가능
*/


var name ='abc';
console.log(name);

name = 11244;
console.log(name); //타입 바뀌어도 된다.
//동적 타이핑
//1. 값을 보고 타임 추론
//2. 언제든 식별자의 값이 변경될 수 있음

const n = 10;
const message='test'

console.log(`상수 n의 값 : ${n}.상수 message의 값 : ${message}`);



const obj1 ={
    abc: 'abc'
}
const obj2={
    abc:'abc'
}
//멤버 접근 연산자(.)
console.log(obj1.abc)
//계산된 멤버 접근 연산자([]) computed member access operator
console.log(obj1['abc'])
obj1['alpha']='a';
obj1['beta']='b';
console.log(obj1);
console.log(obj1==obj2)



const a =10
if(a>5){
    console.log('a가 5보다 큽니다.')
}


for(var i=0; i<10; i++){
    console.log(`${i+1}번째 출력.`)
}


function test(a,b){
    return `${a}와 ${b}의 합은 ${a+b}입니다.`
}

const a=test
const resultMessage=a(1,2)
console.log(resultMessage)


function test(a,b){
    return `${a}와 ${b}의 합은 ${a+b}입니다.`
}

const obj={
    name:'yelin',
    say:function(){
        console.log('뭔가 말함');
    }
}

obj.say();