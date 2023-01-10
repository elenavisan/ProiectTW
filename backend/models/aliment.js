const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

const Aliment = sequelize.define(
    "Aliment",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING
        },
        expirationDate:{
            type: DataTypes.DATE
        },
        category: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ["LACTATE", "CARNE","DULCIURI",
            "PREPARATE","FRUCTE","LEGUME"]
        },
        disponibility: {
            type:DataTypes.BOOLEAN
        }
    },
    {
        tableName: "Alimente"
    }
)

module.exports = Aliment;