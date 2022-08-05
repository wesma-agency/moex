const login = Vue.createApp({
	data() {
		return {};
	},

	methods: {
		inputFocusIn(e) {
			this.$refs[e.target.getAttribute("data-ref")] ? this.$refs[e.target.getAttribute("data-ref")].classList.add("focus") : null;
		},

		inputFocusOut(e) {
			if (e.target.value.length === 0) {
				this.$refs[e.target.getAttribute("data-ref")] ? this.$refs[e.target.getAttribute("data-ref")].classList.remove("focus") : null;
			}
		},

		showPass(e) {
			if (this.$refs.inputPass) {
				let typeInput = this.$refs.inputPass.getAttribute("type");

				if (typeInput == "text") {
					this.$refs.inputPass.setAttribute("type", "password");
				} else {
					this.$refs.inputPass.setAttribute("type", "text");
				}
			}
		},
	},
});

login.mount(".login");
