// импорт для локальных модулей(локальных файлов)

import validatePassword from './js/validate-password';
import { addUser } from './js/api-service';

addUser('Mango');

// console.log(validatePassword('qweqwe'));
// import apiService from './js/api-service';

// переменные можно переназывать
// import {
//   fetchAllUsers,
//   fetchUserById,
//   updateUserById,
//   x as value,
//   y as name,
// } from './js/api-service';

// импортировать абсолютно всё из файла -
// import * as apiService from './js/api-service';

// console.log(apiService);

// console.log(fetchAllUsers);
// console.log(fetchUserById);
// console.log(updateUserById);
// console.log(value);
// console.log(name);

// console.log(apiService);

// бсолютный импорт используем, когда хоти импортировать пакеты(модули) из библиотек
