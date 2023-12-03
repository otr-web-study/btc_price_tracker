<script setup>
defineProps(['options', 'selectValue', 'needsPickRange', 'range']);
const emits = defineEmits(['select-change', 'range-change']);
</script>

<template>
  <a-space>
    <a-select :value="selectValue" style="width: 120px" @change="emits('select-change', $event)">
      <a-select-option v-for="option in options" :key="option.value" :value="option.value">{{
        option.label
      }}</a-select-option>
    </a-select>
    <a-range-picker
      v-if="needsPickRange"
      :value="range"
      :allow-clear="false"
      @change="emits('range-change', $event)"
    />
  </a-space>
</template>

<style scoped></style>
