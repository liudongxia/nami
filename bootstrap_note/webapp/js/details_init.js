/**
 * Created by Administrator on 2017/1/7.
 */
var Product =function(store,store_name,naver,logoImg,name,ltitle,describe,price,active,sizes,Images,inventory,productParameter){
    this.store=store;
    this.store_name=store_name;
    this.naver=naver;
    this.logoImg=logoImg;
    this.name=name;
    this.ltitle=ltitle;
    this.describe=describe;
    this.price=price;
    this.active=active;
    this.size=sizes;
    this.Images=Images;
    this.inventory=inventory;
    this.productParameter=productParameter;
};
var productions=[
    new Product("LINING",
        "李宁官网旗舰店",
        ["Nami","lining首页","女子","男子","配件","器材","乐途","liningkid"],
        "resource/Images/lining_logo.png",
        "李宁女鞋2016冬智能云三代跑鞋运动鞋跑步鞋 ARHL064",
        "官方正品 智能 防泼水 减震","①保证专柜正品，支持任何形式验货②送运费险，保您购物无忧③支持七天无理由退换货④团购可开发票⑤送放心淘，退货无忧⑥底价销售，随时涨价，随时涨价，随时涨价，重要的事情说三遍！！！",
        "￥499.00",
        "满99元，包邮",
        [35,35.5,36,36.5,37,38,39,40],
        [{color:"pink",imgSrc:"resource/Images/liningARHL064_pink.jpg"},
            {color:"black",imgSrc:"resource/Images/liningARHL064_black.jpg"},
            {color:"red",imgSrc:"resource/Images/liningARHL064_red.jpg"}
        ],
        30,
        ["产品名称：Lining/李宁 ARHL064","是否商场同款: 是","颜色分类: 世纪紫/荧光莓红 凝雪灰/荧光粉 新基础黑/基础白","款号: ARHL064","品牌: Lining/李宁","上市时间: 2016年冬季","吊牌价: 499","性别: 女子","帮面材质: 纺织品+合成革","外底材料: 橡胶+EVA","适合路面: 跑道","功能: 减震 防水","鞋码: 35 35.5 36 37 37.5 38 39 40","闭合方式: 系带","运动系列: 跑鞋系列","是否瑕疵: 否"]

    ),
    new Product("ANTA",
        "安踏官网旗舰店",
        ["Nami","anta首页","女子","男子","配件","器材","乐途","antakid"],
        "resource/Images/antalogo.png",
        "安踏女鞋跑步鞋2016秋冬季新款气垫鞋综训健身鞋耐磨休闲运动鞋女",
        "安踏官方正品 休闲运动 全掌气垫 专业综训鞋","①保证专柜正品，支持任何形式验货②送运费险，保您购物无忧③支持七天无理由退换货④团购可开发票⑤送放心淘，退货无忧⑥底价销售，随时涨价，随时涨价，随时涨价，重要的事情说三遍！！！",
        "￥319.00",
        "满198元，包邮",
        [35.5,36,36.5,37,37.5,38,38.5,39,40],
        [{color:"pink",imgSrc:"resource/Images/Anta运动鞋_red.png"},
            {color:"blue",imgSrc:"resource/Images/Anta运动鞋_blue.png"},
            {color:"orange",imgSrc:"resource/Images/Anta运动鞋_orange.png"}
        ],
        90,
        ["产品名称：ANTA/安踏 92645502","是否商场同款: 是","颜色分类:天空蓝/深蓝黑 暗紫红/黑 黑/城堡灰","款号: 92645502","品牌: ANTA/安踏","上市时间: 2016年冬季","吊牌价: 449","性别: 女子","帮面材质: 织物","外底材料: 橡胶+EVA+TPU","适合路面: 室内 公路 跑道","运动鞋科技: 气垫 飞线技术","功能: 减震 防滑 耐磨 包裹性 支撑","鞋码: 35.5 36 36.5 37.5 38 38.5 39 40","闭合方式: 系带","运动系列: 跑步系列","是否瑕疵: 否"]
    ),
    new Product("ADIDAS",
        "阿迪达斯官网旗舰店",
        ["Nami","adidas首页","女子","男子","配件","器材","乐途","adidaskid"],
        "resource/Images/adidas_logo.png",
        "adidas阿迪达斯女鞋2016秋冬运动鞋NEO跑鞋轻便缓震跑步鞋AQ1514",
        "包裹性 防滑 减震 平衡 支撑","①保证专柜正品，支持任何形式验货②送运费险，保您购物无忧③支持七天无理由退换货④团购可开发票⑤送放心淘，退货无忧⑥底价销售，随时涨价，随时涨价，随时涨价，重要的事情说三遍！！！",
        "￥398.00",
        "满300元，包邮",
        [35.5,36,36.5,37,37.5,38,38.5,39,40],
        [{color:"pink",imgSrc:"resource/Images/adidasAQ1514_pink.jpg"},
            {color:"green",imgSrc:"resource/Images/adidasAQ1514_green.jpg"},
            {color:"black",imgSrc:"resource/Images/adidasAQ1514.jpg"}
        ],
        150,
        ["产品名称：Adidas/阿迪达斯 2016AQ1514","是否商场同款: 是","颜色分类: 亮白/亮白/玫粉","款号: 2016Q2NE-CL005","品牌: Adidas/阿迪达斯","上市时间: 2016年夏季","吊牌价: 729.00","性别: 女子","鞋帮高度: 中帮","帮面材质: 织物及合成革混合面","鞋底材质: 硫化","功能: 包裹性 耐磨 平衡 轻便 透气 支撑","鞋码: 36 36.5 37 38 38.5 39","运动系列: 运动生活系列","闭合方式: 系带","流行元素: 车缝线","是否瑕疵: 否"]
    ),
    new Product("NIKE",
        "耐克官网旗舰店",
        ["Nami","nike首页","女子","男子","配件","器材","乐途","nikekid"],
        "resource/Images/lining_logo.png",
        "Nike耐克女鞋air max全掌气垫运动鞋 缓震轻便跑步鞋806772- 006",
        "可视气垫 缓震透气 飞线固定 商城正品",
        "①保证专柜正品，支持任何形式验货②送运费险，保您购物无忧③支持七天无理由退换货④团购可开发票⑤送放心淘，退货无忧⑥底价销售，随时涨价，随时涨价，随时涨价，重要的事情说三遍！！！",
        "￥888.00",
        "满500元，包邮",
        [35.5,36,36.5,37,37.5,38,38.5,39,40],
        [{color:"pink",imgSrc:"resource/Images/耐克80677-006.jpg"},
            {color:"blue",imgSrc:"resource/Images/耐克80677-006_blue.png"},
            {color:"gray",imgSrc:"resource/Images/耐克80677-006_gray.jpg"}
        ],
        68,
        ["产品名称：Nike/耐克 806772","是否商场同款: 是","颜色分类: 黑/优雅红 黑/深宝蓝/蓝灰 顶峰白/黑/白","款号: 806772","品牌: Nike/耐克","上市时间: 2015年冬季","吊牌价: 1529","性别: 女子","适合路面: 小道 跑道","运动鞋科技: 气垫 透气技术","功能: 减震 防滑 透气 吸汗 包裹性 轻便","鞋码: 35.5 36 36.5 37.5 38 38.5 39 40","闭合方式: 系带","运动系列: 多功能系列鞋","是否瑕疵: 否"]
    )
];


