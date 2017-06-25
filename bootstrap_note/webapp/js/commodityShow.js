/**
 * Created by Administrator on 2016/12/24.
 */

//commodityShow

var CommodityImg=function(name,title,src,link){
    this.name=name;
    this.title=title;
    this.src=src;
    this.link=link;
};

var commodityImgs=[
    new CommodityImg("1","NIKE","resource\\Images\\耐克80677-006_gray.jpg","#"),
    new CommodityImg("2","ANTA","resource\\Images\\Anta运动鞋_red.png","#"),
    new CommodityImg("3","ADIDAS","resource\\Images\\adidasAQ1514_green.jpg","#"),
    new CommodityImg("4","LINING","resource\\Images\\liningARHL064_pink.jpg","#")
];
function initcomdtImg(){
    $.each(commodityImgs,function(index,item){
        var $div=$("<div></div>");
        var $a=$("<a></a>");
        var $sub_a=$("<a></a>");
        var $comdtImg=$("<img />");
        var $subDiv=$("<div></div>");
        $div.addClass("img-unit").addClass("col-xs-3").addClass("col-sm-3");
        $sub_a.text(item.title);
        $subDiv.addClass("tag-unit").append($sub_a);
        $comdtImg.attr("src",item.src).addClass("img-responsive");
        $a.attr("href",item.link).attr("name",item.name).append($comdtImg);
        $div.append($a).append($subDiv).attr("id",item.title);
        $(".com-img").append($div);
    })

}
var $da=$("<a></a>");
var $downDiv=$("<div></div>");
var $btn=$("<button>去看看</button>");
$btn.addClass("center");
$da.attr("href","#").append($btn);
$downDiv.addClass("displayDiv").append($da);
function showDiv(){
    $(this).append($downDiv).siblings().remove("div.displayDiv");
}
function hideDiv(){
    $($downDiv).remove();
}
