var start = false;

function setStart() {
	alert("send start");

	chrome.tabs.query({active: true, currentWindow: true}, 
		function(tabs) {  
			chrome.tabs.sendMessage(tabs[0].id, {cmd: "start"}, 
				function(response) {    
					console.log(response.data);  
			}); 
	});
	isStart = true;
}

function setStop() {
	alert("send stop");
	chrome.tabs.query({active: true, currentWindow: true}, 
		function(tabs) {  
			chrome.tabs.sendMessage(tabs[0].id, {cmd: "stop"}, 
				function(response) {    
					console.log(response.data);  
			}); 
	});
    isStart = false;
}

function init() {
	chrome.tabs.query({active: true, currentWindow: true}, 
		function(tabs) {  
			chrome.tabs.sendMessage(tabs[0].id, {cmd: "init"}, 
				function(response) {    
					console.log(response.data);
			}); 
	});
    isStart = false;
}

chrome.contextMenus.create({
    title : "设置",
    type : "normal", //菜单项类型 "checkbox", "radio","separator"
    contexts : ["all"],
    onclick:init
});