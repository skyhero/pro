(function($) {
    $.fn.extend({
        page: function(options) {
            var settings = {
                nowPage:1,
                totalPage:1,
                callback:null,
                callbackNum:null
            };
            $.extend(settings, options);
            var callback = settings.callback;
            var callbackNum = settings.callbackNum;
            var nowPage = settings.nowPage;
            var totalPage = settings.totalPage;
            var prePage;
            var nextPage;
            if(nowPage > 1){
                prePage = nowPage - 1;
            }else{
                prePage = 1;
            }
            if(nowPage >= totalPage){
                nextPage = totalPage;
            }else {
                nextPage = nowPage + 1;
            }
            var html = "";
            if(nowPage > 1){
                html += "<a href='javascript:void(0);' onclick='" + callback + "' val='" + prePage + "' title='上一页'><i class='fa fa-angle-left'></i></a>";
            }
            if(totalPage > 4 && nowPage > 4){
                html += "<a href='javascript:void(0);' onclick='" + callback + "' val='1'>1</a>...";
            }
            if(nowPage == 4){
                html += "<a href='javascript:void(0);' onclick='" + callback + "' val='1'>1</a>";
            }

            for(var index = 1 ; index <= totalPage ;index ++){
                if (index == nowPage) {
                    html += "<a class='next_enter' href='javascript:void(0);'>" + index + "</a>";
                    continue;
                }
                if ((index == totalPage - 1) && (nowPage + 2 < totalPage - 1)) {
                    html += "...";
                    continue;
                }
                if (((index <= nowPage + 2) && (index >= nowPage - 2)) || (index > totalPage - 1)) {
                    html += "<a href='javascript:void(0);' onclick='" + callback + "' val='" + index + "'>" + index + "</a>";
                }
            }

            if (nowPage < totalPage) {
                html += "<a href='javascript:void(0);' onclick='" + callback + "' val='" + nextPage + "'  title='下一页'><i class='fa fa-angle-right'></i></a>";
            }
            html += "   <label>共" + totalPage + "页,</label> <label>到第&nbsp;</label><input type='text' id='nowPage' name='nowPage' pt='" + totalPage + "' value='" + nowPage
                + "' maxlength='3' class='page_choose' onpaste='return false;' /><label>&nbsp;页&nbsp;</label><button type='button' onclick='" + callbackNum + "' val='" + totalPage + "'>跳转</button></td>"

            return this.each(function() {
                $(this).html(html);
            });
        }
    });
})(jQuery);