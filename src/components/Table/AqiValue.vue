<template>
  <span class="status" :style="'color:' + color">{{ value }}</span>
</template>

<script>
import { getHexCodeFromAQI } from '../../shared/utils'
export default {
  props: {
    value: Number,
  },
  computed: {
    color() {
      return getHexCodeFromAQI(this.value)
    },
  },
}
</script>

<style scoped>
.status {
  font-weight: bold;
}
</style>
