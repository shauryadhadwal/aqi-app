<template>
  <Card>
    <template #header>
      <section class="card-section">
        <Button
          @click="generateChart"
          class="p-button-sm p-ml-1"
          v-tooltip="''"
          label="Generate chart for data uptill now"
          :disabled="!cities.length"
        />
      </section>
    </template>
    <template #content>
      <Chart
        type="line"
        :data="chartData"
        :options="chartOptions"
        ref="comparisonChart"
      />
    </template>
    <template #footer></template>
  </Card>
</template>

<script>
import { mapGetters } from 'vuex'

const COLOUR_PALETTE = ['#FFBE0B', '#FB5607', '#FF006E', '#8338EC', '#3A86FF']

const getDefaultChartOptions = () => ({
  maintainAspectRatio: true,
  elements: {
    line: {
      tension: 0,
      borderWidth: 3,
      fill: false,
    },
  },
  scales: {
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 'AQI Levels',
        },
        gridLines: {},
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
      },
    ],
  },
})

const getDefaultChartData = () => ({
  labels: [] /** x axis */,
  datasets: [] /** y axis */,
})

const createDataSet = (cityName, yValues, color) => ({
  label: cityName,
  data: yValues,
  backgroundColor: color,
  borderColor: color,
})

export default {
  props: {
    cities: {
      type: Array,
    },
  },
  data() {
    return {
      chartData: getDefaultChartData(),
      chartOptions: getDefaultChartOptions(),
    }
  },
  computed: {
    ...mapGetters({ getCityHistory: 'cityHistoryWithFormattedDateString' }),
  },
  methods: {
    remakeChart() {
      this.$refs.comparisonChart.refresh()
    },
    generateChart() {
      const vm = this
      vm.chartData = getDefaultChartData()
      const firstCityHistories = vm.getCityHistory(vm.cities[0].name)
      const xValues = firstCityHistories.map((ele) => ele.updatedAtHHmmss)
      const yValues = firstCityHistories.map((ele) => ele.aqi)
      vm.chartData.datasets.push(
        createDataSet(vm.cities[0].name, yValues, COLOUR_PALETTE[0])
      )
      vm.chartData.labels = xValues
      vm.remakeChart()
    },
  },
}
</script>

<style scoped>
.card-section {
  padding: 1rem;
}
</style>
