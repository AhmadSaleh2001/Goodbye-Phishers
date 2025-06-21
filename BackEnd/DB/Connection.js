const { Sequelize } = require("sequelize");
const Conn = new Sequelize("phishing_database", "root", "", {
  dialect: "mysql",
  host: "",
});

const Connect = async () => {
  return await Conn.sync({ force: true });
};

module.exports = {
  Conn,
  Connect,
};
