const { createApp, reactive, toRefs } = Vue;
const app = {
	setup() {
		const state = reactive({
			Data: {}
		});

		const changeImgColor = (User, i, j) => {
			state.Data[User][i].Pikmins[j].noHave = !state.Data[User][i].Pikmins[j].noHave;
			state.Data[User][i].total = state.Data[User][i].Pikmins.filter(e => !e.noHave).length;

			window.localStorage.setItem("Pikmins", JSON.stringify(state.Data));
		}

		if (window.localStorage.getItem("Pikmins") === null) {
			fetch("./data/init.json")
				.then(res => res.json())
				.then(data => {
					//console.log("Data", data);
					state.Data = data;
				});
		}
		else {
			state.Data = JSON.parse(window.localStorage.getItem("Pikmins"));
		}

		return {
			...toRefs(state),
			changeImgColor
		}
	}
};

createApp(app).mount("#app");