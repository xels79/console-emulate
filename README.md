# console-emulate
## Выводит данные в блок div иммтируя консоль.
### Файл `index.html`:
```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <title>Заголовок</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/console.css">
    <!-- Требуется jQuery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  </head>
  <body>
    <div class="console" id="console"></div>
    <script src="js/console.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
```
### Файл `main.js`:
```JS
const cons = new MyConsole('#console');
cons.log("Привет мир!");
```
