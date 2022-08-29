const ProductsController =require('../controllers/products.controllers');

module.exports=app=>{
    app.get('/api/welcome',ProductsController.index);
    // app.get('/api/all',ProductsController.allProducts);
    app.post('/api/new/product',ProductsController.createProduct);
    // app.get('/api/product/:id',ProductsController.viewProduct);
}