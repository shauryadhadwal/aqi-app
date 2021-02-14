<template>
  <span
    ><i>{{ displayDate }}</i></span
  >
</template>

<script>
import { getTimeInRelativeFormat } from '../../shared/utils'
export default {
  props: {
    dateTime: {
      type: Date,
    },
  },
  data() {
    return {
      registeredInterval: null,
      displayDate: 'A second ago',
    }
  },
  methods: {
    convertToRelativeTime() {
      const vm = this
      if (!vm.dateTime) return
      vm.displayDate = getTimeInRelativeFormat(
        new Date().valueOf(),
        vm.dateTime.valueOf()
      )
    },
  },
  created() {
    const vm = this
    vm.registeredInterval = setInterval(() => {
      vm.convertToRelativeTime()
    }, 2000)
    vm.convertToRelativeTime()
  },
  beforeUnmount() {
    clearInterval(this.registeredInterval)
  },
}
</script>

<style scoped></style>
