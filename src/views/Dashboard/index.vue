<template>
  <Card>
    <template #content>
      <DataTable :value="allCities">
        <Column field="name" header="Name" :sortable="true">
          <template #body="slotProps">
            <strong>
              {{ slotProps.data.name }}
            </strong>
          </template>
        </Column>
        <Column field="aqi" header="Air Quality Index" :sortable="true">
          <template #body="slotProps">
            <AqiValue :value="slotProps.data.aqi" />
          </template>
        </Column>
        <Column field="updatedAt" header="Last Updated At" :sortable="true">
          <template #body="slotProps">
            <span>
              {{ getTimeString(slotProps.data.updatedAt) }}
            </span>
          </template>
        </Column>
        <Column field="updatedAt" header="Category">
          <template #body="slotProps">
            <AqiCategory :value="slotProps.data.aqi" />
          </template>
        </Column>
        <Column field="" header="Actions">
          <template #body="slotProps">
            <Button
              @click="redirectToLiveView(slotProps.data.name)"
              icon="pi pi-chart-line"
              class="p-button-sm p-button-outlined p-button-rounded p-mr-1"
              v-tooltip="'Live Chart'"
            />
            <Button
              @click="redirectToComparisonView(slotProps.data.name)"
              icon="pi pi-table"
              class="p-button-sm p-button-outlined p-button-rounded"
              v-tooltip="'Compare Now'"
            />
          </template>
        </Column>
      </DataTable>
    </template>
  </Card>
</template>

<script>
import { mapGetters } from 'vuex'
import AqiValue from '@/components/Table/AqiValue'
import AqiCategory from '@/components/Table/AqiCategory'
import { getTimeInRelativeFormat } from '../../shared/utils'
export default {
  name: 'Home',
  components: { AqiValue, AqiCategory },
  computed: {
    ...mapGetters({ allCities: 'allCitiesSortedByName' }),
  },
  methods: {
    getTimeString(dateObject) {
      return getTimeInRelativeFormat(
        new Date().getMilliseconds(),
        dateObject.getMilliseconds()
      )
    },
    redirectToLiveView(city) {
      this.$store.dispatch('updateSelectedCity', city)
      this.$router.push('/liveChart').catch((err) => console.error(err))
    },
    redirectToComparisonView(city) {
      this.$store.dispatch('addToComparisonList', city)
      this.$router.push('/cityComparison').catch((err) => console.error(err))
    },
  },
}
</script>
