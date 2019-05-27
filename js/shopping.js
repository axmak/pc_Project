$(function(){
    $(".x-size").on("click",function(){
        $("#canMove").css("display","none");
    })
    $.ajax({
        url:"http://127.0.0.1:3030/product",
        type:"get",
        dataType:"json",
        success: function(product) {
            console.log(product);
            var p1=product.slice(0,4);
            var html="";
            for(var p of p1){
                html+=`<a class="col-3 get-b" href="#">
                <div>
                    <img class="p-z w-100" src="http://127.0.0.1:3030/img/${p.pimg_url}" alt=""/>
                    <p class="mt-3 color-666">${p.pname}</p>
                    <h4 class="price-r">￥${p.price}</h4>
                </div>
            </a>`
            }
            $("#productSell1").html(html);
            var p2=product.slice(4,8);
            var html="";
            for(var p of p2){
                html+=`<a class="col-3 get-b" href="#">
                <div>
                    <img class="p-z w-100" src="http://127.0.0.1:3030/img/${p.pimg_url}" alt=""/>
                    <p class="mt-3 color-666">${p.pname}</p>
                    <h4 class="price-r">￥${p.price}</h4>
                </div>
            </a>`
            }
            $("#productSell2").html(html);
            var p3=product.slice(8,12);
            var html="";
            for(var p of p3){
                html+=`<a class="col-3 get-b" href="#">
                <div>
                    <img class="p-z w-100" src="http://127.0.0.1:3030/img/${p.pimg_url}" alt=""/>
                    <p class="mt-3 color-666">${p.pname}</p>
                    <h4 class="price-r">￥${p.price}</h4>
                </div>
            </a>`
            }
            $("#productSell3").html(html);
            var p4=product.slice(12,16);
            var html="";
            for(var p of p4){
                html+=`<a class="col-3 get-b" href="#">
                <div>
                    <img class="p-z w-100" src="http://127.0.0.1:3030/img/${p.pimg_url}" alt=""/>
                    <p class="mt-3 color-666">${p.pname}</p>
                    <h4 class="price-r">￥${p.price}</h4>
                </div>
            </a>`
            }
            $("#productSell4").html(html);
        }
    })
})