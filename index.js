const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

router.post('/articles', articleController.addArticle);
router.get('/articles/search', articleController.searchArticles);
router.get('/articles/:id', articleController.getArticle);

module.exports = router;
