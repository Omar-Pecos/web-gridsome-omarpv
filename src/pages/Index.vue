<template>
  <Layout>

    <Greeting />
    <Skills />
    <Progress />
    <Education />
    <Projects />
    <Contact />

  </Layout>
</template>

<script>

import Greeting from '~/components/Greeting';
import Skills from '~/components/Skills';
import Progress from '~/components/Progress';
import Education from '~/components/Education';
import Projects from '~/components/Projects';
import Contact from '~/components/Contact';


export default {
  metaInfo: {
    title: 'Omar Pecos web'
  },
   components : {
    Greeting,
    Skills,
    Progress,
    Education,
    Projects,
    Contact
  }
}
</script>

<style>

</style>
