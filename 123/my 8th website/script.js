$(function(){
    $(".codeContainer").hide();
    $("#css").css("margin-left",("-520px"));
    $("#js").css("margin-left",("-520px"));

    // $(".tab").click(function(){
    //     console.log(this);
    //     var leftRange = $(this).offset().left;
    //     console.log(this);
    //     console.log(leftRange);
    // })


    var $outPut = $("#outPut");
    var $window =$(window).on("resize",function(){
        
        var height = $(this).height() - 740;
        $outPut.height(height);
    }).trigger("resize");

})


function test(c){
    console.log(c);
    $(c).nextAll(".tab").css("margin-left","-260px");

    $(c).nextAll(".codeContainer").animate(
        {width:"0px"},
        {duration:1500,queue : false}
    );

    $(c).next().animate(
        {backgroundColor:"#1D2E22"},
    );

    var leftRange = $(c).offset().left;
    console.log(leftRange);

    $(c).next().animate(
        {width:"680px"},
        {duration:2000,queue:false}
    );

    if (leftRange > 500) {
        // $(c).prevAll(".tab").css("margin-left","-260px");
        $(c).prevAll(".tab").animate(
            {marginLeft:"-260px"},
            {duration:700,queue:false}
        );

        $(c).prevAll(".codeContainer").animate(
            {width:"0px"},
            {duration:1000,queue:false}        
        );
        console.log("t");
    }
}

function code(){
    $("#outPut").contents().find("head").html("<style>" + $("textarea#css").val() + "</style>");
    $("#outPut").contents().find("body").html($("textarea#html").val());

    document.getElementById("outPut").contentWindow.eval($("textarea#js").val());
}