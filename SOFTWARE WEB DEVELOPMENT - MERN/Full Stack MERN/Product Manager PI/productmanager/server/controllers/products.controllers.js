const { Product } = require('../models/products.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
// The method below is new
module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(Product => res.json(Product))
        .catch(err => res.json(err));
}
