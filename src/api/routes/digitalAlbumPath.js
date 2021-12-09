const { Router } = require('express');
const DigitalAlbumController = require('../controllers/DigitalAlbumController');
const auth = require('../middleware/auth');

const router = Router();

//router.get('/DigitalAlbum/:id', DigitalAlbumController.getSpecificAlbum);
//router.put('/DigitalAlbum/:id', DigitalAlbumController.updateAlbum);
//router.delete('/DigitalAlbum/:id', DigitalAlbumController.deleteAlbum);

/**
 * ALBUM REPORT
 */
router.get('/DigitalAlbum/Report/getEveryAlbum', auth, DigitalAlbumController.getEveryAlbum);
router.get('/DigitalAlbum/Report/getEveryAlbumOrderByName', auth, DigitalAlbumController.getEveryAlbumOrderByName);
router.get('/DigitalAlbum/Report/getEveryAlbumOrderByCity', auth, DigitalAlbumController.getEveryAlbumOrderByCity);
router.get('/DigitalAlbum/Report/getEveryAlbumOrderByBirthday', auth, DigitalAlbumController.getEveryAlbumOrderByBirthday);
router.get('/DigitalAlbum/Report/getSpecificAlbumByName/:name', auth, DigitalAlbumController.getSpecificAlbumByName);
router.get('/DigitalAlbum/Report/getSpecificAlbumByCity/:city', auth, DigitalAlbumController.getSpecificAlbumByCity);
router.get('/DigitalAlbum/Report', function(req, res){
    try {
        res.render('digitalAlbumReportView');
    } catch (error) {
        return res.status(500).json(error.message);
    }
});

/**
 * ALBUM FORM
 */
router.get('/DigitalAlbum/Form', function(req, res){
    try {
        res.render('digitalAlbumFormView');
    } catch (error) {
        return res.status(500).json(error.message);
    }
});
router.post('/DigitalAlbum/Form/createAlbum', DigitalAlbumController.createAlbum);

module.exports = router;