<template>
  <h1>Live Chart for {{ selectedCity }}</h1>
  <Chart
    type="line"
    :data="chartData"
    :options="chartOptions"
    ref="liveChart"
  />
  <AqiLevelBadge :label="'All Time High'" :value="allTime.max" />
  <AqiLevelBadge :label="'All Time Low'" :value="allTime.min" />
  <AqiLevelBadge :label="'Latest'" :value="allTime.latest" />
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { FormatDate } from '../../shared/utils'
import { HISTORY_LIMIT } from '../../shared/constants'
import AqiLevelBadge from '@/components/Badge/AqiLevelBadge'

const getChartOptions = () => ({
  bezierCurve: false,
  scales: {
    yAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
  },
  animation: {
    duration: 0,
  },
  hover: {
    animationDuration: 0,
  },
  responsiveAnimationDuration: 0,
})

const getDataSets = () => [
  {
    label: undefined,
    lineTension: 0,
    backgroundColor: 'rgba(24, 24, 153, 0.5)',
    data: [],
  },
]

export default {
  components: { AqiLevelBadge },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: getDataSets(),
      },
      chartOptions: getChartOptions(),
      allTime: {
        max: undefined,
        min: undefined,
        latest: undefined,
      },
    }
  },
  computed: {
    ...mapState(['selectedCity', 'selectedCityLatestEntry']),
    ...mapGetters({ cityHistory: 'cityHistoryWithFormattedDateString' }),
  },
  watch: {
    selectedCityLatestEntry(entry) {
      this.insertIntoChartData(entry)
      this.allTime.max =
        entry.aqi > this.allTime.max ? entry.aqi : this.allTime.max
      this.allTime.min =
        entry.aqi < this.allTime.min ? entry.aqi : this.allTime.min
      this.allTime.latest = entry.aqi
    },
  },
  methods: {
    insertIntoChartData(entry) {
      if (this.chartData.labels.length >= HISTORY_LIMIT) {
        this.chartData.labels.splice(0, 1)
        this.chartData.datasets.forEach((dataset) => dataset.data.splice(0, 1))
      }
      this.chartData.labels.push(FormatDate.getTimeInHHmmss(entry.updatedAt))
      this.chartData.datasets.forEach((dataset) => dataset.data.push(entry.aqi))
      this.$refs.liveChart.refresh()
    },
    initializeInitData(entry) {
      if (!entry) return
      this.allTime.max = entry.aqi
      this.allTime.min = entry.aqi
      this.allTime.latest = entry.aqi
    },
  },
  mounted() {
    const vm = this
    if (!vm.selectedCity) {
      vm.$router.replace('/')
    }
    vm.chartData.datasets[0].label = vm.selectedCity
    const lastEntry = vm.cityHistory(vm.selectedCity)[
      vm.cityHistory(vm.selectedCity).length - 1
    ]
    if (!lastEntry) {
      return
    }
    this.initializeInitData(lastEntry)
    this.insertIntoChartData(lastEntry)
  },
  created() {
    if (!this.selectedCity) {
      this.$router.replace('/')
    }
    this.chartData.datasets[0].label = this.selectedCity
  },
}
</script>

<style scoped></style>
