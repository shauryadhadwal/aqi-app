<template>
  <Button
    @click="redirectToHome"
    icon="pi pi-home"
    class="p-button-sm p-button-outlined p-button-rounded"
    v-tooltip="'Go To Home Page'"
  />
</template>

<script>
export default {
  methods: {
    redirectToHome() {
      this.$router.replace('/').catch((err) => console.error(err))
    },
  },
}
</script>

<style></style>
