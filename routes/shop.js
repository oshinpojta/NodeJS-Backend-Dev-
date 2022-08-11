const express = require('express');
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path")

const viewsBasePath = path.join(rootDir,"views");

router.post('/success',(req, res, next) => {
    res.sendFile(path.join(viewsBasePath,"success.html"));
});

router.get('/contactus',(req, res, next) => {
    res.sendFile(path.join(viewsBasePath,"contact.html"));
});

router.get('/',(req, res, next) => {
    res.sendFile(path.join(viewsBasePath,"shop.html"));
});

module.exports = router;