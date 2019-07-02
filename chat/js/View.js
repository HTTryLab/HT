/*本类负责页面的显示*/


//闭包
var TalkView = (function($) {
	var TalkViewCalss = function() {
		//滚动条
		$('#message_box').scrollTop($("#message_box")[0].scrollHeight + 20);
		$('.uname').hover(
	    function(){
		    $('.managerbox').stop(true, true).slideDown(100);
	    },
		function(){
		    $('.managerbox').stop(true, true).slideUp(100);
		}
	);
	}
	TalkViewCalss.prototype = {
		//机器人的回的消息显示在页面上
		robotSendMessage: function(msg) {

			var htmlData = '<div class="msg_item fn-clear">' +
				'   <div class="rface"><img src="images/timg.jpg" width="40" height="40"  alt=""/></div>' +
				'   <div class="item_right">' +
				'     <div class="robotMsg own">' + msg + '</div>' +
				' <div class="name_r">机器人</div> ' +
				'   </div>' +
				'</div>';
			$("#message_box").append(htmlData);
			$('#message_box').scrollTop($("#message_box")[0].scrollHeight + 20);
			$("#message").val('');
		},
		//用户发的消息显示在页面上
		userSendMessage: function(msg) {

			var htmlData = '<div class="msg_item fn-clear">' +
				'   <div class="uface"><img src="images/HT.PNG" width="40" height="40"  alt=""/></div>' +
				'   <div class="item_left">' +
				'     <div class="userMsg own">' + msg + '</div>' +
				' <div class="name_u">用户</div> ' +
				'   </div>' +
				'</div>';
			$("#message_box").append(htmlData);
			$('#message_box').scrollTop($("#message_box")[0].scrollHeight + 20);
			$("#message").val('');
		}
	}
	return TalkViewCalss;

})(jQuery)