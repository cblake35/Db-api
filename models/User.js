const { DataTypes } = require('sequelize');
const { sequelize } = require('../db')

const User = sequelize.define('user', {
    username: {
        type: DataTypes.STRING
    }
})

module.exports = {
    User
}