<template>
  <transition name="value-update" mode="out-in">
    <div class="container" :style="'border-color:' + color" :key="value">
      {{ value }}
    </div>
  </transition>
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
.container {
  font-weight: bold;
  color: #4e4e4e;
  padding: 0.8rem;
  border-radius: 1rem;
  width: 4rem;
  font-size: 0.8rem;
  text-align: center;
  border: 3px solid;
}
</style>
