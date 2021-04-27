<template>
  <div class="main">
    <div id="stack" v-waypoint="{ active: true, callback: onWaypoint }"></div>
    <div class="skills-container animated">
      <!-- Ancla -->

      <div class="skills-bar" v-if="profile">
        <h1 class="skills-heading">{{ $t("Navbar.stack") }}</h1>

        <!-- Leyenda  -->
        <div
          style="display: flex;flex-direction:row;flex-wrap:wrap;margin:5px;justify-content:center;"
        >
          <span
            v-for="type of TYPES"
            :key="type"
            :style="styleTechName(type)"
            >{{ type.toUpperCase() }}</span
          >
        </div>

        <div
          class="skill"
          v-for="(skill, index) of profile.about.skills"
          v-bind:key="skill._id"
        >
          <span v-if="index < profile.about.skills.length / 2">
            <img
              width="30"
              :src="skill.tech.icon"
              :alt="skill.tech.name"
              style="min-height: 30px; margin-bottom: -10px; margin-right: 3px"
            />
            {{ skill.tech.name }}
          </span>
          <div v-if="index < profile.about.skills.length / 2" class="meter">
            <span :style="setWidth(skill.tech.type, skill.percentage)"></span>
          </div>
        </div>
      </div>

      <div class="skills-bar" v-if="profile">
        <!-- <span id="imgSvg" style="text-align: center;" >
                <g-image alt="Skills" src="~/assets/images/skill.svg" style="width : 20vh; margin-left: -50px;"></g-image>
           </span> -->
        <div class="displayOnBig"></div>

        <div
          class="skill"
          v-for="(skill, index) of profile.about.skills"
          v-bind:key="skill._id"
        >
          <span v-if="index >= profile.about.skills.length / 2">
            <img
              width="30"
              :src="skill.tech.icon"
              :alt="skill.tech.name"
              style="margin-bottom: -10px"
            />
            {{ skill.tech.name }}
          </span>
          <div v-if="index >= profile.about.skills.length / 2" class="meter">
            <span :style="setWidth(skill.tech.type, skill.percentage)"></span>
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
import { orderBy } from "lodash";
import { setColorByType, TYPES } from "../utils";

export default {
  mounted() {
    this.profile = this.$static.profile.edges[0].node;
    var skills = this.profile.about.skills;

    //orderBy
    var newSkills = orderBy(
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
      TYPES,
    };
  },
  methods: {
    onWaypoint(waypoint) {
      if (waypoint.going == "in") {
        var skillsContainer = document
          .getElementsByClassName("skills-container")
          .item(0);
        skillsContainer.classList.add("fadeInBottom");

        setTimeout(() => {
          skillsContainer.classList.remove("fadeInBottom");
        }, 3000);
      }
    },
    setWidth(type, percentage) {
      let color = setColorByType(type);
      var width = percentage + "%";
      return {
        width,
        backgroundColor: color,
      };
    },
    styleTechName(type) {
      let color = setColorByType(type);

      return {
        color,
        margin: "5px",
        fontWeight: "bold",
      };
    },
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
.fadeInBottom {
  -webkit-animation-name: fadeInBottom;
  animation-name: fadeInBottom;
}

.meter {
  height: 20px;
  margin-top: 1vw;
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
}

.skills-image > img {
  margin-left: 80px;
  max-width: 30%;
  height: auto;
}

.skills-heading {
  line-height: 3rem;
}

.skill {
  margin: 20px;
}

.displayOnBig {
  display: block;
  width: 100%;
  height: 12vw;
}

/* Media Query */

@media (max-width: 1456px) {
  .skills-image {
    display: none;
    order: 2;
  }

  .meter {
    width: 80%;
  }
}

@media (max-width: 768px) {
  .skills-container {
    flex-direction: column;
  }

  .skills-image,
  #imgSvg {
    display: none;
    order: 2;
  }
  .meter {
    width: inherit;
    margin-top: 2.5vw;
  }
  .displayOnBig {
    display: none;
  }
}
</style>
