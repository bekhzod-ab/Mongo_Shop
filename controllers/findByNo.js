const handling = require("../models/DBhandling.js")


const findOne = async (req,res) => {
    const article = await handling.ArticleInObject(req.params.article) // if error try req.body.article
    res.json(article)
}

module.exports = findOne;