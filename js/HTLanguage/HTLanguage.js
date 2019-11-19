 (function (window) {

     var ht = Language = function () {
        return Language.prototype; //返回类的原型
     }  
     var scriptObjs = document.scripts;
     var currentPath = scriptObjs[scriptObjs.length - 1].src.substring(0, scriptObjs[scriptObjs.length - 1].src.lastIndexOf("/") + 1);

     var lanurl = currentPath + "Language.json";
     Language.fn = Language.prototype = {
         version: "0.0.1" //原型属性
     }
     
     //取Cookie设置语言
     $('[set-lan]').each(function () {
         var me = $(this);
         var a = me.attr('set-lan').split(':');
         var p = a[0]; //文字放置位置
         var m = a[1]; //文字的标识
         var currentlanguage = '';
         //用户选择语言后保存在cookie中，这里读取cookie中的语言版本
         var lan = getCookie('lan');
         //选取语言文字
        //  var lanurl = "/js/HTLanguage/" + "LAN.json";
         readJSON(lanurl, function (res) {
             let data = JSON.parse(res);
            //  console.log(data); 
            switch (lan) {
                case 'CN':
                    currentlanguage = data.Default[0];
                    break;
                case 'EN':
                    currentlanguage = data.EN[0];
                    break;
                default:
                    currentlanguage = data.Default[0];
            }
             if (currentlanguage == '') currentlanguage = data.Default[0];
            //  console.log(currentlanguage);
             var t = currentlanguage[m]; //这里cn[m]中的cn是上面定义的json字符串的变量名，m是json中的键，用此方式读取到json中的值
             if (t == undefined) return true; //如果没有就跳出
             switch (p) {
                 case 'html':
                     me.html(t);
                     break;
                 case 'val':
                 case 'value':
                     me.val(t);
                     break;
                 default:
                     me.html(t);
             }
         });
     });

function readJSON(file, callback) {
    let ajax = new XMLHttpRequest();
    ajax.overrideMimeType("application/json");
    ajax.open("GET", file, false);
    ajax.onreadystatechange = function () {
        if (ajax.readyState === 4 && ajax.status == "200") {
            callback(ajax.responseText);
        }
    }
    ajax.send(null);
     }
     //JS中获取获取文字
     Language.getsting = function getsting(m) {
         //获取文字
         var lan = getCookie('lan'); //语言版本
         var t;
         //选取语言文字
         readJSON(lanurl, function (res) {
                     let data = JSON.parse(res);
                     switch (lan) {
                         case 'CN':
                             currentlanguage = data.Default[0];
                             break;
                         case 'EN':
                             currentlanguage = data.EN[0];
                             break;
                         default:
                             currentlanguage = data.Default[0];
                     }
                     if (currentlanguage == '') currentlanguage = data.Default[0];
                     //  console.log(currentlanguage);
                    t = currentlanguage[m]; //这里的currentlanguage是json字符串的变量名，m是json中的键，用此方式读取到json中的值          
         });
          if (t == undefined) t = m; //如果还是没有就返回他的标识
          return t;
     }
     //写入cookie函数
     Language.setCookie = function setCookie(name, value) {
         var Days = 30;
         var exp = new Date();
         exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
         document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
     }

     //获取cookie
     function getCookie(name) {
         var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
         if (arr = document.cookie.match(reg))
             return unescape(arr[2]);
         else
             return null;
     }
          
      //开放接口
      window.Language = window.ht = Language;
      })(window)