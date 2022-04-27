const { createApp, reactive, toRefs } = Vue;
const app = {
   setup() {
      const state = reactive({
         
      });

      return {
         ...toRefs(state)
      }
   }
};

createApp(app).mount("#app");