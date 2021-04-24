<template>
  <div class="education-section" id="education">
    <div
      id="education"
      v-waypoint="{ active: true, callback: onWaypointLeft }"
    ></div>
    <h1 class="education-heading">Formación</h1>
    <!-- Fade left -->
    <div class="education-card-container animated">
      <!-- EducationCard -->
      <div class="education-card">
        <div class="education-card-left">
          <img
            class="education-roundedimg"
            :src="pathToImg('Sansebastian_logo')"
            alt="IES San Sebastián"
          />
        </div>
        <div class="education-card-right">
          <h5 class="education-text-school">IES San Sebastián</h5>

          <div class="education-text-details">
            <h5 class="education-text-subHeader">
              CFGS Desarrollo de Aplicaciones Web
            </h5>
            <p class="education-text-duration">2017-2019</p>
            <p class="education-text-desc">
              Interfaces web, desarrollo entorno Servidor (PHP) y entorno
              Cliente (JavaScript)
            </p>
          </div>
        </div>
      </div>
    </div>

    <hr />
    <div
      id="courses"
      v-waypoint="{ active: true, callback: onWaypointRight }"
    ></div>

    <h1 class="education-heading">Cursos</h1>
    <!-- Fade right -->
    <div class="education-card-container animated">
      <!-- EducationForCourses -->
      <div
        class="education-card"
        v-for="course of $static.courses.edges"
        v-bind:key="course.id"
      >
        <div class="education-card-left">
          <img
            class="education-roundedimg"
            :src="pathToImg(course.node.platform.toLowerCase())"
            :alt="course.node.platform"
          />
        </div>
        <div class="education-card-right">
          <h5 class="education-text-school">{{ course.node.platform }}</h5>

          <div class="education-text-details">
            <h5 class="education-text-subHeader">
              <a :href="course.node.url"> {{ course.node.name }}</a>
            </h5>
            <p class="education-text-duration">
              {{ course.node.language }} -
              {{ (course.node.duration / 60).toFixed(2) }} horas
            </p>
            <p class="education-text-desc">
              {{ course.node.description }}
            </p>
            <!-- Techs display -->
            <div>
              <div class="software-skills-main-div">
                <ul class="dev-icons">
                  <li
                    class="software-skill-inline"
                    v-for="tech in course.node.techs"
                    v-bind:key="tech._id"
                  >
                    <img width="30" :src="tech.icon" :alt="tech.name" />
                    <p :style="styleTechName(tech.type)">{{ tech.name }}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<static-query>
query {
    courses : allCourse(order : ASC){
        edges{
            node{
                id
                name
                description
                platform
                duration
                language
                url
                techs{
                    _id
                    name
                    type
                    icon
                }
                done
            }
        }
    }
}
</static-query>

<script>
import { setColorByType } from "../utils";

export default {
  data() {
    return {
      active: true,
    };
  },
  methods: {
    pathToImg(platform) {
      return `https://res.cloudinary.com/omarpvcloud/image/upload/v1606471573/logos/${platform}.png`;
    },
    onWaypointLeft(waypoint) {
      if (waypoint.going == "in") {
        var educationCardContainer = document
          .getElementsByClassName("education-card-container")
          .item(0);
        educationCardContainer.classList.add("fadeInLeft");

        setTimeout(() => {
          educationCardContainer.classList.remove("fadeInLeft");
        }, 3000);
      }
    },
    onWaypointRight(waypoint) {
      if (waypoint.going == "in") {
        var educationCardContainer = document
          .getElementsByClassName("education-card-container")
          .item(1);
        educationCardContainer.classList.add("fadeInRight");

        setTimeout(() => {
          educationCardContainer.classList.remove("fadeInRight");
        }, 3000);
      }
    },
    styleTechName(type) {
      let color = setColorByType(type);

      return {
        padding: "2px 5px",
        backgroundColor: color,
        color: "white",
        fontWeight: "bold",
        borderRadius: "30px",
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
.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}

.education-heading {
  font-size: 56px;
  font-weight: 400;
}

.education-section {
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 20px 0px;
  margin: 0px auto;
  margin-top: 2rem;
}

.education-section > * {
  flex: 1;
  margin-bottom: 30px;
}

.education-card-container {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
}

@media (max-width: 1380px) {
  .education-card-container {
    padding-top: 0px;
  }
  .education-heading {
    font-size: 40px;
  }
  .education-text-subtitle {
    font-size: 18px;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .education-card-container {
    padding-top: 0px;
  }
  .education-heading {
    font-size: 30px;
    text-align: center;
  }
  .education-text-subtitle {
    font-size: 16px;
  }
}

/* EducationCard */

.education-roundedimg {
  object-fit: contain;
  margin-right: 2rem;
  width: 6rem;
  height: 6rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  border-radius: 50%;
}

.education-card-right {
  max-width: 70%;
}

.education-text-subHeader {
  color: black;
  font-weight: 700;
  font-size: 19px;
  margin: 0px;
  padding-top: 0.8rem;
  line-height: normal;
}

.education-text-duration {
  color: #000000;
  font-size: 19px;
  margin: 0px;
  padding-top: 0.5rem;
}

.education-text-desc {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.education-text-bullets > ul {
  margin-top: 0.5rem;
}

.education-card {
  display: flex;
  text-align: center;
  align-items: center;
  width: 100%;
  margin: 0;
}

/* Media Query */

@media (max-width: 1380px) {
  .education-card {
    flex-direction: column;
    padding-bottom: 10px;
    width: 60%;
    margin: 0 auto;
  }
  .education-card-right {
    max-width: 90%;
  }
  .education-card-border {
    width: 90%;
  }
  .education-text-subHeader {
    padding-top: 0.5rem;
    font-size: 16px;
  }
  .education-text-school {
    font-size: 20px;
  }
  .education-text-duration {
    font-size: 16px;
  }
  .education-roundedimg {
    width: 4rem;
    height: 4rem;
    margin-bottom: 0.5rem;
    margin-right: 0px;
  }
}

@media (min-width: 1380px) {
  .education-card {
    width: 60%;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .education-card {
    width: 100%;
    margin: 0;
  }
  .education-card-right {
    max-width: 100%;
  }
  .education-card-border {
    width: 100%;
  }
  .education-roundedimg {
    margin-top: 10px;
    width: 4rem;
    height: 4rem;
    margin-bottom: 1rem;
    margin-right: 0;
  }
  .education-text-bullets > ul {
    max-width: 80%;
    margin: auto;
  }
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
  margin: 5px;
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
.software-skill-inline > i:hover ~ p {
  color: #645beb;
}
</style>
