import { createApp } from 'vue';
import app from "./App.vue";
import BaseCard from "./component/UI/BaseCard.vue";
import BaseButton from "./component/UI/BaseButton.vue";
import BaseDialog from "./component/UI/BaseDialog.vue"
const App = createApp(app);
App.component('base-card', BaseCard);
App.component('base-button', BaseButton);
App.component('base-dialog', BaseDialog);
App.mount('#app');
