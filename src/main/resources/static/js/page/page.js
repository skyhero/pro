(function($) {
    $.fn.extend({
        page: function(options) {
            var settings = {
                nowPage:1,
                totalPage:1,
                callback:null
            };
            $.extend(settings, options);
            var callback = settings.callback;
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
                ht
            }

            var a = "";


            if (nowpage == 4) {
                a += "<a href='javascript:void(0);' onclick='" + callback + "' val='1'>1</a>";
            }
            for (var i = 1; i <= totalPage; i++) {
                if (i == nowpage) {
                    a += "<a class='next_enter' href='javascript:void(0);'>" + i + "</a>";
                    continue;
                }
                if ((i == totalPage - 1) && (nowpage + 2 < totalPage - 1)) {
                    a += "...";
                    continue;
                }
                if (((i <= nowpage + 2) && (i >= nowpage - 2)) || (i > totalPage - 1)) {
                    a += "<a href='javascript:void(0);' onclick='" + callback + "' val='" + i + "'>" + i + "</a>";
                }
            }
            ;
            if (nowpage < totalPage) {
                a += "<a href='javascript:void(0);' onclick='" + callback + "' val='" + (nowpage + 1) + "'  title='下一页'><i class='fa fa-angle-right'></i></a>";
            }
            a += "   <label>共" + totalPage + "页,</label> <label>到第&nbsp;</label><input type='text' id='nowPage' name='nowPage' pt='" + totalPage + "' value='" + nowpage + "' maxlength='3' class='page_choose' onpaste='return false;' /><label>&nbsp;页&nbsp;</label><button type='button' onclick='" + callbackNum + "' val='" + totalPage + "'>跳转</button></td>"
            a+="<input type='hidden' name='sort' value='"+sort+"' id='sort'/><input type='hidden' name='asc' value='"+asc+"' id='asc'/>";
            pageId.html(a);



            return this.each(function() {
                $(this).val(content);
                $(this).click(function () {
                    alert(show);
                })
            });

        }
    });
})(jQuery);