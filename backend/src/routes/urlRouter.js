const express = require('express')
const {generateNewShortURL, getAnalytics, getAll } = require('../controllers/urlController')
const router = express.Router();

router.post('/', generateNewShortURL) 

router.get('/analytics/:shortId', getAnalytics)
router.get('/all', getAll)

module.exports = router