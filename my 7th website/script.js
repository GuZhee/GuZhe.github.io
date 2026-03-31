function check(event){
    // event.preventDefault();

    var errorLog ="";
    var name = $("#userName").val();
    var email = $("#userEmail").val();
    var passw = $("#userPassword").val();
    var cpassw = $("#checkPassword").val();
    var message = $("#textArea").val();

    if (name == "" || email == "" || passw =="" || cpassw == "" || message == "") {
        errorLog = "表格不可留空!";
    }else if(!checkEmail(email)){
        errorLog = "請輸入正確的E-mail!";
    }else if(passw != cpassw){
        errorLog = "請確認密碼是否正確!";
    }

    if(errorLog !=""){
        $("#error").css("color","red");
        $("#error").html(errorLog);
    }else{
        $("#error").css("color","lightgreen");
        $("#error").html("表單已送出!");
    }
}

function checkEmail(Email){
    var checker = /^\b[A-Z0-9]+@[A-Z0-9]+\.com\b/i; //正規表達式 會去偵測值是否有達成
    return checker.test(Email);
}
