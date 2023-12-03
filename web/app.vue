<script setup>
import './index.css';

const { options, selectValue, needsPickRange, range, dataPrice, onSelectChange, onRangeChange } =
  usePrice();
</script>

<template>
  <TheHeader />
  <main class="main">
    <TheContainer>
      <a-space direction="vertical" size="middle">
        <TheControls
          :options="options"
          :selectValue="selectValue"
          :needsPickRange="needsPickRange"
          :range="range"
          @select-change="onSelectChange"
          @range-change="onRangeChange"
        />
        <PriceChart :dataPrice="dataPrice" />
      </a-space>
    </TheContainer>
  </main>
</template>

<style scoped>
.main {
  padding-block: 20px;
}
</style>
