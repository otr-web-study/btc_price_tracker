# Тестовое задание для отклика BTC Price Tracker

## Внимание

Проект использует сторонний сервис получения цен BTC, который, в свою очередь, требует наличие ключа API.
Ключ API можно получить по адресу: [cryptocompare.com](https://www.cryptocompare.com/)

### Инструкция по установке на локальный компьютер

Клонировать репозиторий и перейти в папку проекта

```
git clone https://github.com/otr-web-study/btc_price_tracker && cd btc_price_tracker
```

В папке репозитория создать файл .service.env со следующим содержимым:

```
API_KEY=cryptocompare_key
```

Где cryptocompare_key - ключ API полученный в сервисе [cryptocompare.com](https://www.cryptocompare.com/)

Запустить проект

```
sudo docker compose up --build
```
