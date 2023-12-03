import dayjs from 'dayjs';

export const timestampToDate = (timestamp) => dayjs(timestamp).format('DD.MM.YY');
export const timestampToDateTime = (timestamp) => dayjs(timestamp).format('DD.MM.YY HH:mm:ss');
