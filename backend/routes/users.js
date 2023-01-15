let express = require("express");
const { Op } = require("sequelize");
const Aliment = require("../models/aliment");
let router = express.Router();
const User = require("../models/user");

User.hasMany(Aliment);
User.belongsToMany(User, { through: "Relationships", as:"Prieteni", foreignKey:"prietenId"});

router.route('/getUsers').get(async (req, res) => {
    const {simplified} = req.query;
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error){
        res.status(500).json(error);
    }
})

router.route('/addUser').post(async (req, res) => {
    try {
        const newUser = await User.create(req.body) 
        res.status(200).json(newUser)
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
})

module.exports = router;