function initImg(array) {
    var imgArray=[];
    $.each(array,function(index,item){
        var $img=$("<img>");
        $img.attr("src",item.imgSrc).addClass("img-responsive");
        imgArray[imgArray.length]=$img;
    });
    return imgArray;
}


function findProductById(arr, id) {
    for (var index = 0; index < arr.length; index++) {
        if (arr[index].store == id) {
            return arr[index];
        }
    }
}

function renderNavigator(productInfo) {
    var $storeLogoImg = $("<img>");
    $storeLogoImg.attr("src", productInfo.logoImg).addClass("img-responsive");
    $(".store-logo").append($storeLogoImg);
    var $navUl = $("<ul></ul>");
    $navUl.addClass("nav").addClass("nav-pills");
    $.each(productInfo.naver, function (index, item) {
        var $navLi = $("<li></li>");
        var $navA = $("<a></a>");
        $navA.text(item).attr("href", "#");
        $navLi.append($navA);
        $navUl.append($navLi);
    });
    $(".store-naver").append($navUl);
}



function renderMerchantInfo(productInfo) {
    $(".s-name").text(productInfo.store_name);
}



function renderProductImgDetail(productInfo) {
    var $big_img = $("<img>");
    var $sliderDiv = $("<div></div>");
    var siderDiv_width = 232;
    var siderDiv_height = 232;
    var $magnifuingGlassDiv = $("<div></div>");
    var $mnfgd_img = $("<img>");
    var firstImgSrc = productInfo[0].imgSrc;
    $mnfgd_img.attr("src", firstImgSrc);
    $sliderDiv.addClass("slider-Div").css("width", siderDiv_width + "px").css("height", siderDiv_height + "px");
    $magnifuingGlassDiv.addClass("magnifying-glassDiv").append($mnfgd_img);
    $big_img.attr("src", firstImgSrc).addClass("img-responsive");
    $(".buy-img-big").append($big_img).append($sliderDiv);
    $(".buy-message-img").append($magnifuingGlassDiv);
}



