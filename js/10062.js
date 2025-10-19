function numTow (num) {
    var result;
    if ((num + '').length >= 2)return;
    if (+num <= 9) {
        result = "0" + num;
    } else {
        result = num;
    }
    return result;
}
function changeIndex (dom) {
    $(dom).each(function (i, e) {
        $(e).text(function () {
            return numTow( parseInt($(this).attr("data-slide-index"))+1);
        });
    });
    $(dom).closest('.bx-controls').addClass("change-ready");
}
$(function () {
    $('.bx-wrapper').each(function (i, e) {
        $(e).find('img').each(function (j, k) {
            var sliderImg = new Image();
            sliderImg.src = $(k).attr('src');
            sliderImg.onload = function () {
                changeIndex($(e).find('.bx-pager-link'));
            };
        });
    });
    $(".search-btn").on("click",function(){
        $("#header").addClass("nav_active");
    })

    $(".search-close,.index-mask").on("click",function(){
        $("#header").removeClass("nav_active")
    })

    var p=0;t=0;
    $(window).scroll(function(e){
        p=$(this).scrollTop();
        console.log(p)
        if(t < p){
            $("body").removeClass("wheeldown");

        }else{
            $("body").addClass("wheeldown");
           
        }
        t = p;
    })
    $(window).scroll(function(e){
        $("body").removeClass("openMenu");
    })


})



