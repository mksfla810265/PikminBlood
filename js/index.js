const { createApp, reactive, toRefs } = Vue;
const app = {
   setup() {
      const state = reactive({
         PikminArr: [
            { img: "Red", isHave: false },
            { img: "Yellow", isHave: false },
            { img: "Blue", isHave: false },
            { img: "White", isHave: false },
            { img: "Purple", isHave: false },
            { img: "Pink", isHave: false },
            { img: "Gray", isHave: false }
         ]
      });

      return {
         ...toRefs(state)
      }
   }
};

createApp(app).mount("#app");