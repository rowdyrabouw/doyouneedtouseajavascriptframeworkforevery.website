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

<style>
body {
  margin: 0;
  background-color: black;
  background-image: url('/favicon.svg');
  background-repeat: space;
  background-size: 50px;
  height: 100vh;
}
</style>