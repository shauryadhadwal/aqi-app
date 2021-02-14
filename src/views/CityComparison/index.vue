<template>
  <section id="heading-section" class="p-grid">
    <div class="p-col-1 p-grid p-jc-center p-align-center">
      <RedirectToHomeButton />
    </div>
    <div class="p-col p-grid p-jc-left p-align-center">
      <Button
        @click="resetDropdown"
        icon="pi pi-refresh"
        class="p-button-sm p-button-outlined p-button-rounded p-mr-1"
        v-tooltip="'Reset Dropdown'"
      />
      <MultiSelect
        v-model="selectedCities"
        :options="availableCities"
        optionLabel="name"
        placeholder="Select cities to compare"
        class="multiselect-custom"
      >
        <template #value="slotProps">
          <div
            class="city-item city-item-value"
            v-for="option of slotProps.value"
            :key="option.code"
          >
            <div>{{ option.name }}</div>
          </div>
          <template v-if="!slotProps.value || slotProps.value.length === 0">
            Select upto 5 cities to compare
          </template>
        </template>
        <template #option="slotProps">
          <div class="city-item">
            <div>{{ slotProps.option.name }}</div>
          </div>
        </template>
      </MultiSelect>
    </div>
  </section>
  <section id="actions-section"></section>
  <section id="chart-section">
    <ChartSection :cities="selectedCities" />
  </section>
</template>

<script>
import RedirectToHomeButton from '@/components/Button/RedirectToHome'
import ChartSection from './ChartSection'
import { mapGetters, mapState } from 'vuex'
import { SortCities } from '../../shared/utils'
import { COMPARISONS_LIMIT } from '../../shared/constants'

export default {
  components: { RedirectToHomeButton, ChartSection },
  data() {
    return {
      selectedCities: [],
      availableCities: [],
    }
  },
  computed: {
    ...mapGetters({ citiesInStore: 'allCities' }),
    ...mapState({ citiesInComparisonList: 'comparisonList' }),
  },
  methods: {
    generateChart() {},
    resetDropdown() {
      this.clearSelectedCities()
      this.populateAvailableCitiesList()
    },
    clearSelectedCities() {
      this.selectedCities = []
    },
    populateAvailableCitiesList() {
      this.availableCities = this.citiesInStore
        .map((ele) => ({
          name: ele.name,
        }))
        .sort(SortCities.byName)
    },
  },
  watch: {
    selectedCities() {
      if (this.selectedCities.length > COMPARISONS_LIMIT) {
        this.selectedCities = this.selectedCities.slice(0, COMPARISONS_LIMIT)
      }
    },
  },
  mounted() {
    this.populateAvailableCitiesList()
    this.selectedCities = [...this.citiesInComparisonList].map((entry) => ({
      name: entry,
    }))
  },
  beforeUnmount() {
    this.$store.dispatch('clearComparisonList')
  },
}
</script>

<style scoped lang="scss">
.p-multiselect {
  min-width: 15rem;
}

::v-deep(.multiselect-custom) {
  .p-multiselect-label:not(.p-placeholder) {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }

  .city-item-value {
    padding: 0.25rem 0.5rem;
    border-radius: 3px;
    display: inline-flex;
    margin-right: 0.5rem;
    background-color: var(--primary-color);
    color: var(--primary-color-text);

    img.flag {
      width: 17px;
    }
  }
}
</style>
