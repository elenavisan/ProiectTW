let express = require('express')
const { Op } = require('sequelize')
const User = require('../models/user')
let router = express.Router()
const Aliment = require("../models/aliment")

const checkId = (req, res, next) => {
    if (req.params.id && isNaN(req.params.id)) {
        res.status(400).json({"error" : "wrong input for id"})
    } else {
        next();
    }
}

router.route('/getAliment/:id').get(checkId, async (req, res) => {
    try {
        const aliment = await Aliment.findByPk(req.params.id);
        if (aliment){
            res.status(200).json(aliment);
        } else {
            res.status(404).json({ error: `Task with id ${req.params.id} not found!`})
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

router.route('/getAliments').get(async (req, res) => {
    const {simplified} = req.query;
    const {pIsDone} = req.query; //DE MODIFICAT
    try {
        const tasks = await Aliment.findAll({
            //attributes: ['title'],
            attributes: simplified ? {exclude: "id"} : undefined,
            where: pIsDone ? {isDone: Boolean(pIsDone) } : undefined
        });
        res.status(200).json(aliments);
    } catch (error){
        res.status(500).json(error);
    }
})

router.route('/addAliment').post(async (req, res) => {
    try {
        const newAliment = await Aliment.create(req.body) 
        res.status(200).json(newAliment)
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
})

router.route('/users/:userId/aliment').post(async (req, res) => {
    try {
        const user = await User.findByPk(req.params.userId)
        if (user){
            const newAliment = new Task(req.body) 
            newTask.UserId = user.id;
            await newAliment.save();
            res.status(200).json({"message": "Aliment added!"})
        } else {
            res.status(404).json({ error: `User with id ${req.params.userId} not found!`})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
})

router.route('/user/:userId/aliment').get(async (req, res) => {
    try {
        const user = await User.findByPk(req.params.userId, {
            include: [Aliment]
        })
        if (user){
            res.status(200).json(user.Aliments)
        } else {
            res.status(404).json({ error: `User with id ${req.params.userId} not found!`})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
})

router.route('/users/:userId/task/:alimentId').put(async (req, res) => {
    try {
        const user = await User.findByPk(req.params.userId)
        if (user){
            const aliments = await user.getAliments({id : req.params.userId})
            let user = users.shift();
            if (aliments){
                aliment = await aliment.update(req.body);
            }
            res.status(200).json(aliment)
        } else {
            res.status(404).json({ error: `User with id ${req.params.userId} not found!`})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
})

router.route('/modifyAliment/:id').put(async (req, res) => {
    try {
        const aliment = await Aliment.findByPk(req.params.id);
        if (aliment){
            const updatedAliment = await aliment.update(req.body);
            res.status(200).json(updatedAliment);
        } else {
            res.status(404).json({ error: `Aliment with id ${req.params.id} not found!`})
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

router.route('/deleteAliment/:id').delete((req, res) => {
    try {
        Aliment.destroy({
            where: {
                id: req.params.id
            }
        })
        .then((rows)=> {
            if (rows  === 1){
                res.status(200).json({ status: "aliment deleted!"})
            } else {
                res.status(202).json({ status: "aliment does not exists!"})
            }
        })
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;