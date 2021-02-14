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
      <template #footer>
        <div class="p-grid p-jc-center">
          <Button
            v-show="!updatesArePaused"
            @click="toggleChartUpdateState"
            icon="pi pi-pause"
            class="p-button-sm p-button-outlined p-button-rounded"
            v-tooltip="'Pause'"
          />
          <Button
            v-show="updatesArePaused"
            @click="toggleChartUpdateState"
            icon="pi pi-play"
            class="p-button-sm p-button-outlined p-button-rounded"
            v-tooltip="'Resume'"
          />
        </div>
      </template>
    </Card>
  </section>
  <section id="status-section" class="p-d-flex p-jc-center badge-container">
    <AqiLevelBadge :label="'All Time High'" :value="allTimeLevels.max" />
    <AqiLevelBadge :label="'All Time Low'" :value="allTimeLevels.min" />
    <AqiLevelBadge :label="'Latest'" :value="allTimeLevels.latest" />
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { FormatDate } from '../../shared/utils'
import { HISTORY_LIMIT } from '../../shared/constants'
import AqiLevelBadge from '@/components/Badge/AqiLevelBadge'

const COLOUR_SCEME = {
  LINE_COLOUR: 'rgba(207, 216, 220 ,0.8)',
  AREA_COLOUR: 'rgba(207, 216, 220 , 0.2)',
}

const getChartOptions = () => ({
  maintainAspectRatio: false,
  elements: {
    line: {
      tension: 0,
      borderColor: COLOUR_SCEME.LINE_COLOUR,
      borderWidth: 8,
    },
  },
  scales: {
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 'AQI Levels',
        },
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
          autoSkip: false,
          stepSize: 1,
        },
      },
    ],
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 'Timestamp 24 Hour Format(HH:mm:ss)',
        },
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
    mode: 'index',
    intersect: false,
  },
  animation: {
    duration: 0,
  },
})

const getDataSets = () => [
  {
    label: undefined,
    backgroundColor: COLOUR_SCEME.AREA_COLOUR,
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
      allTimeLevels: {
        max: undefined,
        min: undefined,
        latest: undefined,
      },
      updatesArePaused: false,
    }
  },
  computed: {
    ...mapState(['selectedCity', 'selectedCityLatestEntry']),
    ...mapGetters({ cityHistory: 'cityHistoryWithFormattedDateString' }),
  },
  watch: {
    selectedCityLatestEntry(entry) {
      if (!entry || this.updatesArePaused) return
      this.insertEntriesIntoChartData([entry])
      this.allTimeLevels.max =
        entry.aqi > this.allTimeLevels.max ? entry.aqi : this.allTimeLevels.max
      this.allTimeLevels.min =
        entry.aqi < this.allTimeLevels.min ? entry.aqi : this.allTimeLevels.min
      this.allTimeLevels.latest = entry.aqi
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
      this.allTimeLevels.max = entry.aqi
      this.allTimeLevels.min = entry.aqi
      this.allTimeLevels.latest = entry.aqi
    },
    toggleChartUpdateState() {
      this.updatesArePaused = !this.updatesArePaused
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

<style scoped></style>
