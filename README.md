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
cons.log(2);
cons.log(true);
cons.log([2,3,4]);
cons.log(function(){});
cons.log({
    key1:"Привет мир!",
    k2: 2,
    key3:{
        key1:"Привет мир!",
        k2: 2,
        k3:true,
        k4:[22,23,24],
        key5:function(){}
    },
    k4:true,
    k5:[22,23,24],
    key5:function(){}
});
```
### Рузультат