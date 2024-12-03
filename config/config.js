require('dotenv').config()
module.exports = {
  development: {
      "username" : process.env.PGUSER_DEV,
      "password" : process.env.PGPASSWORD_DEV,
      "database" : process.env.PGDATABASE_DEV,
      "host" : process.env.PGHOST_DEV,
      "port" : process.env.PGPORT_DEV,
      "dialect" : "postgres",
  }
}