angular.module('yak', [])
	.component('app', {
		templateUrl: 'src/app.html',
		controller: function() {
			this.addYak = function(name) {
				console.log('Add yak: ' + name);
			}
		}
	})
	.component('addYak', {
		templateUrl: 'src/addYak.html',
		bindings: {
			onAdd: '&'
		}
	});
