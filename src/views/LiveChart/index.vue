<template>
  <section id="heading-section" class="p-grid">
    <div class="p-col-1 p-grid p-jc-center p-align-center">
      <Button
        @click="redirectToHome"
        icon="pi pi-home"
        class="p-button-sm p-button-outlined p-button-rounded"
      />
    </div>
    <div class="p-col">
      <h1>Live Chart for {{ selectedCity }}</h1>
    </div>
  </section>
  <section id="chart-section">
    <Card>
      <template #content>
        <Chart
          type="line"
          :data="chartData"
          :options="chartOptions"
          :height="400"
          ref="liveChart"
        />
      </template>
    </Card>
  </section>
  <section id="status-section" class="p-d-flex p-jc-center badge-container">
    <AqiLevelBadge :label="'All Time High'" :value="allTime.max" />
    <AqiLevelBadge :label="'All Time Low'" :value="allTime.min" />
    <AqiLevelBadge :label="'Latest'" :value="allTime.latest" />
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { FormatDate } from '../../shared/utils'
import { HISTORY_LIMIT } from '../../shared/constants'
import AqiLevelBadge from '@/components/Badge/AqiLevelBadge'

const getChartOptions = () => ({
  maintainAspectRatio: false,
  elements: {
    line: {
      tension: 0,
      borderColor: '#54636D',
    },
  },
  scales: {
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          autoSkip: false,
          stepSize: 1,
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          autoSkip: false,
          maxRotation: 90,
          minRotation: 45,
        },
        gridLines: {
          display: false,
        },
      },
    ],
  },
  hover: {
    animationDuration: 0,
  },
  animation: {
    duration: 0,
  },
})

const getDataSets = () => [
  {
    label: undefined,
    backgroundColor: '#DCE6EC',
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
      if (!entry) return
      this.insertEntriesIntoChartData([entry])
      this.allTime.max =
        entry.aqi > this.allTime.max ? entry.aqi : this.allTime.max
      this.allTime.min =
        entry.aqi < this.allTime.min ? entry.aqi : this.allTime.min
      this.allTime.latest = entry.aqi
    },
  },
  methods: {
    redirectToHome() {
      this.$router.replace('/').catch((err) => console.error(err))
    },
    insertEntriesIntoChartData(entries) {
      if (this.chartData.labels.length >= HISTORY_LIMIT) {
        this.chartData.labels.splice(0, entries.length)
        this.chartData.datasets.forEach((dataset) =>
          dataset.data.splice(0, entries.length)
        )
      }
      entries.forEach((entry) => {
        this.chartData.labels.push(FormatDate.getTimeInHHmmss(entry.updatedAt))
        this.chartData.datasets.forEach((dataset) =>
          dataset.data.push(entry.aqi)
        )
      })
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
      return
    }
    vm.chartData.datasets[0].label = vm.selectedCity

    const entries = vm.cityHistory(vm.selectedCity)
    if (!entries.length) {
      return
    }
    this.initializeInitData(entries[entries.length - 1])
    this.insertEntriesIntoChartData(entries)
  },
  created() {
    if (!this.selectedCity) {
      this.$router.replace('/')
      return
    }
    this.chartData.datasets[0].label = this.selectedCity
  },
}
</script>

<style scoped>
#chart-section {
  height: 60vh;
  position: relative;
}
</style>
