<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="/js/page/bootstrap.css">
    <link rel="stylesheet" href="/js/page/page.css">
    <script src="/js/jquery-1.11.1.min.js"></script>
    <script src="/js/page/page.js"></script>
</head>
<body>
<i class='fa fa-angle-left'></i>
<div></div>
<a><i class="fa fa-angle-left" aria-hidden="true"></i></a>
<a onclick="fun(1)"><i class='fa fa-angle-left'></i></a>
<a onclick="fun(1)"><i class='fa fa-angle-left'></i></a>

<div></div>
<div id="page"></div>

<script src="/js/page/page.js"></script>
<script>
    $("#page").page({
        nowPage:10,
        totalPage:20,
        callback:fun(1),
        callbackNum:fun(2)
    });

    function fun(num) {

    }

</script>
</body>
</html>