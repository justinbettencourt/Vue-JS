new Vue({
        el: '#exercise',
        data: {
			value: 0
		},
		computed: {
			result: function () {
				return this.value > 10 ? 'Done' : 'Less than 10';
			}
		},
		watch: {
			value: function (value) {
				var vm = this;
				setTimeout(function() {
					vm.value = 0;
				}, 5000)
			}
		}
    });