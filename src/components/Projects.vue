<template>
  <div>
    <div class="projects-main animated">
      <div
        id="projects"
        v-waypoint="{ active: true, callback: onWaypoint }"
      ></div>
      <h1 class="project-title">{{ $t("Navbar.projects") }}</h1>
      <div class="repo-cards-div-main" v-if="completeData">
        <ProjectCard
          v-for="project of pinned"
          :key="project.id"
          :project="project"
        />
      </div>

      <Button
        :text="$t('Projects.other_projects')"
        class="project-button"
        href="#otherprojects"
      />

      <div class="project-button">
        <!-- <g-link class="main-button" to="/portfolio/">Portfolio</g-link> -->
        <a class="main-button" @click="openUrl('/web/portfolio/')">{{
          $t("Navbar.portfolio")
        }}</a>
      </div>
    </div>

    <div class="projects-main animated">
      <div
        id="otherprojects"
        v-waypoint="{ active: true, callback: onWaypointOther }"
      ></div>
      <h1 class="project-title">{{ $t("Projects.other_projects") }}</h1>
      <div class="repo-cards-div-main" v-if="completeData">
        <ProjectCard
          :key="allProjects.backend[indexes.backend].id"
          :project="allProjects.backend[indexes.backend]"
        />
        <ProjectCard
          :key="allProjects.design[indexes.design].id"
          :project="allProjects.design[indexes.design]"
        />
        <ProjectCard
          :key="allProjects.fullstack[indexes.fullstack].id"
          :project="allProjects.fullstack[indexes.fullstack]"
        />
        <ProjectCard
          :key="allProjects.frontend[indexes.frontend].id"
          :project="allProjects.frontend[indexes.frontend]"
        />
        <ProjectCard
          :key="allProjects.game[indexes.game].id"
          :project="allProjects.game[indexes.game]"
        />
        <ProjectCard
          :key="allProjects.hybrid[indexes.hybrid].id"
          :project="allProjects.hybrid[indexes.hybrid]"
        />
      </div>

      <div class="project-button">
        <!-- <g-link class="main-button" to="/portfolio/">Portfolio</g-link> -->
        <a class="main-button" @click="openUrl('/web/portfolio/')">{{
          $t("Navbar.portfolio")
        }}</a>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
   projects : allProject( order : ASC){
    edges{
      node{
        id
        name
        type
        description
        url
        repo_url
        techs{
          _id
          name
          type
          icon
        }
        images
        pinned
      }
    }
  }
}
</static-query>

<script>
import Button from "~/components/Button";
import ProjectCard from "~/components/ProjectCard";

export default {
  created() {
    this.$static.projects.edges.map((edge) => {
      this.allProjects[edge.node.type].push(edge.node);
      if (edge.node.pinned) this.pinned.push(edge.node);
    });

    this.selectIndex(this.allProjects.backend.length, "backend");
    this.selectIndex(this.allProjects.frontend.length, "frontend");
    this.selectIndex(this.allProjects.fullstack.length, "fullstack");
    this.selectIndex(this.allProjects.design.length, "design");
    this.selectIndex(this.allProjects.game.length, "game");
    this.selectIndex(this.allProjects.hybrid.length, "hybrid");

    this.completeData = true;
    //console.log(this.allProjects);
    //console.log(this.indexes);
  },
  data() {
    return {
      active: true,
      webUrl: "https://omarpecos.com/web",
      completeData: false,
      pinned: [],
      allProjects: {
        backend: [],
        frontend: [],
        fullstack: [],
        game: [],
        design: [],
        hybrid: [],
      },
      indexes: {
        backend: 0,
        frontend: 0,
        fullstack: 0,
        game: 0,
        design: 0,
        hybrid: 0,
      },
    };
  },
  components: {
    Button,
    ProjectCard,
  },
  methods: {
    onWaypoint(waypoint) {
      if (waypoint.going == "in") {
        var projectsMain = document
          .getElementsByClassName("projects-main")
          .item(0);
        projectsMain.classList.add("fadeInBottom");

        setTimeout(() => {
          projectsMain.classList.remove("fadeInBottom");
        }, 3000);
      }
    },
    onWaypointOther(waypoint) {
      if (waypoint.going == "in") {
        var projectsMain = document
          .getElementsByClassName("projects-main")
          .item(1);
        projectsMain.classList.add("fadeInBottom");

        setTimeout(() => {
          projectsMain.classList.remove("fadeInBottom");
        }, 3000);
      }
    },
    randomIntFromInterval(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    selectIndex(length, type) {
      var random = this.randomIntFromInterval(0, length - 1);
      this.indexes[type] = random;
    },
    openUrl(url) {
      window.open(url, "_self");
    },
  },
};
</script>

<style>
.projects-main {
  width: 90%;
  padding: 20px 10px;
  margin: 0px auto;
  margin-top: 4rem;
}
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

.project-title {
  font-size: 52px;
  font-weight: 400;
  line-height: normal;
}

.startup-project-text img {
  max-width: 100%;
  height: auto;
}

.repo-cards-div-main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1rem 1rem;
}

.main-button {
  background-color: #55198b;
  border: solid 1px #55198b;
  color: white;
  font-weight: 700;
  width: max-content;
  padding: 13px 22px;
  margin-right: 50px;
  text-transform: uppercase;
  border-radius: 6px;
  text-align: center;
  text-decoration: none;
  display: block;
  margin-top: 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out 0s;
}
.main-button:hover {
  background-color: #ffffff;
  color: #55198b;
  transition: all 0.3s ease 0s;
  transform: translateY(-3px);
}
.project-button {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.project-button > .main-button {
  margin-right: 0 !important;
}

@media (max-width: 320px) {
  .main-button {
    font-size: 12px;
  }
}

/* Media Query */
@media (max-width: 1380px) {
  .project-title {
    font-size: 40px;
  }
}
@media (max-width: 768px) {
  .project-title {
    font-size: 30px;
    text-align: center;
  }
  .repo-cards-div-main {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .main-button {
    font-size: 15px;
    padding: 12px 18px;
    margin-right: 0px;
  }
}
</style>
