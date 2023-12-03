<script setup>
import './index.css';

const { options, selectValue, needsPickRange, range, dataPrice, onSelectChange, onRangeChange } =
  usePrice();
</script>

<template>
  <TheHeader />
  <TheContainer>
    <main class="main">
      <TheControls
        :options="options"
        :selectValue="selectValue"
        :needsPickRange="needsPickRange"
        :range="range"
        @select-change="onSelectChange"
        @range-change="onRangeChange"
      />
      <PriceChart :dataPrice="dataPrice" />
    </main>
  </TheContainer>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-block: 40px;
}
</style>
