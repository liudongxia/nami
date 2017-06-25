/**
 * Created by Administrator on 2016/12/30.
 */
$(function(){
    var $small=$(".buy-img-big");
    var $slider=$(".slider-Div");
    var $big=$(".magnifying-glassDiv");
    var $bigImg=$(".magnifying-glassDiv img:eq(0)");
    var sliderWidth=$slider.outerWidth();
    var sliderHeight=$slider.outerHeight();
    var smallWidth=$small.outerWidth();
    var smallHeight=$small.outerHeight();
    var bigWidth=$big.outerWidth();
    var bigHeight=$big.outerHeight();
    $small.mousemove(function(e){
        var even = e || event;
        var x = even.pageX - $small.offset().left - $slider.outerWidth(false)/2;
        var y = even.pageY - $small.offset().top- $slider.outerHeight(false)/2;
        var maxX = $small.innerWidth() - $slider.innerWidth()-10;
        //竖直方向的最大值
        var maxY = $small.innerHeight() - $slider.innerHeight();
        $bigImg.css("width",bigWidth*(smallWidth/sliderWidth)+"px").css("height",bigHeight*(smallHeight/sliderHeight)+"px");
        if(x<0){
            //相当于超出左侧,超出左侧时,拉回
            x=0;
        }
        //超出右侧时拉回
        if(x>maxX){
            x = maxX;
        }
        //顶部超出
        if(y<0){
            y=0;
        }
        //底部超出
        if(y>maxY){
            y = maxY;
        }
        $slider.css("top",y+"px");
        $slider.css("left",x+"px");
        //放大的图片的主要实现代码:一个比例计算
        var l_x=x/maxX * ($bigImg.innerWidth() - $big.innerWidth());
        var t_y=y/maxY * ($bigImg.innerHeight() -$big.innerHeight());
        $big.scrollLeft(l_x);
        $big.scrollTop(t_y);
    });
    //鼠标移入事件
    $small.mouseenter(function(){
        $slider.css("display","block");
        //右侧的大图区域显示出来图片
        $big.css("display","block").css("z-index",1000);
    });
    $small.mouseleave(function(){
        $slider.css("display","none");
        //右侧的大图区域显示出来图片
        $big.css("display","none").css("z-index",-100);
    })

});