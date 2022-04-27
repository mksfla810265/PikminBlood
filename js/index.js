const { createApp, reactive, toRefs } = Vue;
const app = {
	setup() {
		const state = reactive({
			Restaurant: {
				Pikmins: [
					{ img: "Red", noHave: true },
					{ img: "Yellow", noHave: true },
					{ img: "Blue", noHave: true },
					{ img: "White", noHave: true },
					{ img: "Purple", noHave: true },
					{ img: "Pink", noHave: true },
					{ img: "Gray", noHave: true }
				],
				total: 0
			},
			Cafe: {
				Pikmins: [
					{ img: "Red", noHave: true },
					{ img: "Yellow", noHave: true },
					{ img: "Blue", noHave: true },
					{ img: "White", noHave: true },
					{ img: "Purple", noHave: true },
					{ img: "Pink", noHave: true },
					{ img: "Gray", noHave: true }
				],
				total: 0
			}
		});

		const changeImgColor = (Location, index) => {
			state[Location].Pikmins[index].noHave = !state[Location].Pikmins[index].noHave;

			let count = 0;
			for (const item of state[Location].Pikmins) {
				if (item.noHave === false) {
					count++;
				}
			}
			state[Location].total = count;
		}

		return {
			...toRefs(state),
			changeImgColor
		}
	}
};

createApp(app).mount("#app");