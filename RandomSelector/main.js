window.onload = function(){
    //document.write("Hello JavaScript");
};
$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
        var image=document.getElementById("img123");
        image.innerHTML="<img src=img"+(randomChildNumber+1)+".jpg>";
    });
});