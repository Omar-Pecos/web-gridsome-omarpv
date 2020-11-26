<template>
  <div class="layout">

    <Nav />
    <Greeting />
    <Skills />
    <Progress />
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
import Greeting from '~/components/Greeting';
import Skills from '~/components/Skills';
import Progress from '~/components/Progress';
import ScrollToTop from '~/components/ScrollToTop';

export default {
  components : {
    Nav,
    Greeting,
    Skills,
    Progress,
    ScrollToTop
  }
}
</script>

<style>

</style>
