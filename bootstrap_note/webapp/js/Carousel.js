/**
 * Created by Administrator on 2017/1/3.
 */
/**
 * Created by Administrator on 2016/12/24.
 */

//largeScreenData
var Imgcarousel=function(imgSrc,title,link){
    this.imgSrc=imgSrc;
    this.title=title;
    this.link=link;
};

var carouselImgs=[
    new Imgcarousel("resource\\Images\\active_1.jpg","年末清仓季3折起-土豪bye bye!!","https://s.taobao.com/search?spm=a21id.103458.512537.31.lzOxUi&q=%E8%BF%90%E5%8A%A8%E9%9E%8B+%E9%85%B7%E5%8A%A8%E5%9F%8E&imgfile=&commend=all&ssid=s5-e&search_type=item&sourceId=tb.index&ie=utf8&initiative_id=tbindexz_20161213"),
    new Imgcarousel("resource\\Images\\active_2.jpg","萌娃年礼逛逛抢-99抢福袋","https://www.taobao.com/markets/promotion/qbbnhj?spm=a21bo.50862.201862-1.d1.RvK9or&pos=1&acm=20140506001.1003.2.1442061&scm=1003.2.20140506001.OTHER_1482424958656_1442061"),
    new Imgcarousel("resource\\Images\\active_3.jpg","原创新品-专业健身瑜伽服饰","https://tanboge.tmall.com/?ali_trackid=30_7d51ffed23b95ce618e3a93fdc46ce3c&spm=a21bo.50862.201862-2.1.nVsT6Z"),
    new Imgcarousel("resource\\Images\\active_4.jpg","女神潮流穿搭上新了-低价疯抢中","https://guang.taobao.com/ifashion/qiangxin.htm?spm=a21bo.50862.201862-5.d1.5Pfusv&pos=1&acm=20140506002.1003.2.1448039&scm=1003.2.20140506002.OTHER_1482782579433_1448039"),
    new Imgcarousel("resource\\Images\\active_5.jpg","古装写真全新主题-5折抢订","https://gusheying.tmall.com/p/rd370878.htm?ali_trackid=17_5ed855dd24d375cb58f5977e201bca90&spm=a21bo.50862.201862-2.1.RvK9or")
];

var imgManager={
    srcData:carouselImgs,
    init:function(){
        var $div=$("<div></div>");
        var $ul=$("<ul></ul>");
        $.each(carouselImgs,function (index,item) {
            var $img=$("<img>");
            var $li=$("<li></li>");
            var $a=$("<a></a>");
            $img.attr("src",item.imgSrc).addClass("img-responsive").attr("title",item.title);
            $a.attr("href",item.link).append($img);
            $li.addClass("pull-left").addClass("li-carousel").append($a);
            $ul.addClass("ul-carousel").append($li);
            $div.addClass("img-carousel").append($ul);
        });
        return $div;
    },
    switch:function($index){
        var left;
        var step=-$(".li-carousel").outerWidth();
        left=$index*step;
        $(".ul-carousel").animate({"left": left+"px"},"fast");
    }
};

var titleManager={
    srcData:carouselImgs,
    init:function () {
        var $div=$("<div></div>");
        var $ul=$("<ul></ul>");
        $.each(carouselImgs,function (index,item) {
            var $li=$("<li></li>");
            var $span=$("<span></span>");
            $span.text(item.title).css("font-size","12px");
            $li.addClass("pull-left").addClass("li-tag").append($span);
            $ul.addClass("ul-tag").append($li);
            $div.addClass("tag-control").append($ul);
        });
        return $div;
    },
    switch:function ($index) {
        $(".li-tag").eq($index).addClass("li-current").siblings().removeClass("li-current");
    }
};

var carouselManager = {
    init:function () {
    var $div_img=imgManager.init();
    var $div_tag=titleManager.init();
    $(".adv-carousel").append($div_img).append("<span class='prev icon-chevron-left'></span>").append("<span class='next icon-chevron-right' ></span>").append($div_tag);
    },
    switch:function () {
        var $index=0;
        var $exdex=0;
        var timeID;
        var len=$(".li-tag").length-1;
        $(".prev").click(function(){
            clearInterval(timeID);
            $index--;
            if($index<0){
                $index=len;
            }
            imgManager.switch($index);
            titleManager.switch($index);
            timeID=setInterval(function(){
                $(".next").click()
            },3000);
            return $exdex=$index;
        });
        $(".next").click(function(){
            clearInterval(timeID);
            $index++;
            if($index>len){
                $index=0;
            }
            imgManager.switch($index);
            titleManager.switch($index);
            timeID=setInterval(function(){
                $(".next").click()
            },3000);
            return $exdex=$index;
        });

        $(".ul-carousel").hover(function () {
            clearInterval(timeID);
        },function () {
            timeID=setInterval(function(){
                $(".next").click()
            },3000);
        }).trigger('mouseleave');
        $(".li-tag").click(function (){
            $index=$(this).index();
            imgManager.switch($index);
            titleManager.switch($index);
            return $index;
        });
    }
};




