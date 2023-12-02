export const usePrice = () => {
  const options = ref([
    { label: 'Day', value: 'day' },
    { label: 'Week', value: 'week' },
    { label: 'Month', value: 'month' },
    { label: 'Year', value: 'year' },
    { label: 'Arbitrary', value: 'arbitrary' },
  ]);
  const selectValue = ref('week');

  const onSelectChange = (newValue) => {
    selectValue.value = newValue;
  };

  return { options, selectValue, onSelectChange };
};
