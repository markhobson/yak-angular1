angular.module('yak', [])
	.component('app', {
		templateUrl: 'src/app.html',
		controller: function() {
			this.yaks = [];
			this.addYak = function(name) {
				this.yaks.push(name);
			}
		}
	})
	.component('addYak', {
		templateUrl: 'src/addYak.html',
		bindings: {
			onAdd: '&'
		}
	})
	.component('yaks', {
		templateUrl: 'src/yaks.html',
		bindings: {
			yaks: '<'
		}
	});
