<template>
  <div class="main contact-margin-top animated">
    <div id="contact" v-waypoint="{ active: true, callback: onWaypoint }"></div>

    <div class="contact-div-main">
      <div class="contact-header">
        <h1 class="heading contact-title">Omar Pecos</h1>
        <p class="subTitle contact-subtitle">Desarrollador Full Stack</p>

        <span class="location">
          <svg
            viewBox="0 0 12 16"
            version="1.1"
            width="20"
            height="18"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
            ></path>
          </svg>
          Huelva, Andalucía, España
        </span>

        <div class="contact-text-div">
          <a class="contact-detail" href="tel:634521429"> 634521429 </a>
          <br />
          <br />
          <a class="contact-detail-email" href="mailto:omarpecos@gmail.com">
            omarpecos@gmail.com
          </a>

          <br />
          <br />

          <!-- Social media  -->
          <div class="flexdiv">
            <div>
              <a href="https://www.instagram.com/omarpv95/" target="_blank">
                <g-image
                  width="50"
                  src="~/assets/images/instagram.png"
                  alt="Instagram"
                ></g-image>
              </a>
            </div>
            <div>
              <a href="https://github.com/Omar-Pecos" target="_blank">
                <g-image
                  width="50"
                  src="~/assets/images/github.png"
                  alt="GitHub"
                ></g-image>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/omar-pecos-vales-659b741aa/"
                target="_blank"
              >
                <g-image
                  width="50"
                  src="~/assets/images/linkedin.png"
                  alt="Linkedin"
                ></g-image>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true,
    };
  },
  methods: {
    onWaypoint(waypoint) {
      if (waypoint.going == "in") {
        var contactMarginTop = document
          .getElementsByClassName("contact-margin-top")
          .item(0);
        contactMarginTop.classList.add("fadeInBottom");

        setTimeout(() => {
          contactMarginTop.classList.remove("fadeInBottom");
        }, 3000);
      }
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

.location{
    text-align: center;
}

.main {
  width: 90%;
  padding: 20px 10px;
  margin: 0px auto;
  margin-top: 4rem;
}

.contact-div-main {
  display: flex;
}

.contact-header{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.flexdiv {
  display: flex;
  justify-content: center;
}

.dark-mode a {
  color: white;
}

.contact-div-main > * {
  flex: 1;
}

.contact-title {
  font-size: 65px;
  font-weight: 400;
}

.contact-detail,
.contact-detail-email {
  margin-top: 20px;
  font-size: 40px;
  font-weight: 400;
  color: #868e96;
  text-decoration: none;
}

.contact-detail:hover,
.contact-detail-email:hover {
  color: black;
  text-shadow: 2px 1px 2px #b5b5b5;
  transition: all 0.3s;
}

.contact-subtitle {
  text-transform: uppercase;
}

.contact-text-div {
  margin-top: 1.5rem;
}

.contact-margin-top {
  margin-top: 4rem;
}

.contact-image-div > img {
  max-width: 10vw;
  height: auto;
  margin-left: 1.5rem;
  margin-top: -4rem;
}

/* Media Query */
@media (max-width: 1380px), (max-width: 768px) {
  .contact-title {
    font-size: 56px;
    font-weight: 400;
    text-align: center;
  }

  .contact-title {
    font-size: 40px;
    text-align: center;
  }

  .contact-subtitle {
    font-size: 16px;
    line-height: normal;
    text-align: center;
  }

  .contact-text-div {
    text-align: center;
    margin-top: 1.5rem;
  }

  .contact-detail,
  .contact-detail-email {
    font-size: 20px;
  }

  .contact-image-div {
    display: none;
  }
}
@media (min-width : 1380px) {
 .flexdiv{
     justify-content: flex-start;
 }

 .location{
    text-align: left;
}
}
</style>