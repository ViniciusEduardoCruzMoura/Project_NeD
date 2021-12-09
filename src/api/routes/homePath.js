const { Router } = require('express');

const router = Router();

router.get('/Home', function(req, res){
    try {
        res.render('homeView',);
    } catch (error) {
        return res.status(500).json(error.message);
    }
});

module.exports = router;