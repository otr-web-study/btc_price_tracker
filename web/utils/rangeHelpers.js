import dayjs from 'dayjs';

export const getRange = (selectValue) => {
  // const now = dayjs();
  // let start;

  // switch (selectValue) {
  //   case 'day': {
  //     start = now.subtract(1, 'day');
  //     break;
  //   }
  //   case 'week': {
  //     start = now.subtract(1, 'week');
  //     break;
  //   }
  //   case 'month': {
  //     start = now.subtract(1, 'month');
  //     break;
  //   }
  //   case 'year': {
  //     start = now.subtract(1, 'year');
  //     break;
  //   }
  //   default: {
  //     start = now.clone();
  //   }
  // }

  // return [start, now];
  return [dayjs().subtract(1, selectValue), dayjs()];
};
