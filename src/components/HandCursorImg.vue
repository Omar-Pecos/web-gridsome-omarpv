<template>
  <span>
    <g-image
      v-if="$store.state.darkMode"
      src="~/assets/images/pointDarkMode.png"
      width="25"
      :style="`transform: rotateZ(${rotation}deg);${styles}`"
      alt="pointer"
    ></g-image>

    <g-image
      v-else
      src="~/assets/images/point.png"
      width="25"
      :style="`transform: rotateZ(${rotation}deg);${styles}`"
      alt="pointer"
    ></g-image>
  </span>
</template>

<script>
export default {
  props: ["rotation", "styles"],
};
</script>

<style></style>
