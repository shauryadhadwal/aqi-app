<template>
  <section class="p-grid p-jc-center p-align-center p-flex-column topbar">
    <div class="header">
      Air Quality Monitoring
    </div>
    <div class="sub-header">For Major Indian Cities</div>
  </section>
  <section class="main-content">
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </section>
</template>

<style lang="scss" scoped>
.topbar {
  background-color: #2b6785;
  color: #e2edea;
  padding: 0.5rem 0;

  .header {
    font-weight: 900;
    font-size: 2rem;
  }
  .sub-header {
    font-weight: 700;
    font-size: 1rem;
  }
}
.main-content {
  padding: 2rem 10rem;
}
</style>
