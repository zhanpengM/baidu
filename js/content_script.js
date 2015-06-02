//此脚本是要注入到要提取QQ号码和QQ名称的页面当中
//window.location = url;

(function(){
    console.log("injected");
    var resOK = {
        data: "ok"
    };

    var resError = {
        data: "no"
    };

	var html = '<div id="myModal" class="modal hide fade">'+
				  '<div class="modal-header">'+
					'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'+
					'<h3>设置</h3>'+
				  '</div>'+
				  '<div class="modal-body">'+
					'<p>One fine body…</p>'+
				  '</div>'+
				  '<div class="modal-footer">'+
					'<button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>'+
					'<button class="btn btn-primary">开始</button>'+
				  '</div>'+
				'</div>';

	$('body').append(html);
	$('#flashContent').hide();
	$("title").html("hello"); 
    chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
        console.log("Request comes from extention ");
        if (request.cmd == "start"){
            sendResponse(resOK);
            console.log("ok ");
        } else if (request.cmd == "stop"){
            sendResponse(resOK);
            console.log("ok ");
        } else if (request.cmd == "init"){
            sendResponse(resOK);
			$('#myModal').modal({backdrop: 'static',keyboard:true, remote:"a.html"});
        } else{
            sendResponse(resError);
            console.log("error ");
        }
    });
})();