const usuarios = require('./usuariosRoute');

const digitalAlbum = require('./digitalAlbumPath');

const home = require('./homePath');
const signIn = require('./signInPath');

module.exports = app => {
    app.use(usuarios);
    app.use(digitalAlbum);
    app.use(home);
    app.use(signIn);
}