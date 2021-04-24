<template>
  <div class="layout">
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

<style></style>
