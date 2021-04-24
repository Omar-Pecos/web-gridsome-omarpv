// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "~/assets/styles.css";
import DefaultLayout from "~/layouts/Default.vue";
import VueWaypoint from "vue-waypoint";
import VueGtag from "vue-gtag";

export default function(Vue, { router, head, isClient }) {
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Montserrat&display=swap",
  });

  Vue.use(VueGtag, {
    config: { id: "G-T6Z1E7LFTK" },
  });
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.use(VueWaypoint);
}
