class 클로저{
    멤버;
    생성자(파라미터){
        멤버 = 파라미터
    }
    메서드(){

    }
}

function 생성자(파라미터){
    function 매서드(){
    }
    return 메서드
}
function countdown(startsAt){
    let s=0;
    function counter(){
        console.log(`${++s}회 호출됨.`)
    }
    return counter
}
const cc = 호출()
cc()
cc()
c2()
c2()