function renderProductImgSmall(imgArray) {
    $.each(imgArray, function (index, item) {
        var $div = $("<div></div>");
        var $a = $("<a></a>");
        var $img=$("<img>");
        $img.attr("src",item.imgSrc).addClass("img-responsive");
        $a.append($img).attr("href", "#");
        $div.addClass("col-xs-2").addClass("col-sm-2").addClass("img-small-unit").append($a);
        $(".buy-img-small").append($div);
    });
}


function renderProductPrivilege(productInfo) {
//products price
    var $price_div = $("<div></div>");
    $price_div.addClass("price-style").addClass("col-xs-10").addClass("col-sm-10").text(productInfo.price);
    $(".buy-describe-price").append($price_div);


    //products coupon
    var $coupon_div = $("<div></div>");
    $coupon_div.addClass("Coupon-style").addClass("col-xs-10").addClass("col-sm-10").text(productInfo.active);
    $(".buy-describe-active").append($coupon_div);
}



function renderProduxtDescribe($h1, productInfo, $name_div) {
    $h1.addClass("pull-left").text(productInfo.name);
    $name_div.append($h1).addClass("col-xs-12").addClass("col-sm-12");
    $(".buy-describe-name").append($name_div);


    //products little-title
    var $litleTitle_div = $("<div></div>");
    $litleTitle_div.text(productInfo.ltitle).addClass("col-xs-12").addClass("col-sm-12");
    $(".buy-describe-ltitle").append($litleTitle_div);


    //products describe
    var $describe_div = $("<div></div>");
    $describe_div.text(productInfo.describe).addClass("col-xs-12").addClass("col-sm-12");
    $(".buy-describe-intro").append($describe_div);


    renderProductPrivilege(productInfo);
}





function renderProductSize(productInfo) {
    var $size_div = $("<div></div>");
    var $size_ul = $("<ul></ul>");
    $.each(productInfo.size, function (index, item) {
        var $okImg = $("<img src='resource/Images/ok.png' class='okImg' style='position: absolute;right:0;bottom: 0;display: none;'>");
        var $size_li = $("<li></li>");
        var $size_a = $("<a></a>");
        var $size_span = $("<span></span>");
        $size_span.text(item);
        $size_a.append($size_span).attr("href", "#");
        $size_li.append($size_a).addClass("unselected").addClass("pull-left").addClass("size-li").append($okImg);
        $size_ul.append($size_li);
    });
    $size_ul.children().first().addClass("selected").removeClass("unselected").children(".okImg").css("display", "block");
    $size_div.addClass("col-xs-10").addClass("col-sm-10").append($size_ul);
    $(".buy-describe-size").append($size_div);
}




function renderProductColor(productInfo) {
    var $color_div = $("<div></div>");
    var $color_ul = $("<ul></ul>");
    $.each(productInfo.Images, function (index, item) {
        var $okImg = $("<img src='resource/Images/ok.png' class='okImg' style='position: absolute;right:0;bottom: 0;display: none;'>");
        var $color_li = $("<li></li>");
        var $color_a = $("<a></a>");
        var $color_img = $("<img>");
        $color_img.attr("src", item.imgSrc).addClass("img-responsive").attr("title", item.color);
        $color_a.append($color_img).attr("href", "#");
        $color_li.append($color_a).addClass("unselected").addClass("pull-left").addClass("color-li").append($okImg);
        $color_ul.append($color_li);
    });
    $color_ul.children().first().addClass("selected").removeClass("unselected").children(".okImg").css("display", "block");
    $color_div.addClass("col-xs-10").addClass("col-sm-10").append($color_ul);
    $(".buy-describe-color").append($color_div);
}






var detailManager={
    init:function (id) {
        var productInfo = findProductById(productions.slice(), id);

        renderMerchantInfo(productInfo);
        renderNavigator(productInfo);

        var imgArray=productInfo.Images;

        renderProductImgDetail(imgArray);

        renderProductImgSmall(imgArray);
        //centre part
        //products name

        var $name_div=$("<div></div>");
        var $h1=$("<h1></h1>");
        renderProduxtDescribe($h1, productInfo, $name_div);


        //product size
        renderProductSize(productInfo);


        //product color
        renderProductColor(productInfo);


        //render product's inventory
        $(".inventory").text(productInfo.inventory);
        $(".buy-describe-amount input").attr("max",productInfo.inventory);
        $(".inventory").text(" "+productInfo.inventory+" ");
        $(".buy-describe-amount input").val(1);
        

        //render product parameter

        $.each(productInfo.productParameter,function (index,item) {
            var $li=$("<li></li>");
            $li.text(item);
            $("ul.productInfo").append($li);
        });


        //render product Img
        var imgProductArray = imgArray.slice();
        $.each(imgProductArray,function (index,item) {
            $(".productImg").append(item).append("<hr style='max-width: 100%;'>");
        })

        
    }
};