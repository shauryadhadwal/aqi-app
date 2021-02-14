<template>
  <div class="info-item-container p-grid p-flex-column">
    <div class="p-col">
      <div class="box">{{ label }}</div>
    </div>
    <div class="p-col">
      <div class="box highlight">{{ value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    value: {
      type: Number,
    },
  },
}
</script>

<style scoped>
.info-item-container {
  color: #07254a;
}
.highlight {
  font-size: 1.5rem;
  font-weight: 900;
}
</style>
