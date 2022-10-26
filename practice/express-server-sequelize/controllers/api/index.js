"use strict";

const router = require("express").Router();

const commentRoutes = require('./commentRoutes');
const profileRoutes = require('./profileRoutes');

router.use('/comments', commentRoutes);
router.use('/profiles', profileRoutes);

module.exports = router;