<template>
  <div class="greet-main animated fadeInBottom" id="greeting">
    <div class="greeting-main">
      <div class="greeting-text-div">
        <div>
          <h1 class="greeting-text">
            {{ " " }}
            {{ $t("Greeting.hello") }}{{ " " }}
            <span class="wave-emoji">
              <g-image
                alt="Hello!"
                src="~/assets/images/emoji_hello.png"
              ></g-image>
            </span>
          </h1>
          <p class="greeting-text-p subTitle">
            {{ $static.profile.edges[0].node.intro }}
            <TranslateButton
              v-if="$i18n.locale !== 'es'"
              :text="$static.profile.edges[0].node.intro"
            />
          </p>

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
            <div>
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
            </div>
          </div>

          <div class="button-greeting-div">
            <ButtonVue :text="$t('Greeting.contact_me')" href="#contact" />
          </div>
        </div>
      </div>
      <div class="greeting-image-div">
        <g-image
          alt="omar sentado en una mesa"
          src="~/assets/images/manOnTable.svg"
        ></g-image>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  profile : allProfile {
      edges{
          node{
              intro
          }
      }
  }
}
</static-query>

<script>
import ButtonVue from "./Button.vue";
import TranslateButton from "./TranslateButton.vue";
export default {
  components: {
    ButtonVue,
    TranslateButton,
  },
};
</script>

<style>
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@keyframes fadeInBottom {
  0% {
    opacity: 0;
    transform: translateY(100px);
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

.flexdiv {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  color: white;
}

.flexdiv > div {
  margin: 10px;
}

.main {
  width: 90%;
  padding: 20px 10px;
  margin: 0px auto;
  margin-top: 4rem;
}
.greet-main {
  width: 90%;
  padding: 20px 10px;
  margin: 0px auto;
  margin-top: 2rem;
}

.gretting-main {
  width: 90%;
  padding: 20px 10px;
  margin: 0px auto;
}

.subTitle {
  color: #868e96 !important;
}

.greeting-main {
  display: flex;
}

.greeting-main > * {
  flex: 1;
  margin-bottom: 30px;
}
.button-greeting-div {
  display: flex;
}

.greeting-text {
  font-size: 70px;
  line-height: 1.1;
  color: black !important;
}

.greeting-text-p {
  font-size: 30px;
  line-height: 40px;
}

.greeting-image-div > img {
  max-width: 100%;
  height: auto;
}
.wave-emoji {
  position: relative;
  top: 0.7vw;
  width: 50px;
  height: 50px;
  animation-duration: 1.8s;
  animation-iteration-count: infinite;
  animation-name: wave;
  display: inline-block;
  transform-origin: 70% 70%;
}

.wave-emoji img {
  width: 100%;
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(-10deg);
  }
  20% {
    transform: rotate(12deg);
  }
  30% {
    transform: rotate(-10deg);
  }
  40% {
    transform: rotate(9deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

/* Media Query */
@media (max-width: 1380px) {
  .greeting-text {
    font-size: 50px;
  }
  .greeting-text-p {
    font-size: 20px;
  }
}

@media (max-width: 768px) {
  .button-greeting-div {
    justify-content: space-around;
  }
  .greeting-text {
    font-size: 30px;
    text-align: center;
  }
  .greeting-text-p {
    font-size: 16px;
    line-height: normal;
    text-align: center;
  }
  .greeting-main {
    display: block;
  }

  .flexdiv {
    justify-content: center;
  }
  .wave-emoji {
    width: 35px;
    height: 35px;
    top: 1.3vw;
  }
}
</style>
