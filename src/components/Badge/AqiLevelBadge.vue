<template>
  <div
    class="info-item-container p-grid p-flex-column"
    :style="'background-color:' + backgroundColor"
  >
    <div class="p-col">
      <div class="box">{{ label }}</div>
    </div>
    <div class="p-col">
      <transition name="route" mode="out-in">
        <div class="box highlight" :key="value">{{ value }}</div>
      </transition>
    </div>
  </div>
</template>

<script>
import { getHexCodeFromAQI } from '../../shared/utils'
export default {
  props: {
    label: {
      type: String,
    },
    value: {
      type: Number,
    },
  },
  computed: {
    backgroundColor() {
      if (!this.value) {
        return '#000000'
      }
      return getHexCodeFromAQI(this.value)
    },
  },
}
</script>

<style scoped>
.highlight {
  font-size: 2rem;
}
.info-item-container {
  color: #fff;
  font-weight: 900;
  border-radius: 0.5rem;
  width: 10rem;
  margin: 0.5rem;
}
</style>
