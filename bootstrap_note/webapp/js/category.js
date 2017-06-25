/**
 * Created by Administrator on 2017/1/3.
 */
/**
 * Created by Administrator on 2016/12/21.
 */
var Category=function(name,isHot,subcate,link){
    this.name=name;
    this.isHot=isHot;
    this.subcate=subcate;
    this.link=link;
};

var categories=[
    new Category("男装",false,undefined,"#"),
    new Category("女装",false,undefined,"#"),
    new Category("内衣",false,undefined,"#"),
    new Category("手办",false,undefined,"#"),
    new Category("鲜花",false,undefined,"#"),
    new Category("宠物",false,undefined,"#"),
    new Category("男装",false,undefined,"#"),
    new Category("女装",false,undefined,"#"),
    new Category("内衣",false,undefined,"#"),
    new Category("手办",false,undefined,"#"),
    new Category("鲜花",false,undefined,"#"),
    new Category("宠物",false,undefined,"#"),
    new Category("男装",false,undefined,"#"),
    new Category("女装",false,undefined,"#"),
    new Category("内衣",true,undefined,"#"),
    new Category("手办",false,undefined,"#"),
    new Category("鲜花",false,undefined,"#"),
    new Category("宠物",false,undefined,"#"),
    new Category("男装",true,undefined,"#"),
    new Category("女装",false,undefined,"#"),
    new Category("内衣",false,undefined,"#"),
    new Category("手办",false,undefined,"#"),
    new Category("鲜花",false,undefined,"#"),
    new Category("内衣",false,undefined,"#"),
    new Category("手办",false,undefined,"#"),
    new Category("鲜花",false,undefined,"#"),
    new Category("宠物",false,undefined,"#"),
    new Category("男装",false,undefined,"#"),
    new Category("女装",false,undefined,"#"),
    new Category("内衣",true,undefined,"#"),
    new Category("手办",false,undefined,"#"),
    new Category("鲜花",false,undefined,"#"),
    new Category("宠物",false,undefined,"#"),
    new Category("男装",true,undefined,"#"),
    new Category("女装",false,undefined,"#"),
    new Category("内衣",false,undefined,"#"),
    new Category("手办",false,undefined,"#"),
    new Category("鲜花",false,undefined,"#"),
    new Category("男装",true,undefined,"#"),
    new Category("女装",false,undefined,"#"),
    new Category("内衣",false,undefined,"#"),
    new Category("手办",false,undefined,"#"),
    new Category("鲜花",false,undefined,"#"),
    new Category("内衣",false,undefined,"#"),
    new Category("手办",false,undefined,"#"),
    new Category("鲜花",false,undefined,"#"),
    new Category("宠物",false,undefined,"#"),
    new Category("男装",false,undefined,"#"),
    new Category("女装",false,undefined,"#"),
    new Category("内衣",true,undefined,"#"),
    new Category("手办",false,undefined,"#"),
    new Category("鲜花",false,undefined,"#"),
    new Category("宠物",false,undefined,"#"),
    new Category("宠物",false,undefined,"#")
];

function initCategory (){
    var count = 1;
    var $li = $("<li></li>");
    function renderCtgy(item) {
        var $ctgy = $("<a></a>");
        $ctgy.text(item.name+" ");
        if (item.isHot === true) {
            $ctgy.addClass("hotSale");
        }
        $ctgy.attr("href", item.link);
        $li.append($ctgy);
    }

    $.each(categories, function (index, item) {
        if(count<3){
            renderCtgy(item);
            count++;
        }else  {
            var $span_1=$("<span></span>");
            var $span_2=$("<span></span>");
            $span_1.addClass("icon-angle-right").addClass("icon-large").addClass("pull-right").css("line-height","1.3");
            $span_2.addClass("icon-gift");
            renderCtgy(item);
            $li.append($span_1).prepend($span_2);
            $(".left-menu").append($li).append("<br/>");
            count = 1;
            $li =  $("<li></li>");
        }
    })
}