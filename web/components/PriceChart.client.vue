<script setup>
import { LineChart } from '@opd/g2plot-vue';

const props = defineProps(['dataPrice']);

const prices = computed(() => props.dataPrice.map((item) => item.price));
const min = computed(() => Math.floor(Math.min(...prices.value)) - 5);
const max = computed(() => Math.floor(Math.max(...prices.value)) + 5);

const config = ref({
  padding: 'auto',
  xField: 'date',
  yField: 'price',
  autoFit: true,
  height: 600,
  xAxis: {
    tickCount: 5,
    label: {
      formatter: (v) => timestampToDate(+v),
    },
  },
  slider: {
    start: 0.1,
    end: 0.5,
    formatter: (v) => timestampToDateTime(v),
  },
  meta: {
    price: { min, max },
  },
  tooltip: {
    showTitle: false,
    formatter: (datum) => {
      return { name: timestampToDateTime(datum.date), value: datum.price };
    },
  },
});
console.log(min.value, max.value);
</script>

<template>
  <LineChart v-bind="config" :data="props.dataPrice" />
</template>
