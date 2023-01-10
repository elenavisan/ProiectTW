let express = require("express");
const { Op } = require("sequelize");
const Aliment = require("../models/aliment");
let router = express.Router();
const User = require("../models/user");

User.hasMany(Aliment);
User.belongsToMany(User, { through: "Relationships" });
