# 1. 가입버튼을 result.html 이동
<form action='result.html'...>

<input type= 'wubmit' value='회원가입'/>
</form>

or
<form id='frm'>
  <input type='button' id='btn'/>
</form>

$('#btn').on('click', function(){
  $('#frm').submit();
}


# 2. 반드시 입력해야하는 항목들 : required
# 3. 라벨을 클릭 : <label for='user_id'.....> <input type='text' id='user_id' />
# 4. 취소 : <input type='reset' value='취소' />
# 5. 첫글자대문자, 영숫자, 5자 이상
     /^[A-Z][A-Za-z0-9]{4,0}/
# 6. $('#user_id).blur(function(){})
# 7. if(!req.test($(this).val()){
    alert('ERROR');
}
# 8. $('#user_id').val('');
   frm,userid.value=' ';
   document.getElementById('user_id').value=' ';

# 9. 1) 패스워드 확인을 입력한 경우 패스워드항을 체크
$('pass_chk').on('keyup', function(){
	if($('#pass').val()===''){
		alert('암호확인...');
		$('#pass').focus();
		$('#pass').val('');		
	}
});
   2) if($('#pass').val() == $('#pass_chk').val()) {
	$('#span').html('ok');
	$('#span'_.css({'color' : 'green', 'font-weight' : bolder})
   }else{
	$('#span').html('Fail');
	$('#span').css({'color':'red', 'font-weight':'bolder'})
   }

# 10. 
   if(!$('.gem1:checked') || !$('.gen2:checked)){fail...}
   
   let flag=true;
   let ra=document.frm,gen;; //라디오 버튼들
   
	if(!ra[0].checked || ra[1].checked){ 
	fail...
  }	



