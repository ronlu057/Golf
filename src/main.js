import './assets/css/master.css'
import './assets/css/_normalize.css'
import './assets/css/font-awesome.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from "vue-i18n"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './index.vue'
import router from './router'
import en from './locales/en.json'
import jp from './locales/jp.json'
import tw from './locales/tw.json'

const pinia = createPinia();
const i18n = createI18n({
    legacy: false,
    locale: "jp",
    fallbackLocale: "jp",
    messages: {
        "tw": tw,
        "en": en,
        "jp": jp
    }
});

library.add(fas, far, fab);

const app = createApp(App)
.component('fa',FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.use(pinia)
app.use(i18n).mount('#app')
