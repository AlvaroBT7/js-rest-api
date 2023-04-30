// export const updateJson = (newEntry) => {
//   window.localStorage.setItem("data", JSON.stringify(newEntry));
//   return newEntry;
// };

// export const loadJson = () => {
//   return window.localStorage.getItem("data")
//     ? JSON.parse(window.localStorage.getItem("data"))
//     : [];
// };

export const createUser = ({ name, age }) => {
  if ([name, age].includes(undefined))
    throw new Error("You miss arguments creating the user !");
  return {
    name,
    age,
  };
};

export const getUsers = (users) => {
  if (!users) throw new Error("You must include the users");
  return users;
};

export const getUsersWithoutDetails = (users) => {
  return users.map(({ id, name }) => {
    return {
      id,
      name,
    };
  });
};

export const addUser = (users, userToAdd) => {
  const newUser = {
    id: Math.max(...users.map((user) => user.id)) + 1,
    ...userToAdd,
  };
  users.push(newUser);

  // // updaing local storage data
  // updateJson(users);

  return newUser;
};

export const removeUser = (users, userToRemove) => {
  const newUsers = users.filter((user) => user.id !== userToRemove.id);
  // // updaing local storage data
  // updateJson(newUsers);
  return newUsers;
};

export const getUser = (users, userId) => {
  const user = users.find((user) => user.id === userId) || null;
  return user;
};
