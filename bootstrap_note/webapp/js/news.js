/**
 * Created by Administrator on 2017/1/4.
 */
/**
 * Created by Administrator on 2016/12/24.
 */



//news
var News=function(name,text,link){
    this.name=name;
    this.text=text;
    this.link=link;
};

var news=[
    new News("1","伊伴春节迎春大促","#"),
    new News("2","千百度冬靴新品火热系列","#"),
    new News("3","COEY秋冬新品全场2.3折起","#"),
    new News("4","CHANEL冷冬羽绒系列","#"),
    new News("5","伊伴春节迎春大促","#"),
    new News("6","千百度冬靴新品火热系列","#"),
    new News("7","COEY秋冬全场2.3折起","#"),
    new News("8","zara冷冬羽绒系列","#"),
    new News("9","千百度冬靴新品火热系列","#"),
    new News("10","COEY秋冬全场2.3折起","#"),
    new News("11","zara冷冬羽绒系列","#"),
    new News("12","千百度冬靴新品火热系列","#"),
    new News("13","COEY秋冬全场2.3折起","#"),
    new News("14","zara冷冬羽绒系列","#"),
    new News("15","千百度冬靴新品火热系列","#")
];

function newsSwitch() {
    var scroll_area=$("#demo2");
    var speed=1000;
    var timeID;
    scroll_area.hover(function(){
        clearInterval(timeID);
    },function(){
        timeID=setInterval(function(){
            var moveline=scroll_area.find('li:first');
            var lineheight=moveline.outerHeight()+10;
            moveline.animate({marginTop:-lineheight+'px'},1000,function(){
                moveline.css('marginTop',0).appendTo(scroll_area);
            });
        },speed);
    }).trigger('mouseleave');
}

var newsManager={
    srcData:news,
    init:function(){
        var $ul=$("<ul></ul>");
        $.each(this.srcData,function(index,item){
            var $li=$("<li></li>");
            var $a=$("<a></a>");
            var $strong=$("<strong class='hotSale'>[活动]</strong>");
            $a.attr("href",item.link).attr("name",item.name).text(item.text).prepend($strong);
            $li.addClass("pull-left").append($a);
            $ul.append($li).attr("id","demo2");
            $(".small-down").append($ul);
        })
    },

    scroll:function () {
        newsSwitch();
    }
};



