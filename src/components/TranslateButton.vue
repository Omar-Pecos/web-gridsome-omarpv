<template>
  <div class="atside">
    <g-image
      @click="showTranslation"
      width="30"
      alt="Translate"
      src="~/assets/images/translate.png"
    ></g-image>
  </div>
</template>

<script>
import { translate } from "../utils";
export default {
  props: ["text"],
  methods: {
    showTranslation() {
      let text = this.text;
      let locale = this.$i18n.locale;

      translate(text, locale)
        .then((res) => {
          window.alert(res);
        })
        .catch((err) => {
          window.alert(err);
        });
    },
  },
};
</script>

<style>
.atside {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0;
}
</style>
