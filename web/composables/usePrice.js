export const usePrice = () => {
  const options = ref([
    { label: 'Day', value: 'day' },
    { label: 'Week', value: 'week' },
    { label: 'Month', value: 'month' },
    { label: 'Year', value: 'year' },
    { label: 'Arbitrary', value: 'arbitrary' },
  ]);
  const selectValue = ref('week');
  const needsPickRange = ref(false);
  const range = ref(getRange(selectValue.value));
  const dataPrice = ref([]);

  const onSelectChange = (newValue) => {
    selectValue.value = newValue;
  };

  const onRangeChange = (newRange) => {
    range.value = newRange;
  };

  watchEffect(() => {
    if (selectValue.value === 'arbitrary') {
      needsPickRange.value = true;
      range.value = getRange('day');
      return;
    }

    needsPickRange.value = false;
    range.value = getRange(selectValue.value);
  });

  watchEffect(async () => {
    await useFetch('/api/prices', {
      query: { from: range.value[0].valueOf(), to: range.value[1].valueOf() },
      onResponse({ response }) {
        dataPrice.value = response._data;
      },
    });
  });

  return { options, selectValue, needsPickRange, range, dataPrice, onSelectChange, onRangeChange };
};
