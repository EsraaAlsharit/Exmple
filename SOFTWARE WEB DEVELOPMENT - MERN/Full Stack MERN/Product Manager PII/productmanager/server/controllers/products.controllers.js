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

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allDaProducts => res.json({ Product: allDaProducts }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.allProducts = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.json({ message: 'something went wrong', error: err }));
};

module.exports.createProduct= (req, res) => {
    const { title, price, desc } = req.body;
    Product.create({
        title,
        price,
        desc
    })
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.viewProduct=(req, res) => {
        Product.findOne({ _id: req.params._id })
            .then(product => res.json(product))
            .catch(err => res.json(err))
    }
