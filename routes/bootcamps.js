const express = require('express')

const {
    getBootcamps,
    getBootcamp,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp,
    getBootcampInRadius,
    bootcampPhotoUpload
} = require('../controllers/bootcamps')

const router = express.Router()

const { protect } = require('../middleware/auth')
const Bootcamp = require('../models/Bootcamp')

router.route('/radius/:zipcode/:distance').get(getBootcampInRadius)

router.route('/:id/photo').put( bootcampPhotoUpload)

router.route('/')
    .get(getBootcamps)
    .post(protect, createBootcamp)

router.route('/:id') 
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp)


module.exports = router;