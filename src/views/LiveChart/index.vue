<template>
  <h1>Live Chart for {{ selectedCity }}</h1>
  <Chart type="line" :data="chartData" />
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState(['selectedCity']),
    ...mapGetters({ cityHistory: 'cityHistoryWithFormattedDateString' }),
    chartData() {
      const vm = this
      const _cityHistory = vm.cityHistory(vm.selectedCity) || []
      return {
        labels: _cityHistory.map((ele) => ele.updatedAt),
        datasets: [
          {
            label: vm.selectedCity,
            backgroundColor: '#42A5F5',
            data: _cityHistory.map((ele) => ele.aqi),
            fill: false,
          },
        ],
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  max: 500,
                  min: 0,
                  stepSize: 10,
                },
              },
            ],
          },
          animation: {
            duration: 0, // general animation time
          },
          hover: {
            animationDuration: 0, // duration of animations when hovering an item
          },
          responsiveAnimationDuration: 0, // animation duration after a resize
        },
      }
    },
  },
  mounted() {
    if (!this.selectedCity) {
      this.$router.replace('/')
    }
  },
  created() {
    if (!this.selectedCity) {
      this.$router.replace('/')
    }
  },
}
</script>

<style scoped></style>
