$(function(){
    $(".x-size").on("click",function(){
        $("#canMove").css("display","none");
    })
    $("#uname").on("blur",function(){
        var uname=$("#uname").val();
        if(!uname){
            return;
        }else{
            // 名字的正则表达式
            var n_reg=/^\w{3,8}$/;
            if(n_reg.test(uname)!=true){
                alert("用户名格式不正确");
                return;
                }
                $("#upwd").on("blur",function(){
                    var upwd=$("#upwd").val();
                    if(!upwd){
                    }else{
                        // 密码的正则表达式
                        var p_reg=/^[a-z0-9_]{3,9}$/;
                        if(p_reg.test(upwd)!=true){
                            alert("密码名格式不正确");
                            return;
                        }
                            $("#login").on("click",function(){
                            var uname=$("#uname").val();
                            var upwd=$("#upwd").val();
                            $.ajax({
                                url:"http://127.0.0.1:3030/login?uname="+uname+"&upwd="+upwd,
                                type:"get",
                                dataType:"json",
                                success: function(result){
                                    if(result.code==1){
                                        alert("登陆成功");
                                        return;
                                        }else{
                                            alert("用户不存在");
                                            return;
                                        }
                                    }
                                })
                            })         
                    }
                })
            }
        })
})

// $(function(){
// $("#uname").on("blur",function(){
//     var uname=$("#uname").val();
//     if(!uname){
//         return;
//     }else{
//         // 名字的正则表达式
//         var n_reg=/^\w{3,8}$/;
//         if(n_reg.test(uname)!=true){
//             alert("用户名格式不正确");
//             return;
//             }else{
//                 $("#upwd").on("blur",function(){
//                     var upwd=$("#upwd").val();
//                     if(!upwd){
//                     }else{
//                         // 密码的正则表达式
//                         var p_reg=/^[a-z0-9_]{3,9}$/;
//                         if(p_reg.test(upwd)!=true){
//                             alert("密码名格式不正确");
//                             }else{
//                                 $("#login").on("click",function(){
//                                     var uname=$("#uname").val();
//                                     var upwd=$("#upwd").val();
//                                     $.ajax({
//                                         url:"http://127.0.0.1:3030/login?uname="+uname+"&upwd="+upwd,
//                                         type:"get",
//                                         dataType:"json",
//                                         success: function(result){
//                                             if(result.code==1){
//                                                 alert("登陆成功");
//                                             }else{
//                                                 alert("用户不存在");
//                                             }
//                                         }
//                                     })
//                                 })
//                             }
//                         }
//                 })
//             }
//         }
//     })
// })
