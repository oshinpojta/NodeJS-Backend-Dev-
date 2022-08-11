const express = require('express');
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path")

const viewsBasePath = path.join(rootDir,"views");

//  /admin/add-product
router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(viewsBasePath,"add-product.html"))
});

router.post('/add-product',(req, res, next) => {
    console.log(req.body.title);
    console.log(req.body.size);
    res.redirect('/');
});


module.exports = router;