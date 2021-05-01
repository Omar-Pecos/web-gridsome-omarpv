<template>
  <a @click="scrollTop" v-show="visible" class="bottom-right">
    <g-image
      v-if="$store.state.darkMode"
      src="~/assets/images/totopDarkMode.png"
      alt="toTop"
    ></g-image>
    <g-image v-else src="~/assets/images/totop.png" alt="toTop"></g-image>
  </a>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    scrollTop: function() {
      window.scrollTo(0, 0);
    },
    scrollListener: function(e) {
      this.visible = window.scrollY > 150;
    },
  },
  mounted: function() {
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy: function() {
    window.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style>
.bottom-right {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
}
</style>
