const { createApp, reactive, toRefs } = Vue;
const app = {
	setup() {
		const state = reactive({
			Restaurant: [
				{ img: "Red", isHave: false },
				{ img: "Yellow", isHave: false },
				{ img: "Blue", isHave: false },
				{ img: "White", isHave: false },
				{ img: "Purple", isHave: false },
				{ img: "Pink", isHave: false },
				{ img: "Gray", isHave: false }
			],
			Cafe: [
				{ img: "Red", isHave: false },
				{ img: "Yellow", isHave: false },
				{ img: "Blue", isHave: false },
				{ img: "White", isHave: false },
				{ img: "Purple", isHave: false },
				{ img: "Pink", isHave: false },
				{ img: "Gray", isHave: false }
			]
		});

		const changeImgColor = (Location, index) => {
			if (Location === "Restaurant") {
				state.Restaurant[index].isHave = !state.Restaurant[index].isHave;
			}
			else if (Location === "Cafe") {
				state.Cafe[index].isHave = !state.Cafe[index].isHave;
			}
		}

		return {
			...toRefs(state),
			changeImgColor
		}
	}
};

createApp(app).mount("#app");