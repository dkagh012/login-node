"use strict";

class UserStorage {
  static #users = {
    id: ["dkagh054", "admin", "qowjdxo"],
    psword: ["1234", "1234", "123456"],
    name: ["배정태", "배정태", "배정태"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
  static getUserInfo(id) {
    const users = this.#users;
    //user를 받아오고
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // => [id, psword, name]
    // 여러 배열을의 키값을 받고
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }
  static save(userInfo){
    const users=this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
   return {success:true} ;
  }
}

module.exports = UserStorage;