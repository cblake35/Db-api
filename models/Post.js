const { DataTypes } = require('sequelize');
const { sequelize } = require('../db')

const Post = sequelize.define('post', {
    content: {
        type: DataTypes.STRING
    }
})

module.exports = {
    Post
}