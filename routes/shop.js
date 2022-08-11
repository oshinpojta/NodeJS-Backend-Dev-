const express = require('express');
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path")

const viewsBasePath = path.join(rootDir,"views");

const successController = require("../controllers/success");
const contactController = require("../controllers/contact");

router.post('/success',successController.getSuccessPage);
router.get('/contactus',contactController.getContactPage);

router.get('/',(req, res, next) => {
    res.sendFile(path.join(viewsBasePath,"shop.html"));
});

module.exports = router;