"use strict";

const router = require("express").Router();

const { Comment } = require("../../models");

router.get("/", async (req, res) => {
    try {
        const data = await Comment.findAll({ include: { all: true }, order: [['createdOn', 'DESC']]});
        res.json(data);
    } catch (err) {
        res.status(500).json({ msg: "an error occurred", err });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const data = await Comment.findByPk(req.params.id, { include: { all: true }});
        data === null ? res.status(404).json({msg: "no comment with this id "}) : res.status(200).json(data);
    } catch (err) {
        res.status(500).send({msg: "an error occurred", err });
    }
})

router.post('/', async (req, res) => {
    try {
        const message = !req.body.content ? "No, content" : 
            !req.body.profile_id ? "No profile_id" :
                null;
        if (message) {
            res.status(400).json({err: message });
        }
        const data = await Comment.create(req.body);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).send({msg: "an error occurred", err });
    }
})

router.put('/:id', async (req, res) => {
    try {
        const data = await Comment.update(req.body, {where: { id: req.params.id }});
        data[0] === 0 ? res.status(404).json({msg: "not found"}) : res.json(data);
    } catch (err) {
        res.status(500).send({msg: "an error occurred", err });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const data = await Comment.destroy({where: {id: req.params.id}});
        data[0] === 0 ? res.status(404).json({msg: "not found"}) : res.json(data);
    } catch (err) {
        res.status(500).send({msg: "an error occurred", err });
    }
})

module.exports = router;