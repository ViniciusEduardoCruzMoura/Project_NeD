const express = require("express")
const app = express()
import path from 'path'
require('dotenv').config()

const cors = require('cors');

var corsOptions = {
    exposedHeaders: 'Authorization'
}

app.use(cors(corsOptions));

/**
 * Parser Configurations to Post requisition
 */
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

/**
* Turn on the server
*/
const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log(`Server Running at Port ${PORT}`)
})

/**
 * Static files
 */
 app.use('/public', express.static(__dirname + '/public'));
 app.use('/bscss', express.static('./node_modules/bootstrap/dist/css'));
 app.use('/bsjs', express.static('./node_modules/bootstrap/dist/js'));
 app.use('/popperjs', express.static('./node_modules/@popperjs/core/dist/umd'));
 app.use('/jquery', express.static('./node_modules/jquery/dist'));
 app.use('/uploads', express.static('./uploads'));

/**
 * Routes
 */
const routes = require('./api/routes');
routes(app);

/**
  * Pages Settings
  */
app.set('views', path.join(__dirname, 'api/views'));
app.set('view engine', 'pug');

/**
 * Request upload files
 */
const multer = require('multer');
/**
 * Create a instance of configured middleware
 * destination: deal with destination
 * filename: allow define the saved file name
 */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        //Saving with name of input and current date
        /* cb(null, file.fieldname + '-' + Date.now()) */

        //Saving with same extension file
        /* cb(null, `${(file.fieldname)}-${(Date.now())}${path.extname(file.originalname)}`); */
        
        cb(null, file.originalname);
    }
});
const upload = multer({ storage });
app.post('/uploadPhoto', upload.single('photo_name'), function(req, resp) {
    resp.end();
});

/* app.post('/digital-album', function(req, resp) {
    pool.query(`
    INSERT INTO digital_album(name, cpf, phone_whatsapp, email, state, city, birthday, resposable_name, resposable_cpf, photo_title, photographer_name, photo_name)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`, 
    [req.body.name, req.body.cpf, req.body.telephone, req.body.email, req.body.state, req.body.city, req.body.birthday, req.body.responsibleName, req.body.responsibleCpf, req.body.photoTitle, req.body.photographerName, req.body.photoFileName])
    .then(res => console.log('OK'))
    .catch(err => console.log('ERROR: ' + err));
}); */