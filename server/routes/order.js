const express = require('express')
const authCheck = require('../middleware/auth-check');
const Part = require('../models/Part');
const Order = require('../models/Order');
const User = require('../models/User');

const router = new express.Router()

router.post('/add/:partId', authCheck, async (req, res) => {
    const partId = req.params.partId;
    const userId = req.user._id;

    // let part = await Part.findById(partId)
    // .then((data)=>{
    //     Order.create({
    //         buyer: user,
    //         part: data
    //     }).then(() => {
    //         res.status(200).json({
    //             success: true,
    //             message: 'Part added successfully to cart.'
    //         })
    //     })
    // })

    Order.create({
        buyer: userId,
        part: partId
    })
        .then(() => {
            res.status(200).json({
                success: true,
                message: 'Part added successfully to cart.'
            })
        })
})

router.get('/user', authCheck, async (req, res) => {
    const user = req.user._id

    await Order.find({ buyer: user })
        .populate('part')
        .then((parts) => {
            return res.status(200).json(parts)
        })
})

module.exports = router