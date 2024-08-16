# Blum auto play game

A script that will play mini game in Blum for you, using your tickets and collecting blum points

## Installation

1. **Install the `blum-auto-play` package:**

```bash
npm install blum-auto-play
```

2. **Configure `package.json`:**

   - Open `package.json`
   - Add `"type": "module"` to the JSON structure:

```json
{
  "type": "module"
}
```

3. **Create a `index.js` file and paste the code:**

```javascript
import { play } from "blum-auto-play";
const authToken = "Bearer <your_token>";
play(authToken);
```

4. **Add your Bearer token:**

   - Copy your Blum `Bearer token` and paste it in the `index.js` file.

## Receiving a Bearer token

1. **Install the [`Resource Override`](https://chromewebstore.google.com/detail/resource-override/pkoacgokdfckfpndoffpifphamojphii?utm_source=ext_app_menu) extension for Chrome**

2. **Set up Resource Override:**
   - Click the `Add Rule` button and select `Change Headers`.
   - In the `For` field, enter `*` (for convenience).
   - Click `Edit Headers` and select from the presets: `Enable CORS`, `Allow Frames` and `Allow Outside Content`.
   - Close the settings window.
3. **Get your Bearer token:**

   - Go to the web version of Telegram and open DevTools (usually F12 or Ctrl+Shift+I).
   - Launch Blum and go to the `Network` tab in DevTools.
   - Find your Bearer token in the request headers.

4. **Copy your Bearer token and paste it into the index.js file.**

![how to get Bearer token](./src/assets/token.jpg)

## Run the script:

```bash
   node index.js
```

## Functionality

- Starts a new game
- Collects a random number of points between 170 and 195
- Waits a random amount of time between 30 and 35 seconds
- Claims the points
- If an error occurs, waits 5 seconds and retries
- If the token is invalid, logs an error and exits
- If the number of tickets is 0, logs an error and exits

## Note:

Once you have received the Bearer token, be sure to disable the Resource Override extension to avoid problems with other sites.

![extension](./src/assets/resource.jpg)

# Happy mining!

---

# Блум автоматический игровой процесс

Скрипт, который будет играть за вас в мини-игру в Blum, используя ваши билеты и собирая очки Blum.

## Установка

1. **Установите пакет `blum-auto-play`:**
   ```bash
   npm install blum-auto-play
   ```
2. **Настройте `package.json`:**

   - Откройте файл `package.json`.
   - Добавьте `"type": "module"` в JSON-структуру:

   ```json
   {
     "type": "module"
   }
   ```

3. **Создайте файл `index.js` и добавьте следующий код:**

   ```javascript
   import { play } from "blum-auto-play";
   const authToken = "Bearer <ваш_токен>";
   play(authToken);
   ```

4. **Добавьте ваш Bearer токен:**
   - Вставьте ваш Bearer токен вместо `<Bearer token>` в файле index.js.

## Получение Bearer токена

1. **Установите расширение [`Resource Override`](https://chromewebstore.google.com/detail/resource-override/pkoacgokdfckfpndoffpifphamojphii?utm_source=ext_app_menu) для Chrome**

2. **Настройте Resource Override:**
   - Нажмите кнопку `Add Rule` и выберите `Change Headers`.
   - В поле `For` введите `*` (для удобства).
   - Нажмите `Edit Headers` и выберите в предустановках: `Enable CORS`, `Allow Frames` и `Allow Outside Content`.
   - Закройте окно настройки.
3. **Откройте Web Telegram и DevTools:**
   - Перейдите на веб-версию Telegram и откройте DevTools (обычно F12 или Ctrl+Shift+I).
   - Запустите Blum и перейдите на вкладку `Network` в DevTools.
   - Найдите ваш Bearer токен в заголовках запросов.
4. **Копируйте ваш Bearer токен и вставьте его в файл index.js.**

![how to get Bearer token](./src/assets/token.jpg)

## Запустите скрипт:

```bash
   node index.js
```

## Функциональность

- Запускает новую игру.
- Собирает случайное количество очков от 170 до 195.
- Ждет случайное время от 30 до 35 секунд.
- Забирает очки.
- В случае ошибки ждет 5 секунд и пробует снова.
- Если токен недействителен, скрипт выводит ошибку и завершает работу.
- Если билетов 0, скрипт выводит ошибку и завершает работу.

## Важно:

После того как вы получили Bearer токен, обязательно отключите расширение Resource Override, чтобы избежать проблем с другими сайтами.

![extension](./src/assets/resource.jpg)

# Приятного майнинга!
