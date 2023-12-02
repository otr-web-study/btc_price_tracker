<script setup>
import './index.css';

const { options, selectValue, onSelectChange } = usePrice();
</script>

<template>
  <TheHeader />
  <main class="main">
    <TheContainer>
      <TheControls :options="options" :selectValue="selectValue" @select-change="onSelectChange" />
    </TheContainer>
  </main>
</template>

<style scoped>
.main {
  padding-block: 20px;
}
</style>
