<template>
  <div id="header" class="layout">
    <!-- nav -->
    <header class="header" :class="{ 'dark-menu': $store.state.darkMode }">
      <a
        :href="$url('/')"
        class="logo"
        :style="{ display: [menuDisplay ? 'none' : 'block'] }"
      >
        <span class="logo-name">
          <g-image
            id="omarpv-logo"
            src="~/favicon.png"
            width="100"
            alt="Omar Pecos"
          />
        </span>
      </a>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" style="color: white" @click="displayNav()">
        <span
          class="navicon"
          :class="{ 'navicon-dark': $store.state.darkMode }"
          :style="{ background: [$store.state.darkMode ? 'white' : '#333'] }"
        ></span>
      </label>
      <ul
        :class="[
          $store.state.darkMode ? 'dark-menu menu' : 'menu',
          menuDisplay ? 'showContent' : 'block',
        ]"
      >
        <li @click="() => (menuDisplay = false)">
          <a :href="$url('/#skills')">{{ $t("Navbar.skills") }}</a>
        </li>
        <li @click="() => (menuDisplay = false)">
          <a :href="$url('/#stack')">{{ $t("Navbar.stack") }}</a>
        </li>
        <li @click="() => (menuDisplay = false)">
          <a :href="$url('/#education')">{{ $t("Navbar.education") }}</a>
        </li>
        <li @click="() => (menuDisplay = false)">
          <a :href="$url('/#courses')">{{ $t("Navbar.courses") }}</a>
        </li>
        <li @click="() => (menuDisplay = false)">
          <a :href="$url('/#projects')">{{ $t("Navbar.projects") }}</a>
        </li>
        <li @click="() => (menuDisplay = false)">
          <!--  <g-link :to="$url('/portfolio/')">{{
            $t("Navbar.portfolio")
          }}</g-link> -->
          <a style="cursor:pointer;" @click="openUrl($url('/portfolio/'))">{{
            $t("Navbar.portfolio")
          }}</a>
        </li>
        <li @click="() => (menuDisplay = false)">
          <a :href="$url('/#contact')">{{ $t("Navbar.contact") }}</a>
        </li>

        <li class="translations">
          <img
            width="30"
            :alt="$i18n.locale"
            :src="urlLogo($i18n.locale)"
            id="selected-locale"
            @click="() => (localeDropdown = !localeDropdown)"
          />
          <ul v-if="localeDropdown" class="locale-dropdown">
            <li v-for="lang of langs" :key="lang">
              <img
                width="30"
                :alt="lang"
                :src="urlLogo(lang)"
                @click="selectLocale(lang)"
              />
            </li>
          </ul>
        </li>
        <li class="translations">
          <DarkModeSwitch
            id="switch-dark-mode"
            @switched="onSwitched"
            :initialState="$store.state.darkMode"
          />
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
import { cookieName, defaultCookie } from "../utils";
import DarkModeSwitch from "vue-dark-mode-switch";
import "vue-dark-mode-switch/dist/vue-dark-mode-switch.css";

export default {
  data() {
    return {
      menuDisplay: false,
      localeDropdown: false,
      langs: ["es", "en", "it", "fr"],
    };
  },
  components: {
    DarkModeSwitch,
  },
  mounted() {
    //see if cookie exists already
    if (this.$cookies.isKey(cookieName)) {
      //if exists set values from cookie
      const cookie = this.$cookies.get(cookieName);
      this.$i18n.locale = cookie.locale;
      this.$store.commit("setDarkMode", cookie.darkMode);
    }
  },
  methods: {
    displayNav() {
      this.menuDisplay = !this.menuDisplay;
    },
    openUrl(url) {
      window.open(url, "_self");
    },
    urlLogo(lang) {
      return `https://res.cloudinary.com/omarpvcloud/image/upload/v1619261276/Projects/api-node-portfolio/translation_logos/${lang}.png`;
    },
    selectLocale(lang) {
      this.createCookieOrEdit("locale", lang);
      this.$i18n.locale = lang;
      this.localeDropdown = false;
    },
    createCookieOrEdit(property, value) {
      let cookie;
      if (!this.$cookies.isKey(cookieName)) {
        // create cookie
        cookie = defaultCookie;
        cookie[property] = value;
      } else {
        // edit cookie whit new value
        cookie = this.$cookies.get(cookieName);
        cookie[property] = value;
      }
      this.$cookies.set(cookieName, cookie);
    },
    onSwitched(isSwitched) {
      this.createCookieOrEdit("darkMode", isSwitched);
      this.$store.commit("setDarkMode", isSwitched);
    },
  },
};
</script>

<style>
/* header */

.showContent {
  display: contents;
}
.block {
  display: block;
}

.dark-menu {
  background-color: #171c28 !important;
  color: white;
}

.dark-menu li a {
  color: white !important;
}

.dark-menu li a:hover {
  background-color: #55198b !important;
}

.header {
  background-color: #fff;
  max-width: 100%;
  padding: 15px 20px;
  margin: 0px auto;
}

#header {
  position: sticky;
  top: 0;
  z-index: 99;
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
}
.grey-color {
  color: #868e96;
}

.header li a {
  display: block;
  padding: 15px 20px;
  color: black;
  text-decoration: none;
}

.header li a:hover,
.header .menu-btn:hover {
  background-color: #f4f4f4;
}

.header .logo {
  display: block;
  flex: none;
  float: left;
  font-size: 1.5em;
  text-decoration: none;
  margin-top: 10px;
  line-height: normal;
}
.header .logo-name {
  font-family: "Agustina Regular";
  font-weight: bold;
  font-variant-ligatures: no-common-ligatures;
  -webkit-font-variant-ligatures: no-common-ligatures;
  padding: 0 10px;
}

/* menu */

.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height 0.2s ease-out;
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  /* display: inline-block;*/
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.header .menu-icon .navicon {
  background: #333;
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 18px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #333;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon-dark:before,
.header .menu-icon .navicon-dark:after {
  background: white !important;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 486px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

#omarpv-logo {
  width: 50px !important;
}
.translations {
  display: flex;
  flex-direction: row;
  align-items: center;
}
#selected-locale {
  position: relative;
  bottom: -3px;
  margin-right: 10px;
  margin-left: 20px;
}
#switch-dark-mode {
  position: relative;
  bottom: -3px;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 20px;
}
.locale-dropdown {
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
}
.locale-dropdown li {
  height: 23px;
}
/* 48em = 768px */

@media (min-width: 48em) {
  .header li {
    float: left;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header .menu {
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }

  #omarpv-logo {
    width: 100px !important;
  }
  .translations {
    display: block;
  }
  #selected-locale {
    margin-right: 0;
    margin-left: 0;
    bottom: -11px;
  }
  .locale-dropdown {
    flex-direction: column;
  }
  #switch-dark-mode {
    margin-top: 0px;
    margin-right: 0;
    margin-left: 5px;
    bottom: -13px;
  }
}
@media (max-width: 960px) and (min-width: 768px) {
  .header {
    font-size: 12px;
  }

  #omarpv-logo {
    width: 50px !important;
  }
}
</style>
