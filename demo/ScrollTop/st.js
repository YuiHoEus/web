$(document).ready(function () {
    $(window).scroll(function () {
        if($('html').scrollTop()>200){
            $('.btn').fadeIn(400)
        }
        else{
            $('.btn').fadeOut(400)
        }
    })
    $('.btn').click(function () {
        $('html').animate({scrollTop:0},1000)
    })
    $('.coco').click(function () {
        alert($('html').scrollTop()+"px")
        $('.qui').fadeToggle(1000)
    })
    
})



