# Blum auto play game

A script that will play mini game in Blum for you, using your tickets and collecting blum points

# Usage

1. Install Node.js and npm if you haven't already
2. Clone the repository and go to the folder
3. Copy your Blum `Bearer token` and paste it in the `src/helpers/api.js` file at `const authToken = "<your_token>";`
4. Install the dependencies by running `npm install`
5. Run the script by running `npm start`

# Functionality

- Starts a new game
- Collects a random number of points between 170 and 195
- Waits a random amount of time between 30 and 35 seconds
- Claims the points
- If an error occurs, waits 5 seconds and retries
- If the token is invalid, logs an error and exits
- If the number of tickets is 0, logs an error and exits

# Note:

First off all you need to `Allow Outside Content, Allow Frames and Enable CORS` from your browser using Chrome extension: [Resource Override](https://chromewebstore.google.com/detail/resource-override/pkoacgokdfckfpndoffpifphamojphii?utm_source=ext_app_menu).

# Happy mining!

---

# Блум автоматический игровой процесс

Скрипт, который будет играть за вас в мини-игру в Blum, используя ваши билеты и собирая очки Blum.

# Использование

1. Установите Node.js и npm, если вы ещё не установили
2. Клонируйте репозиторий и переходите в папку
3. Копируйте ваш Blum `Bearer token` и вставляйте его в файл `src/helpers/api.js` в поле `const authToken = "<your_token>";`
4. Установите зависимости, запустив `npm install`
5. Запустите скрипт, запуская `npm start`

# Функциональность

- Начинает новый игровой процесс
- Собирает случайное количество баллов между 170 и 195
- Ожидает случайное количество времени между 30 и 35 секунд
- Объявляет баллы
- Если возникнет ошибка, ожидает 5 секунд и повторяет
- Если токен недействителен, логирует ошибку и выходит
- Если количество билетов 0, логирует ошибку и выходит

# Примечание:

Прежде всего вам нужно «Разрешить внешний контент, разрешить фреймы и включить CORS» в вашем браузере, используя расширение Chrome: [Resource Override](https://chromewebstore.google.com/detail/resource-override/pkoacgokdfckfpndoffpifphamojphii?utm_source=ext_app_menu).

# Приятного майнинга!
