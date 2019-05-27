
    $(".window-comm").on("mouseenter",function up(){
        var a=-1;
        setInterval(function(){
        var top =$("#w-comment").css('marginTop');
        var c = parseInt(top)
        console.log(top)
        if(c<-290){
            a=-1;
            $("#w-comment").css("margin-top",0);
        }
        $("#w-comment").css("margin-top",a*60);
        a--;
    },1000)
     });

    $.ajax({
        url:"http://127.0.0.1:3030/car1",
        type:"get",
        data:"json",
        success: function(car1){
            console.log(car1);
            var html=`<div class="w-25 h-22 overflow bg-3d ml-2 mr-1 mt-2">
            <div class="sh">
                <img class="w-100 h-100" src="http://127.0.0.1:3030/img/${car1[0].img_url}" alt=""/>
                <h5 class="text-center sh2 pt-1 pb-3 d-flex justify-content-center align-items-center">
                    <a href="sport_detail.html">
                        <img class="tx1"
                             src="http://127.0.0.1:3030/img/${car1[0].avatar}" alt=""/>
                    </a>
                    <a href=""><i class="ml-4 fab fa-weibo fa-1-5x"></i></a>
                    <a href=""><i class="ml-4 fab fa-instagram fa-1-5x"></i></a>
                    <a href=""><i class="ml-4 fab fa-weixin fa-1-5x"></i></a>
                    <a class="text-center ml-4 btn" href="">keep follow</a>
                </h5>
            </div>
        </div>
        <div class="w-25 h-22 overflow bg-3d m-1 mt-2">
            <div class="sh">
                <img class="w-100 h-100" src="http://127.0.0.1:3030/img/${car1[1].img_url}" alt=""/>
                <h5 class="text-center sh2 pt-1 pb-3 d-flex justify-content-center align-items-center">
                    <a href="sport_detail.html">
                        <img class="tx1"
                        src="http://127.0.0.1:3030/img/${car1[1].avatar}" alt=""/>
                    </a>
                    <a href=""><i class="ml-4 fab fa-weibo fa-1-5x"></i></a>
                    <a href=""><i class="ml-4 fab fa-instagram fa-1-5x"></i></a>
                    <a href=""><i class="ml-4 fab fa-weixin fa-1-5x"></i></a>
                    <a class="text-center ml-4 btn" href="">keep follow</a>
                </h5>
            </div>
        </div>
        <div class="w-25 h-22 overflow bg-3d m-1 mt-2">
            <div class="sh">
                <img class="w-100 h-100" src="http://127.0.0.1:3030/img/${car1[2].img_url}" alt=""/>
                <h5 class="text-center sh2 pt-1 pb-3 d-flex justify-content-center align-items-center">
                    <a href="sport_detail.html">
                        <img class="tx1"
                             src="http://127.0.0.1:3030/img/${car1[2].avatar}" alt=""/>
                    </a>
                    <a href=""><i class="ml-4 fab fa-weibo fa-1-5x"></i></a>
                    <a href=""><i class="ml-4 fab fa-instagram fa-1-5x"></i></a>
                    <a href=""><i class="ml-4 fab fa-weixin fa-1-5x"></i></a>
                    <a class="text-center ml-4 btn" href="">keep follow</a>
                </h5>
            </div>
        </div>
        <div class="w-25 h-22 overflow bg-3d ml-1 mr-2 mt-2">
            <div class="sh">
                <img class="w-100 h-100" src="http://127.0.0.1:3030/img/${car1[3].img_url}" alt=""/>
                <h5 class="text-center sh2 pt-1 pb-3 d-flex justify-content-center align-items-center">
                    <a href="sport_detail.html">
                        <img class="tx1"
                             src="http://127.0.0.1:3030/img/${car1[3].avatar}" alt=""/>
                    </a>
                    <a href=""><i class="ml-4 fab fa-weibo fa-1-5x"></i></a>
                    <a href=""><i class="ml-4 fab fa-instagram fa-1-5x"></i></a>
                    <a href=""><i class="ml-4 fab fa-weixin fa-1-5x"></i></a>
                    <a class="text-center ml-4 btn" href="">keep follow</a>
                </h5>
            </div>
        </div>`
        $("#car1").html(html);
        }
    })
    $.ajax({
        url:"http://127.0.0.1:3030/car2",
        type:"get",
        dataType:"json",
        success:function(car2){
            console.log(car2);
            var html2=`<div class="w-20 h-20 overflow bg-3d ml-2 mr-2 mt-1">
            <div class="sh">
                <img class="w-100 h-100" src="http://127.0.0.1:3030/img/${car2[0].img_url}" alt=""/>
                <h5 class="text-center sh2 pt-1 pb-3 d-flex justify-content-center align-items-center">
                    <a href="sport_detail.html">
                        <img class="tx1"
                             src="http://127.0.0.1:3030/img/${car2[0].avatar}" alt=""/>
                    </a>
                    <a href=""><i class="ml-4 fab fa-weibo fa-1-5x"></i></a>
                    <a href=""><i class="ml-4 fab fa-instagram fa-1-5x"></i></a>
                    <a href=""><i class="ml-4 fab fa-weixin fa-1-5x"></i></a>
                    <a class="text-center ml-4 btn" href="">keep follow</a>
                </h5>
            </div>
        </div>
        <div class="position-absolute text-camer">
                <p class="text-white">千万用户伴你训练</p>
                <p class="font-c">Keep 希望创造一个专业、有趣的健身社区<br/>在这里你会找到渴望共同进步的小伙伴。</p>
                <a class="l-style c-58 pt-2 pb-2 pl-3 pr-4 text-white my_small" href="#"><span>社区精选</span></a>
        </div>
        <a href=""><img class="position-absolute cramer-p" src="../img/camera-e92b0dfd3d.png" alt=""/></a>
            <div class="w-20 h-20 overflow bg-3d ml-2 mr-2 mt-1 position-relative dh">
                <div class="sh">
                    <img class="w-100 h-100" src="http://127.0.0.1:3030/img/${car2[1].img_url}" alt=""/>
                    <h5 class="text-center sh2 pt-1 pb-3 d-flex justify-content-center align-items-center">
                        <a href="sport_detail.html">
                            <img class="tx1"
                                 src="http://127.0.0.1:3030/img/${car2[1].avatar}" alt=""/>
                        </a>
                        <a href=""><i class="ml-4 fab fa-weibo fa-1-5x"></i></a>
                        <a href=""><i class="ml-4 fab fa-instagram fa-1-5x"></i></a>
                        <a href=""><i class="ml-4 fab fa-weixin fa-1-5x"></i></a>
                        <a class="text-center ml-4 btn" href="">keep follow</a>
                    </h5>
                </div>
            </div>
            <div class="w-20 h-20 overflow bg-3d ml-2 mr-2 mt-1 position-relative dh2">
                <div class="sh">
                    <img class="w-100 h-100" src="http://127.0.0.1:3030/img/${car2[2].img_url}" alt=""/>
                    <h5 class="text-center sh2 pt-1 pb-3 d-flex justify-content-center align-items-center">
                        <a href="sport_detail.html">
                            <img class="tx1"
                                 src="http://127.0.0.1:3030/img/${car2[2].avatar}" alt=""/>
                        </a>
                        <a href=""><i class="ml-4 fab fa-weibo fa-1-5x"></i></a>
                        <a href=""><i class="ml-4 fab fa-instagram fa-1-5x"></i></a>
                        <a href=""><i class="ml-4 fab fa-weixin fa-1-5x"></i></a>
                        <a class="text-center ml-4 btn" href="">keep follow</a>
                    </h5>
                </div>
            </div>`
            $("#car2").html(html2);
        }
    })
    $(".rb-imgs").on("mouseenter",function(){
        $(".erweima1").css("display","block")
    })
    $(".rb-imgs").on("mouseleave",function(){
        $(".erweima1").css("display","none")
    })
