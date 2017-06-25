/**
 * Created by Administrator on 2017/1/3.
 */
$(function () {
    var $headDiv=$(".panel-title>div");
    var $bodydiv=$(".panel-body>div");
    $headDiv.click(function(){
        var $this=$(this);
        var $t=$(this).index();
        $this.addClass("onShow").removeClass("onHide").children("div").css("display","block");
        $this.siblings().addClass("onHide").removeClass("onShow").children("div").css("display","none");
        $bodydiv.css("display","none");
        $bodydiv.eq($t).css("display","block")
    });

});