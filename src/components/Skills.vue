<template>
  <div class="main" >

    <!-- Ancla -->
      <div id="skills" v-waypoint="{ active: true, callback: onWaypoint}"></div>
  
    <div class="skills-main-div">
      <!-- Transition left -->
      <div class="skills-image-div animated">
        <g-image
          alt="omar trabajando"
          src="~/assets/images/developerActivity.svg"
        ></g-image>

         <div style="padding:15px;">
          <div class="subTitle skills-text">
            <g-image src="~/assets/images/point.png" width="25" style="transform: rotateZ(90deg);margin-bottom: -7px;" alt="point"></g-image>
            Desarrollar APIs Restful o APIs de GraphQL
          </div>
          <div class="subTitle skills-text">
              <g-image src="~/assets/images/point.png" width="25" style="transform: rotateZ(90deg);margin-bottom: -7px;" alt="point"></g-image>
            Desarrollar aplicaciones frontend con los frameworks de JavaScript más conocidos (Angular,React,Vue)
          </div>
           <div class="subTitle skills-text">
               <g-image src="~/assets/images/point.png" width="25" style="transform: rotateZ(90deg);margin-bottom: -7px;" alt="point"></g-image>
            Aplicaciones Full Stack y más
          </div>
        </div>

      </div>

      <!-- Transition right -->
      <div class="skills-text-div animated">
        <h1 class="skills-heading">{{ "Aptitudes" }}{{ " " }}</h1>
        <p class="subTitle skills-text-subtitle">
          Desarrollador web que disfruta aprendiendo nuevas tecnologías y poniéndolas en práctica
        </p>

        
                <div>
                    <div class="software-skills-main-div">
                        <ul class="dev-icons" v-if="profile">
                       
                            <li class="software-skill-inline" v-for="skill in profile.about.skills"  v-bind:key="skill._id">
                                <img width="30" :src="skill.tech.icon" :alt="skill.tech.name">
                                <p :style=" styleTechName(skill.tech.type) ">{{skill.tech.name}}</p>
                            </li>
                           
                        </ul>
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
import _ from 'lodash';
import {setColorByType} from '../utils';

export default {
    mounted() {
      this.profile = this.$static.profile.edges[0].node;
       var skills = this.profile.about.skills;
    //sortBy
     var newSkills =  _.sortBy(skills,['tech.type']);
     
     this.profile.about.skills = newSkills;
      
    },
    data(){
        return{
            active : true,
            profile : null
        }
    },
    methods : {
        onWaypoint(waypoint){
            if (waypoint.going == 'in'){
                var skillsImageDiv = document.getElementsByClassName('skills-image-div').item(0);
                skillsImageDiv.classList.add("fadeInLeft");

                var skillsTextDiv = document.getElementsByClassName('skills-text-div').item(0);
                skillsTextDiv.classList.add("fadeInRight");

                 setTimeout(() =>{
                    skillsImageDiv.classList.remove("fadeInLeft");
                    skillsTextDiv.classList.remove("fadeInRight");
                }, 3000);
            }
        },
         styleTechName(type){

          let color = setColorByType(type);

            return {
              padding:'2px 5px',
              border : '2px solid '+ color,
              borderRadius:'30px'
            }
      }
    }
}
</script>

<style>
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-delay: 250ms;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}
.fadeInRight{
-webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}


.skills-main-div {
  display: flex;
}

.skills-text-div {
  margin-left: 50px;
}

.skills-main-div > * {
  flex: 1;
  margin-bottom: 30px;
}

.skills-image-div > img {
  max-width: 100%;
  height: auto;
}

.skills-heading {
  font-size: 56px;
  font-weight: 400;
}
.subTitle {
  color: #868e96;
  margin: 10px;
}

/* Software skills */

.dev-icons {
  padding-left: 0;
  list-style: none;
  font-size: 3rem;
  margin-bottom: 0px;
  margin-top: 0px;
  text-align: center;
}

.software-skill-inline {
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 20px;
}

.software-skill-inline > i {
  color: #868e96;
}

.software-skill-inline > i:hover {
  color: #645beb;
}
.software-skill-inline > p {
  color: #868e96;
  font-size: 10px;
}
.software-skill-inline > i:hover ~ p{
  color: #645beb;
}

/* Media Query */
@media (max-width: 1380px) {
  .skills-heading {
    font-size: 40px;
  }
}
@media (max-width: 768px) {
  .skills-heading {
    font-size: 30px;
    text-align: center;
  }
  .greeting-text-p {
    font-size: 16px;
    line-height: normal;
  }
  .skills-main-div {
    flex-direction: column;
  }
  .skills-text-div {
    margin-left: 0px;
    margin: 20px;
  }
  .skills-text {
    font-size: 16px;
  }
  .skills-text-subtitle {
    font-size: 16px;
    text-align: center;
  }
  .skills-image-div {
    /* display: none; */
    order: 2;
  }
}
</style>