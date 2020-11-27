<template>
  <Layout>

    <Greeting />
    <Skills />
    <Progress />
    <Education />


  </Layout>
</template>

<script>

import Greeting from '~/components/Greeting';
import Skills from '~/components/Skills';
import Progress from '~/components/Progress';
import Education from '~/components/Education';


export default {
  metaInfo: {
    title: 'Omar Pecos web'
  },
   components : {
    Greeting,
    Skills,
    Progress,
    Education
  }
}
</script>

<style>

</style>
