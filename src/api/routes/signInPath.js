const { Router } = require('express');

const router = Router();

router.get('/SignIn', function(req, res){
    try {
        res.render('components/signIn');
    } catch (error) {
        return res.status(500).json(error.message);
    }
});

module.exports = router;