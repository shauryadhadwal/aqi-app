<template>
  <Card>
    <template #content>
      <DataTable :value="allCities">
        <Column field="name" header="Name" :sortable="true"></Column>
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
        <Column field="" header="Actions">
          <template #body="slotProps">
            <Button
              @click="updateSelectedCity(slotProps.data.name)"
              icon="pi pi-chart-line"
              class="p-button-sm p-button-outlined p-button-rounded"
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
import { getTimeInRelativeFormat } from '../../shared/utils'
export default {
  name: 'Home',
  components: { AqiValue },
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
    updateSelectedCity(city) {
      this.$store.dispatch('updateSelectedCity', city)
      this.$router.push('/liveChart').catch((err) => console.error(err))
    },
  },
}
</script>
