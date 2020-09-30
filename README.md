# Node.js-NPM

- Терминал
  - [Шпаргалка 1](https://tproger.ru/translations/bash-cheatsheet/)
  - [Шпаргалка 2](https://habr.com/ru/company/ruvds/blog/445270/)
  - Открыть
    - `control + ~`
    - `view > teminal`
    - через палитру `command + shift + p`
  - Основные полезные команды
    - путь (pwd)
    - лист (ls)
      - (ls -l) - покажет св-ва файлов и папок
      - (ls -la) - покажет скрытые файлы
    - навигация (cd)
      - зайти в диск С (cd c:)
      - подняться на две папки вверх (cd ../../)
      - зайти на две папки вниз (cd Documents/GitHub)
    - очистка `clear` или `control + l`
    - создание файлов (touch)
    - создание папок (mkdir)
    - переименование/перемещение (mv)
    - удаление (rm)
      - (rm dir) - удаляет пустую папку
      - (rm -rf css) - удалит папку и всё её содержимое (рекурсивное удаление в
        глубину - recursive forced)
    - (man ls) - если не знаем, что делает какая-то конкретная настройка.
      откроется вся инфа по ней. из него выйти - q
- Node.js и npm
  - установка
  - (node app.js) - выполнение скрипта в терминале (можно запустить любой
    js-файл/процесс)
  - инициализация и package.json
    - (npm init) > Enter > yes - инициализация один раз на проект
    - (npm init -y (или --yes)) - если не нужно вводить настройки в ручную
  - [npmjs.com](https://www.npmjs.com/)
  - работа с пакетами
    - установка (npm i joi)
    - удаление (npm remove joi)
  - CommonJS модули(модули - это export и import, в Node.js они называются
    CommonJS-синтаксис): const Joy = require('joi');
  - npm-скрипты - сокращения для наших команд: package.json > scripts > пишем
    свою команду ("qwe": "node app.js"). (Echo - команда для вывода текста. А
    так же между открывающими и закрывающими скобками может быть что угодно:
    любая команда в терминале) > запускаем в терминале: (npm run qwe). 2
    спецкоманды 'start' и 'test' можно запускать без run.
  - pre и post (дописываются в package.json) отрабатывают перед и после
    выбранного скрипта (npm start).
    - Pre-скрипты нужны при: допустим у нас собрка типа parcel и нам нужно
      удалить к.-л. лишние файлы - есть инсталл и преинсталл, чтобы перед
      инсталяцией поудалять лишние файлы, которые не нужны разрабу (картинки...,
      кот. лежат там для ДЕМО).
    - А Post-скрипты могут использоваться, когда у нас что-то сбилдилось и после
      этого можно деплойнуть что-то там. Делаешь npm run build, а после него
      deploy сделать автоматически.
    - примеры:
      1. "start": "node app.js", "prestart": "echo \"это prestart\"",
         "poststart": "echo \"это poststart\""
         > запускается командой npm start;
      2. "script-1": "echo \"скрипт 1\"", "script-2": "echo \"скрипт 2\"",
         "all": "npm run script-1 && npm run script-2"
         > запускается командой npm run all
  - (npm i) или (npm install) - устанавливает все пакеты, когда они удалены или
    их нет в скачаном из гитхаба проекта
- Транспиляция кода
  - [Babel](https://babeljs.io/)
  - CLI (npm install --save-dev @babel/core @babel/cli или npm install -D
    @babel/core @babel/cli) и npm-скрипты
  - Пресеты
  - [Browserslist](https://github.com/browserslist/browserslist) - файл
    настроек, который выбирает что делать и для каких видов браузера
- [Сборщик Parcel](https://parceljs.org/)
- [ECMAScript модули](https://exploringjs.com/es6/ch_modules.html)
  - Дефолтный (default) експорт и импорт (можно только что-то одно)
  - Именованный (named) експорт и импорт (когда нужно экспортировать несколько)
  - Импорт пространства имён (namespace)
  - дерево зависимостей (модулей)
