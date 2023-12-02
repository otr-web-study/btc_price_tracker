<script setup>
const props = defineProps(['options', 'selectValue']);
const emits = defineEmits(['select-change']);
</script>

<template>
  <a-select
    :value="props.selectValue"
    style="width: 120px"
    @change="emits('select-change', $event)"
  >
    <a-select-option v-for="option in props.options" :key="option.value" :value="option.value">{{
      option.label
    }}</a-select-option>
  </a-select>
</template>

<style scoped></style>
