<template>
    <div class="main">
        <div id="stack" v-waypoint="{ active: true, callback: onWaypoint}"></div>
    <div  class="skills-container animated">

    <!-- Ancla -->
    

      <div class="skills-bar" v-if="profile">
        <h1 class="skills-heading">Mi Stack tecnológico</h1>

        <!-- Leyenda  -->
        <div style="display: flex;flex-direction:row;flex-wrap: wrap; margin :5px;justify-content:center;">
            <span :style="styleTechName('backend')">Backend</span>
            <span :style="styleTechName('design')">Diseño</span>
            <span :style="styleTechName('frontend')">Frontend</span>
            <span :style="styleTechName('fullstack')">Full Stack</span>
            <span :style="styleTechName('game')">Juegos</span>
            <span :style="styleTechName('hybrid')">Híbridas</span>
            <span :style="styleTechName('native')">Nativas</span>
       
            
        </div>

        <div
          class="skill"
          v-for="(skill, index) of profile.about.skills"
          v-bind:key="skill._id"
        >
          <span v-if="index < profile.about.skills.length / 2">

                <img width="30" :src="skill.tech.icon" :alt="skill.tech.name"  style="min-height: 30px; margin-bottom: -10px; margin-right: 3px">
                {{ skill.tech.name }}

          </span>
          <div v-if="index < profile.about.skills.length / 2" class="meter">
            <span :style="setWidth(skill.tech.type,skill.percentage)"></span>
          </div>
        </div>
      </div>
       
       <div class="skills-bar" v-if="profile">
           <span id="imgSvg" style="text-align: center;" >
                <g-image alt="Skills" src="~/assets/images/skill.svg" style="width : 20vh; margin-left: -50px;"></g-image>
           </span>

            <div
          class="skill"
          v-for="(skill, index) of profile.about.skills"
          v-bind:key="skill._id"
        >
          <span v-if="index >= profile.about.skills.length / 2">
           
                <img width="30" :src="skill.tech.icon" :alt="skill.tech.name" style="margin-bottom: -10px">
                {{ skill.tech.name }}
                
          </span>
          <div v-if="index >= profile.about.skills.length / 2" class="meter">
            <span :style="setWidth(skill.tech.type,skill.percentage)"></span>
          </div>
        </div>
       </div>

    </div>
</div>
   
</template>
<static-query>
query {
    profile : allProfile{
        edges{
            node{
                about{
                    skills{
                        _id
                        tech{
                            name
                            type
                            icon
                        }
                         percentage
                    }
                }
            }
        }
    }
}
</static-query>

<script>
import _ from "lodash";

export default {
  mounted() {
    this.profile = this.$static.profile.edges[0].node;
    var skills = this.profile.about.skills;
    
    //orderBy
    var newSkills = _.orderBy(
      skills,
      ["tech.type", "percentage"],
      ["asc", "desc"]
    );

    this.profile.about.skills = newSkills;
  },
  data() {
    return {
      active: true,
      profile: null,
    };
  },
  methods: {
    onWaypoint(waypoint){
        if (waypoint.going == 'in'){

            var skillsContainer = document.getElementsByClassName('skills-container').item(0);
            skillsContainer.classList.add("fadeInBottom");

             setTimeout(() =>{
                    skillsContainer.classList.remove("fadeInBottom");
                }, 3000);
        }
    },
    getColor(type){
        var color = 'black';
        switch(type){
            case 'backend':
            color = '#C64E4E';
            break;
            case 'frontend':
            color = '#47C163';
            break;
             case 'fullstack':
            color = 'purple';
            break;
            case 'design':
            color = '#808080';
            break;
            case 'game':
            color = 'orange';
            break;
            case 'native':
            color = 'plum';
            break;
            case 'hybrid':
            color = '#3F3FB6';
            break;
        }
        return color;
    },
    setWidth(type,percentage) {
     var color = this.getColor(type);
      var width = percentage + "%";
      return {
        width,
        backgroundColor : color
      };
    },
     styleTechName(type){
          var color = this.getColor(type);
         
            return {
              padding:'2px 5px',
              border : '2px solid '+ color,
              borderRadius:'30px',
              maxHeight: '50px !important',
              lineHeight : '1em',
              marginRight: '5px',
            }
      }
  },
};
</script>

<style>
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-delay: 250ms;
}
@keyframes fadeInBottom {
  0% {
    opacity: 0;
    transform: translateY(350px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.fadeInBottom{
  -webkit-animation-name: fadeInBottom;
  animation-name: fadeInBottom;
}

.meter {
  height: 20px;
  position: relative;
  width: 80%;
  background: rgb(243, 239, 239);
  -moz-border-radius: 25px;
  -webkit-border-radius: 25px;
  border-radius: 25px;
}
.meter > span {
  display: block;
  height: 100%;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: #aaa5ff;
  position: relative;
  overflow: hidden;
}

.skill{
  line-height: 6vh;
}

.skill-bars {
  font-size: 28px;
  width: 40%;
}
.skills-container {
  display: flex;
  width: 80%;
  padding: 20px 10px;
  margin: 0px auto;
  margin-top: 2rem;
}
.skills-container > * {
  flex: 1;
  margin-bottom: 30px;
}

.skills-image > img {
  margin-left: 80px;
  max-width: 30%;
  height: auto;
}

 .skills-heading{
      line-height: 3rem;
  }

/* Media Query */

@media (max-width: 1456px) {
  .skills-bar {
    line-height: 4rem;
  }
  .skills-image{
    display: none;
    order: 2;
  }

  #imgSvg{
    display: block;
}

  .meter{
      width: 80%;
  }
}

@media (max-width: 768px) {
  .skills-container {
    flex-direction: column;
  }
  .skills-bar {
    line-height: 3rem;
    margin: 0px 20px;
  }
  .skills-image,#imgSvg {
    display: none;
    order: 2;
  }
  .meter{
      width: inherit;
  }


}
</style>