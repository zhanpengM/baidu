document.addEventListener('DOMContentLoaded', function () {

//   获取数据
     var data = chrome.extension.getBackgroundPage().obj;
     var bg = chrome.extension.getBackgroundPage();



       // console.log(data.title);
        //$("#content").text(data.title);
     $("#start").click(function () {
         /*chrome.tabs.executeScript(null, {code:"alert(呵呵)"});*/

         alert("start");
     });

        /*var ul = $("#member");
        for(var i=0; i<data.member.length; i++){
            var li = $("<li></li>");
            li.text(data.member[i]);
            ul.append(li);
        }*/
});


