angular.module('yak', [])
	.component('app', {
		templateUrl: 'src/app.html',
		controller: function() {
			this.yaks = [];
			this.addYak = function(yak) {
				this.yaks.push(yak);
			}
		}
	})
	.component('addYakForm', {
		templateUrl: 'src/addYakForm.html',
		controller: function() {
			this.yak = function() {
				return {name: this.name};
			};
		},
		bindings: {
			onAdd: '&'
		}
	})
	.component('yakList', {
		templateUrl: 'src/yakList.html',
		bindings: {
			yaks: '<'
		}
	})
	.component('yakItem', {
		templateUrl: 'src/yakItem.html',
		bindings: {
			yak: '<'
		}
	});
