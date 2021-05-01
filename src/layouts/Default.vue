<template>
  <div class="layoutGeneral" :class="{ darkMode: $store.state.darkMode }">
    <Nav />
    <slot />

    <ScrollToTop />
  </div>
</template>

<script>
import Nav from "~/components/Nav";
import ScrollToTop from "~/components/ScrollToTop";

export default {
  components: {
    Nav,
    ScrollToTop,
  },
};
</script>

<style>
.layoutGeneral {
  min-height: 100vh;
}
.darkMode {
  background-color: #171c28;
  color: white !important;
  transition: "0.1s";
}

.links {
  text-decoration: none;
  color: purple;
}
.links-dark {
  text-decoration: none;
  color: plum;
}

.darkModeSecondary {
  color: #868e96 !important;
}
</style>
