import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            dark: {
                primary: "#4d5c9f",
                background: "#1d1e23",
                backgroundAccent: "#1a1b1f",
                backgroundAccent2: "#26272d",
            },
            light: {
                background: "#fff",
                backgroundAccent: "#fbfbfb",
                textColor: "#29261d",
            }
        }
    }
});
