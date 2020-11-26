<template>
  <div class="layout">
    <Nav />
    <Greeting />
    <Skills />
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
import Skills from '~/components/Skills';

export default {
  components : {
    Nav,
    Greeting,
    Skills
  }
}
</script>

<style>

</style>
