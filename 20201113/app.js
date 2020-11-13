

function 생성자(파라미터){
    function 매서드(){
    }
    return 메서드
}
function countdown(startsAt){
    let data= startsAt;
    function counter(){
        console.log(data--)
    }
    return counter
}
const c1=countdown(10)
const c2=countdown(10)
c1()
c1()
c2()
c2()

