<template>
  <div class="layout">
    <Nav />
    <Greeting />
    <slot/>
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
import Greeting from '~/components/Greeting';

export default {
  components : {
    Nav,
    Greeting
  }
}
</script>

<style>

</style>
