<template>
  <div class="layout">
    <head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
        rel="stylesheet"
      />
    </head>
    <!-- nav -->
    <header class="header">
      <a
        href=""
        class="logo"
        v-bind:style="{ display: [menuDisplay ? 'none' : 'block'] }"
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
      <label
        class="menu-icon"
        htmlFor="menu-btn"
        style="color: white"
        v-on:click="displayNav(menuDisplay)"
      >
        <span class="navicon"></span>
      </label>
      <ul class="menu" v-bind:class="[menuDisplay ? 'showContent' : 'block']">
        <li>
          <a href="#skills">Aptitudes</a>
        </li>
        <li>
          <a href="#experience">Work Experiences</a>
        </li>
        <li>
          <a href="#opensource">Open Source</a>
        </li>
        <li>
          <a href="#achievements">Achievements</a>
        </li>
        <li>
          <a href="#blogs">Blogs</a>
        </li>
        <li>
          <a href="#talks">Talks</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuDisplay: false,
    };
  },
  methods: {
    displayNav(menuDisplay) {
      var value = !menuDisplay;
      this.menuDisplay = value;
    },
  },
};
</script>

<style>
/* header */

.showContent{
  display: contents;
}
.block{
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
  display: inline-block;
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

#omarpv-logo{
    width: 50px !important;
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

  #omarpv-logo{
    width: 100px !important;
  }
}
@media (max-width: 960px) and (min-width: 768px) {
  .header {
    font-size: 12px;
  }

  #omarpv-logo{
    width: 50px !important;
  }
}
</style>