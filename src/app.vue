<template>
  <div/>
</template>

<script>

export default {
  name: 'mainApp',
  created() {
    document.title = `${this.$t("question")} ${this.$t("answer")}`;
    console.error(`${this.$t("question")} ${this.$t("answer")}`);
    console.error(`Rowdy Rabouw - https://rowdy.codes`);
    window.alert(this.$t('alert'));
  }
}
</script>
