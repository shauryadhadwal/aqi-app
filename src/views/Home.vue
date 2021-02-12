<template>
  <div class="home">
    <div v-for="city in allCities" :key="city.name">{{ city }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {},
  computed: {
    ...mapGetters(['allCities']),
  },
}
</script>
