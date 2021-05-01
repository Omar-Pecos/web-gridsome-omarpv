// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "~/assets/styles.css";
import DefaultLayout from "~/layouts/Default.vue";
import VueWaypoint from "vue-waypoint";
import VueGtag from "vue-gtag";
import VueI18n from "vue-i18n";
import { es, en, it, fr } from "./translations";
import VueCookies from "vue-cookies";
import Vuex from "vuex";

export default function(Vue, { appOptions, router, head, isClient }) {
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Montserrat&display=swap",
  });
  Vue.use(Vuex);
  const store = new Vuex.Store({
    state: {
      darkMode: true,
    },
    mutations: {
      setDarkMode(state, isSwitched) {
        state.darkMode = isSwitched;
      },
    },
  });
  appOptions.store = store;
  Vue.use(VueCookies);
  Vue.$cookies.config("30d");
  Vue.use(VueI18n);
  const i18n = new VueI18n({
    locale: "es",
    fallbackLocale: "es",
    messages: {
      es,
      en,
      it,
      fr,
    },
  });
  appOptions.i18n = i18n;
  Vue.use(VueGtag, {
    config: { id: process.env.GRIDSOME_GA_ID },
  });

  Vue.component("Layout", DefaultLayout);
  Vue.use(VueWaypoint);
}
