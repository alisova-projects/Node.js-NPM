// экспортируем несколько
// const fetchAllUsers = () => {
//   console.log('fetchAllUsers');
// };

// const fetchUserById = id => {
//   console.log('fetchUserById');
// };

// const updateUserById = id => {
//   console.log('updateUserById');
// };

// export default { fetchAllUsers, fetchUserById, updateUserById };

import shortid from 'shortid';

// если хочу каждую функцию отдельно, то использую именной экспорт:
export const fetchAllUsers = () => {
  console.log('fetchAllUsers');
};

export const fetchUserById = id => {
  console.log('fetchUserById');
};

export const updateUserById = id => {
  console.log('updateUserById');
};

// export const x = 5;

// export const y = 'Mango';

export const addUser = name => {
  const user = {
    id: shortid.generate(),
    name,
  };
  console.log(user);
};
