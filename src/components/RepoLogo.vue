<template>
  <span>
    <g-image
      v-if="$store.state.darkMode"
      src="~/assets/images/repoDarkMode.png"
      width="25"
      style="margin-right:5px;margin-bottom: -3px;"
    ></g-image>

    <g-image
      v-else
      src="~/assets/images/repo.png"
      width="25"
      style="margin-right:5px;margin-bottom: -3px;"
      alt="pointer"
    ></g-image>
  </span>
</template>

<script>
export default {};
</script>

<style></style>
