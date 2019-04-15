const express = require('express')
const authCheck = require('../middleware/auth-check');
const Part = require('../models/Part');

const router = new express.Router()

function validatePartForm (payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  payload.year = parseInt(payload.year)
  payload.price = parseInt(payload.price)

  if (!payload || typeof payload.title !== 'string' || payload.title.length < 3) {
    isFormValid = false
    errors.make = 'Title must be more than 3 symbols.'
  }

  if (!payload || typeof payload.model !== 'string' || payload.model.length < 3) {
    isFormValid = false
    errors.model = 'Model must be more than 3 symbols.'
  }

  if (!payload || !payload.year || payload.year < 1950 || payload.year > 2050) {
    isFormValid = false
    errors.year = 'Year must be between 1920 and 2019.'
  }

  if (!payload || typeof payload.description !== 'string' || payload.description.length < 10) {
    isFormValid = false
    errors.description = 'Description must be more than 10 symbols.'
  }

  if (!payload || !payload.price || payload.price < 0) {
    isFormValid = false
    errors.price = 'Price must be a positive number.'
  }

  if (!payload || typeof payload.image !== 'string' || payload.image.length === 0) {
    isFormValid = false
    errors.image = 'Image URL is required.'
  }

  if (!isFormValid) {
    message = 'Check the form for errors.'
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}

router.post('/create', authCheck, (req, res) => {
  const part = req.body
  const validationResult = validatePartForm(part)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Part.create(part)
    .then(() => {
      res.status(200).json({
        success: true,
        message: 'Part added successfully.',
        part
      })
    })
})

router.get('/all', authCheck ,(req, res) => {
  const page = parseInt(req.query.page) || 1
  const search = req.query.search

  Part.find({})
    .then((part) => {
      return res.status(200).json(part)
    })
})

router.get('/details/:id', authCheck, (req, res) => {
  const id = req.params.id
  Part.findById(id)
    .then((part) => {
      if (!part) {
        return res.status(404).json({
          success: false,
          message: 'Entry does not exists!'
        })
      }

      let response = {
        id,
        title: part.title,
        model: part.model,
        year: part.year,
        description: part.description,
        price: part.price,
        image: part.image,
      }

      res.status(200).json(response)
    })
})


// router.get('/user', authCheck, (req, res) => {
//   const user = req.user._id

//   Part.find({creator: user})
//     .then((furniture) => {
//       return res.status(200).json(furniture)
//     })
// })

router.delete('/delete/:id', authCheck, (req, res) => {
  const id = req.params.id

  Part.findById(id)
    .then((part) => {
      if (!part) {
        return res.status(200).json({
          success: false,
          message: 'Part does not exists!'
        })
      }

      if (!req.user.roles.includes("Admin")) {
         return res.status(401).json({
           success: false,
           message: 'Unauthorized!'
         })
      }

      Part.findByIdAndDelete(id)
        .then(() => {
          return res.status(200).json({
            success: true,
            message: 'Part deleted successfully!'
          })
        })
    })
})

router.put('/edit/:id', authCheck, (req, res) => {
  const id = req.params.id;
  const part = req.body;

  if (!part) {
    return res.status(404).json({
      success: false,
      message: 'Part does not exists!'
    })
  }

  if (!req.user.roles.includes('Admin')) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized!'
    })
  }

  const validationResult = validatePartForm(part)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Part.findByIdAndUpdate(id, part)
    .then(() => {
      return res.status(200).json({
        success: true,
        message: 'Part edited successfully!'
      })
  })
})

router.get('/:id', authCheck, (req, res) => {
  const id = req.params.id

  Part.findById(id)
    .then(part => {
      if (!part) {
        return res.status(404).json({
          success: false,
          message: 'Entry does not exists!'
        })
      }

      let response = {
        id,
        title: furniture.title,
        model: furniture.model,
        year: furniture.year,
        description: furniture.description,
        price: furniture.price,
        image: furniture.image
      }

      res.status(200).json(response)
    })
})

module.exports = router
