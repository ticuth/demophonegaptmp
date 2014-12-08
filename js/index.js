var app = {
	initialize: function(){
		app.bindEvents();
	},
	bindEvents: function(){
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	onDeviceReady: function () {
		alert('ok');
	}
}