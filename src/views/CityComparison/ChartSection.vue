<template>
  <Card>
    <template #header>
      <section class="card-section">
        <Button
          @click="generateChart"
          class="p-button-sm p-ml-1"
          v-tooltip="''"
          label="Generate Snapshot"
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

const getMergedYValues = (timestamps, cityHistories, timestampMap) => {
  const finalArray = []
  for (var i = 0; i < timestamps.length; i++) {
    const matchingItem = cityHistories.find(
      (ele) => ele.updatedAtHHmmss === timestampMap[timestamps[i]]
    )
    if (matchingItem) {
      finalArray.push(matchingItem.aqi)
    } else {
      finalArray.push(null)
    }
  }
  return finalArray
}

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
      const timestampMap = {}
      const cityHistoriesSnapshot = {}
      // Save snapshot of histories
      vm.cities.forEach((city) => {
        cityHistoriesSnapshot[city.name] = vm.getCityHistory(city.name)
      })
      // Fetch all timestamps for selected cities
      Object.values(cityHistoriesSnapshot).forEach((historyList) => {
        historyList.forEach(
          (historyObj) =>
            (timestampMap[historyObj.updatedAtEpoch] =
              historyObj.updatedAtHHmmss)
        )
      })
      // Create datasets for each city
      // iterate over labels and add corresponding aqi of each city, if not present
      // fill value against timestamp as null
      const sortedTimestamps = Object.keys(timestampMap).sort()
      vm.cities.forEach((city, index) => {
        const yValues = getMergedYValues(
          sortedTimestamps,
          cityHistoriesSnapshot[city.name],
          timestampMap
        )
        vm.chartData.datasets.push(
          createDataSet(city.name, yValues, COLOUR_PALETTE[index])
        )
      })
      vm.chartData.labels = sortedTimestamps.map(
        (timestamp) => timestampMap[timestamp]
      )
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
