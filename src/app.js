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
	.component('addYakForm', {
		templateUrl: 'src/addYakForm.html',
		bindings: {
			onAdd: '&'
		}
	})
	.component('yakList', {
		templateUrl: 'src/yakList.html',
		bindings: {
			yaks: '<'
		}
	});
