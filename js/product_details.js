$(".x-size").on("click",function(){
    $("#canMove").css("display","none");
})
$("#add").on("click",function(){
    var n=$("#addCount").html();
    n++;
    $("#addCount").html(n);
})
$("#cut").on("click",function(){
    var n=$("#addCount").html();
    if(n>1){
        n--;
    }
    $("#addCount").html(n);
})

var move=0
$("#next").on("click",function(){
    if($("#next").is(":not(.disabled)")){
        var left=$(".p-i-s1").css('marginLeft');
        var l = parseInt(left);
        console.log(l)
        move++;
        $(".p-i-s1").css("margin-left",-74*move);
        if(move==2){
            $("#next").addClass("disabled");//就禁用
          }
    }
    $("#prev").removeClass("disabled");
})
$("#prev").on("click",function(){
    if($("#prev").is(":not(.disabled)")){
        var left=$(".p-i-s1").css('marginLeft');
        var l = parseInt(left);
        console.log(l)
        move--;
        $(".p-i-s1").css("margin-left",-74*move);
        if(move==0){
            $("#prev").addClass("disabled");
        }
    }
    $("#next").removeClass("disabled");
})
$(".p-i-s").on("mouseenter","img",function(){
    var $img=$(this);
    var src=$img.attr("src");
    var backgroundImage=
          `url(${$img.attr("src")})`
          console.log(backgroundImage)
    $(".m-image").css({backgroundImage})
    var backgroundImage2=
          `url(../img/${$img.attr("data-lg")})`
    console.log(backgroundImage2)
    $(".b-image").css({backgroundImage:backgroundImage2})
})


$(".m-image").on("mouseenter",function(){
    $(".b-image").css("display","block");
})
$(".m-image").on("mouseleave",function(){
    $(".b-image").css("display","none");
})

$(".supermask").on("mouseenter",function(){
    $(".smask").css("display","block");
})
$(".supermask").on("mouseleave",function(){
    $(".smask").css("display","none");
})

$(".supermask").on("mousemove","",function(e){
    var left=e.offsetX-88;
    var top=e.offsetY-88;
    if(left<0) left=0; 
    else if(left>176) left=176;
    if(top<0) top=0; 
    else if(top>176) top=176;
    $(".smask").css({top,left})
    $(".b-image").css(
      "background-position",
      `-${left*2}px -${top*2}px`
    )
  })