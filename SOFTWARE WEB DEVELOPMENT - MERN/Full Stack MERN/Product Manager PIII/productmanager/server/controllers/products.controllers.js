const { Product } = require('../models/products.model');

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

module.exports.allProducts = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.json({ message: 'something went wrong', error: err }));
};

module.exports.viewProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(product => res.json(product))
        .catch(err => res.json(err))
}
