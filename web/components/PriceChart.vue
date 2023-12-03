<script setup>
const props = defineProps(['dataPrice']);
</script>

<template>
  <div>
    <p v-for="item in props.dataPrice" :key="item._id">{{ item.date }} - {{ item.price }}</p>
  </div>
</template>

<style scoped></style>
