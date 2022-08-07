import './bootstrap';
import '../css/app.css';

import {
    createApp,
    h
} from 'vue';
import {
    createInertiaApp
} from '@inertiajs/inertia-vue3';
import {
    InertiaProgress
} from '@inertiajs/progress';
import {
    resolvePageComponent
} from 'laravel-vite-plugin/inertia-helpers';
import {
    ZiggyVue
} from '../../vendor/tightenco/ziggy/dist/vue.m';

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css' //icons

/* import Dialog from 'primevue/dialog'; */

const appName = window.document.getElementsByTagName('title')[0] ?.innerText || 'Laravel';

import App from './App.vue';

const app = createApp(App);

app.use(PrimeVue);

app.component('Dialog', Dialog);
app.component('InputText', InputText);
app.component('Button', Button);

app.mount('#app')

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`,
        import.meta.glob('./Pages/**/*.vue')),
    setup({
        el,
        app,
        props,
        plugin
    }) {
        return createApp({
                render: () => h(app, props)
            })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
});

InertiaProgress.init({
    color: '#4B5563'
});
