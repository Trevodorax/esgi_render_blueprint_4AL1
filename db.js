const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  process.env.DB_CONNECTION_STRING,
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

console.log('Init db', process.env.DB_CONNECTION_STRING)
sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
