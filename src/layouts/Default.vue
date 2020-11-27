<template>
  <div class="layout">

    <Nav />
      <slot/>

   <ScrollToTop />

  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Nav from '~/components/Nav';
import ScrollToTop from '~/components/ScrollToTop';

export default {
  components : {
    Nav,
    ScrollToTop
  }
}
</script>

<style>

</style>
