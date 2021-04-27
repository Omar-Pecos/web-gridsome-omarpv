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
import { translate, genDialogData } from "../utils";
export default {
  props: ["text"],
  methods: {
    showTranslation() {
      let text = this.text;
      let locale = this.$i18n.locale;

      translate(text, locale)
        .then((res) => {
          const { message, options } = genDialogData(res, locale);
          this.$dialog.alert(message, options);
        })
        .catch((err) => {
          const { message, options } = genDialogData(err, locale);
          this.$dialog.alert(message, options);
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
