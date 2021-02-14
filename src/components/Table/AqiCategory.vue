<template>
  <div class="container" :style="'background-color:' + color">
    {{ category }}
  </div>
</template>

<script>
import { getHexCodeFromAQI, getCategoryFromAQI } from '../../shared/utils'
import { AIR_QUALITY_CATEGORIES } from '../../shared/constants'
export default {
  props: {
    value: Number,
  },
  computed: {
    color() {
      return getHexCodeFromAQI(this.value)
    },
    category() {
      return AIR_QUALITY_CATEGORIES[getCategoryFromAQI(this.value)]
    },
  },
}
</script>

<style scoped>
.container {
  font-weight: bold;
  color: #4e4e4e;
  padding: 0.8rem;
  border-radius: 1rem;
  width: 8rem;
  font-size: 0.8rem;
  text-align: center;
}
</style>
