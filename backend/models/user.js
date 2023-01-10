const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['ACTIVE', 'INACTIVE', 'FREEZED']
        }
    },
    {
        tableName: "Users"
    }
)

module.exports = User;