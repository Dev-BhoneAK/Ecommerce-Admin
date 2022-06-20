var express = require('express');
var router = express.Router();

router.route("/").get((req, res) => {
    res.send(`<h2>Hello from ${req.baseUrl}</h2>`);
});


module.exports = router;
