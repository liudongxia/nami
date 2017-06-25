(function () {

    function getIndex () {
        return ($(this).index());
    }

    function Carousel(dataSrc) {
        this.src = dataSrc.url;
        this.link = dataSrc.targetUrl;
        this.desc = dataSrc.desc;
        this.renderImg = function () {
            var $li=$("<li></li>");
            var $a=$("<a></a>");
            var $img=$("<img>");
            $img.addClass("img-responsive").attr("src",this.src).attr("original-title",this.desc);
            $a.attr("src",this.link).append($img);
            $li.addClass("pull-left").addClass("li-carousel").append($a);
            return $li;
        };
        this.renderTitle = function () {
            var $li=$("<li></li>");
            var $span=$("<span></span>");
            $span.append(this.desc).css("font-size","12px");
            $li.addClass("pull-left").addClass("li-tag").append($span);
            return $li;
        }
    }

    function ImgManager(dataSrc) {
        var imgElements = [];
        this.render = function (container) {
            var $div=$("<div></div>");
            var $ul=$("<ul></ul>");
            $ul.addClass("ul-carousel");
            $.each(dataSrc,function (index,item) {
                var $img=item.renderImg();
                $ul.append($img);
                imgElements.push($img);
            });
            $div.addClass("img-carousel").append($ul);
            container.append($div)
        };
        this.switch = function (index) {
            var left;
            var step=-$(".li-carousel").outerWidth();
            left=index*step;
            $(".ul-carousel").animate({"left": left+"px"},"fast");

        };
    }

    function TitleManager(dataSrc) {
        var titleElements = [];
        this.render = function (container,titleManager,imgManager) {
            var $div=$("<div></div>");
            var $ul=$("<ul></ul>");
            $ul.addClass("ul-tag");
            $.each(dataSrc,function (index,item) {
                var $title = item.renderTitle();
                if(index==0){
                    $title.addClass("li-current");
                }
                $ul.append($title);
                titleElements.push($title);
                $title.on("click",function () {
                    var $index=getIndex.call(this);
                    imgManager.switch($index);
                    titleManager.switch($index);
                })

            });
            $div.addClass("tag-control").append($ul);
            container.append($div)
        };
        this.switch = function (index) {
            $(".li-tag").eq(index).addClass("li-current").siblings().removeClass("li-current");

        };
    }

    function ArrowManager(imgManager, titleManager) {
        this.render = function (container) {
            var $prev=$("<span class='prev icon-chevron-left'></span>");
            var $next=$("<span class='next icon-chevron-right' ></span>");
            $prev.on("click",prev);
            $next.on("click",next);
            container.append($prev).append($next);
        };

        function prev(){
            var len=$(".li-tag").length-1;
            var $index=$(".li-current").index();
            $index--;
            if($index<0){
                $index=len;
            }
            imgManager.switch($index);
            titleManager.switch($index);

        }

        function next() {
            var len=$(".li-tag").length-1;
            var $index=$(".li-current").index();
            $index++;
            if($index>len){
                $index=0;
            }
            imgManager.switch($index);
            titleManager.switch($index);
        }
    }

    var imgManager = {};
    var titleManager = {};
    var arrowManager = {};

    var carouselManager = {
        getDataObj: function () {
            function getFromJson(url) {
                $.ajaxSettings.async = false;
                var d=$.getJSON(url);
                $.ajaxSettings.async = true;
                return d.responseJSON;

            }

            var carouselJson=getFromJson("json/carousel_img.json");
            var objArr=[];
            $.each(carouselJson,function (index,item) {
                objArr.push(new Carousel(item))
            });

            return objArr;
        }
    };

    var carouselView = {
        init: function () {
            this._render(carouselManager.getDataObj());
        },

        _render: function (data) {
            var container = this._getContainer();
            imgManager = new ImgManager(data);
            titleManager = new TitleManager(data);
            imgManager.render(container);
            titleManager.render(container,titleManager,imgManager);

            arrowManager = new ArrowManager(imgManager, titleManager);
            arrowManager.render(container);
        },

        _getContainer: function () {
            return $(".adv-carousel");
        }
    };


    $(function () {
        carouselView.init();
    });

})();