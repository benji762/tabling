var maxChecked = 5;   //선택가능한 체크박스 갯수
var totalChecked = 0; // 설정 끝

function CountChecked(field) {
    if (field.checked) // input check 박스가 체크되면 
        totalChecked += 1; // totalChecked 증가
    else // 체크가 아니면
        totalChecked -= 1; // totalChecked 감소

    if (totalChecked > maxChecked) { // totalchecked 수가 maxchecked수보다 크다면
        alert ("최대 5개 까지만 가능합니다."); // 팝업창 띄움
    field.checked = false;
    totalChecked -= 1;
    }
    
}

