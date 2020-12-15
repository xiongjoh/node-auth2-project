const db = require("../../database/connection");

module.exports = {
  register(user) {
    return db("users")
      .insert(user)
      .then(([id]) => {
        return db("users").where({ id }).first();
      });
  },
  getUsers() {
    return db("users");
  },
  findBy(filter) {
    return db("users").where(filter).first();
  },
  findById(id) {
    return db("users").where({ id }).first();
  },
};
