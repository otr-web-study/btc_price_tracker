import dayjs from 'dayjs';

export const getRange = (selectValue) => {
  return [dayjs().subtract(1, selectValue), dayjs()];
};
