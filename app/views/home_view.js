var View = require('./view');
var template = require('./templates/home');
var application = require('application');

module.exports = View.extend({
	id: 'home-view',
	template: template,
	initialize: function() {
		this.sec = 0;
		this.millisec = 0;
		
		var view = this
	//	setInterval(function() { view.millisec += 100; if(view.millisec == 1000) { view.sec += 1; view.millisec = 0;}; view.render() }, 100)
	},
	getRenderData: function() {
		return {sec: this.sec, millisec: this.millisec}
	}
});
