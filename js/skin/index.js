$(function(){  
    var oBg = $("#bg");                //css链接的id  
    var skin = 'skin';                //localStorage的key  
    svalue = localStorage.getItem(skin);  
  
  
    //如果有localStorage中有数据就用localStorage中的数据  
    if(svalue){  
        oBg.attr('href', "js/skin/css/skin_" + svalue + ".css");
    }  
    $("#default").click(function () {
        skin_value = $(this).attr("id"); //red  
        localStorage.setItem(skin,skin_value);       //存到数据库  
        oBg.attr('href', "js/skin/css/skin_" + skin_value + ".css");
    });  
  
    $("#blue").click(function(){  
        skin_value = $(this).attr("id"); //blue  
        localStorage.setItem(skin,skin_value);       //存到数据库  
        oBg.attr('href', "js/skin/css/skin_" + skin_value + ".css");
    });  
  
    $("#brown").click(function () {
        skin_value = $(this).attr("id"); //green  
        localStorage.setItem(skin,skin_value);       //存到数据库  
        oBg.attr('href', "js/skin/css/skin_" + skin_value + ".css");
    });  
  
});  