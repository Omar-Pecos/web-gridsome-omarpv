<template>
  <div class="main contact-margin-top animated">
    <div id="contact" v-waypoint="{ active: true, callback: onWaypoint }"></div>

    <div class="contact-div-main">
      <div class="contact-header">
        <h1 class="heading contact-title">Omar Pecos</h1>
        <p class="contact-subtitle">{{ $t("Contact.my_occupation") }}</p>

        <span class="location">
          <g-image
            v-if="$store.state.darkMode"
            width="20"
            src="~/assets/images/locationDarkMode.png"
            style="margin-bottom: -3px;"
            alt="location"
          ></g-image>
          <g-image
            v-else
            width="20"
            src="~/assets/images/location.png"
            style="margin-bottom: -3px;"
            alt="location"
          ></g-image>
          {{ $t("Contact.my_location") }}
        </span>

        <div class="contact-text-div">
          <a class="contact-detail" href="tel:634521429"> 634521429 </a>
          <br />
          <br />
          <a class="contact-detail-email" href="mailto:omarpecos@gmail.com">
            omarpecos@gmail.com
          </a>

          <div class="separator"></div>

          <a
            href="https://play.google.com/store/apps/dev?id=5005668078866662058"
            target="_blank"
          >
            <g-image
              width="200"
              src="~/assets/images/google-play-badge.png"
              alt="GooglePlayStore"
            ></g-image>
          </a>

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

.location {
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

.contact-header {
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
  color: #64676a;
  text-shadow: 2px 1px 2px #b5b5b5;
  transition: all 0.3s;
}

.contact-subtitle {
  text-transform: uppercase;
  color: #868e96;
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

.separator {
  height: 2vw;
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
@media (min-width: 1380px) {
  .flexdiv {
    justify-content: flex-start;
  }

  .location {
    text-align: left;
  }
}
</style>
