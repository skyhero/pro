<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="/js/jquery-1.11.1.min.js"></script>
    <script src="/js/bootstrap.min.js"></script>

    <style type="text/css">
        .tabbable {
            margin-right: 0;
            margin-left: 0;
            background-color: #fff;
            border-color: #ddd;
            border-width: 1px;
            border-radius: 4px 4px 0 0;
            -webkit-box-shadow: none;
            box-shadow: none;
        }
        .nav-tabs {
            border-bottom: 1px solid #ddd;
        }
        .nav {
            padding-left: 0;
            margin-bottom: 0;
            list-style: none;
        }
        .nav-tabs>li {
            float: left;
            margin-bottom: -1px;
        }
        .nav>li {
            position: relative;
            display: block;
        }
        * {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }
        li {
            display: list-item;
            text-align: -webkit-match-parent;
        }
    </style>
</head>
<body>

<div  class="tabbable">
<ul id="myTab" class="nav nav-tabs">
    <li class="active">
        <a href="#tab1" data-toggle="tab">
            基本信息
        </a>
    </li>
    <li>
        <a href="#tab2" data-toggle="tab">
            商品属性
        </a>
    </li>
    <li>
        <a href="#tab3" data-toggle="tab">
            商品参数
        </a>
    </li>
    <li id="uploadTag">
        <a href="#tab4" data-toggle="tab">
            商品图片
        </a>
    </li>
    <li>
        <a href="#tab5" data-toggle="tab">
            商品描述
        </a>
    </li>
    <li>
        <a href="#tab6" data-toggle="tab">
            商品规格
        </a>
    </li>
</ul>
</div>

<div id="page"></div>
<input id="text" style="display: none">
<button id="but">确定</button>

<script src="/js/page/page.js"></script>
<script>
    /*$("#page").page({
        nowPage:3,
        totalPage:6
    });*/
    $("#but").click(function () {
        $("#text").css("display","block");
    })
</script>
</body>
</html>