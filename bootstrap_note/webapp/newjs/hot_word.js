(function () {
    function HotWord(obj) {
        this.word = obj.word;
        this.link = obj.link;
        this.active = obj.active||false;
        this.render = function () {
            var $div=$("<div></div>");
            var $a=$("<a></a>");
            $div.addClass("pull-left").css("margin-right","20px");
            $a.attr("href",this.link).css("font-size","10px").append(this.word);
            if(this.active){
                $a.addClass("hotSale");
            }
            $div.append($a);
            return $div;
        }
    }

    var hotWordManager = {
        getHotWords: function () {
            function getFromJson(url) {
                $.ajaxSettings.async = false;
                var d=$.getJSON(url);
                $.ajaxSettings.async = true;
                return d.responseJSON;

            }

            var hotwords = getFromJson("json/hot_word.json");
            var result = [];

            $.each(hotwords, function (index,item) {
                result.push(new HotWord(item));
            });

            return result;
        }
    };

    var hotWordView = {
        init: function () {
            var hotwords = hotWordManager.getHotWords();
            this.render(hotwords);
        },
        render: function (hotwords) {
            if(!hotwords[0] instanceof HotWord){
                throw new Error();
            }

            function getContainer() {
                return $(".sousuo");
            }

            var container = getContainer();

            $.each(hotwords, function (index,item) {
                container.append(item.render());
            });
        }
    };


    $(function () {
        hotWordView.init();
    });
})();