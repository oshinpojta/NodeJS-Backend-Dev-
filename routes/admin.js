const express = require('express');

const router = express.Router();

//  /admin/add-product
router.get('/add-product',(req, res, next) => {
    res.send("<form action='/admin/add-product' method='POST'> Title : <input type='text' name='title'><br> Size : <input type='number' name='size'><br><button type='Submit'>Add Product</button></form>")
});

router.post('/add-product',(req, res, next) => {
    console.log(req.body.title);
    console.log(req.body.size);
    res.redirect('/shop');
});


module.exports = router;