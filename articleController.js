const articleService = require('../services/articleService');

// Add a new article
function addArticle(req, res) {
    const { title, content, tags } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required." });
    }
    const article = articleService.addArticle({ title, content, tags: tags || [] });
    res.status(201).json(article);
}

// Search for articles
function searchArticles(req, res) {
    const { keyword } = req.query;
    if (!keyword) {
        return res.status(400).json({ error: "Keyword is required." });
    }
    const results = articleService.searchArticles(keyword);
    res.json(results);
}

// Get an article by ID
function getArticle(req, res) {
    const { id } = req.params;
    const article = articleService.getArticleById(id);
    if (!article) {
        return res.status(404).json({ error: "Article not found." });
    }
    res.json(article);
}

module.exports = { addArticle, searchArticles, getArticle };
