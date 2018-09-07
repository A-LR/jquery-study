$(function () {
    $li = $(".wrap>ul>li");
    $li.mouseover(function () {
        $(this).children("ul").show();
    });
    $li.mouseout(function () {
        $(this).children("ul").hide()
    });
});