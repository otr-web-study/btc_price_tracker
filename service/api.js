import WebSocket from 'ws';
import { API_KEY } from './config.js';
import logger from './logger.js';

const AGGREGATE_INDEX = '5';
const INVALID_SUB_MESSAGE = 'INVALID_SUB';
const ERROR_MESSAGE = '500';
const UNAUTHORIZED_MESSAGE = '401';
const API_URL = `wss://streamer.cryptocompare.com/v2?api_key=${API_KEY}`;

const handlers = [];

let socket = new WebSocket(API_URL);

socket.on('message', (data) => {
  const parsedData = JSON.parse(data);
  const { TYPE: type } = parsedData;

  if (type === AGGREGATE_INDEX) {
    let { PRICE: price } = parsedData;

    if (!price) {
      return;
    }

    handlers.forEach((h) => h(price));
  } else if (type === ERROR_MESSAGE) {
    const { INFO: info, MESSAGE: message } = parsedData;

    logger.error(info);

    if (message === INVALID_SUB_MESSAGE) {
      socket.close();
    }
  } else if (type === UNAUTHORIZED_MESSAGE) {
    logger.fatal('Error: unauthorized');
    socket.terminate();
  }
});

socket.on('close', (e) => {
  logger.warn(`Connection closed. Code: ${e.code} Reason: ${e.reason}`);

  setTimeout(() => {
    new WebSocket(API_URL);
  }, 60000);
});

socket.on('error', (e) => {
  logger.error(`Error event: ${e}`);
});

export const subscribe = (handler) => {
  handlers.push(handler);

  const message = {
    action: 'SubAdd',
    subs: ['5~CCCAGG~BTC~USD'],
  };

  if (socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(message));
    return;
  }

  socket.on(
    'open',
    () => {
      logger.info('Connection established');
      socket.send(JSON.stringify(message));
    },
    { once: true },
  );
};
