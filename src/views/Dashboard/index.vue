<template>
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
  </DataTable>
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
  },
}
</script>
