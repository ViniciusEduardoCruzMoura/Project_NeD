//SQL with sequelize => https://sequelize.org/master/manual/model-querying-basics.html
//Automaticamente ele encontra o arquivo index.js dentro da pasta
const database = require('../models');

/**
 * CRUD
 */
 class DigitalAlbumController {

    static async getEveryAlbum(req, res) {
        try {
            const everyAlbum = await database.DigitalAlbum.findAll();
            //return res.status(200).json(everyAlbum);
            res.render('components/albumReport', { everyAlbum });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getSpecificAlbum(req, res) {
        const { id } = req.params;
        try{
            const theAlbum = await database.DigitalAlbum.findOne( { 
                where: { 
                    id: Number(id) 
                } 
            });
            return res.status(200).json(theAlbum);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getEveryAlbumOrderByName(req, res) {
        try{
            const everyAlbum = await database.DigitalAlbum.findAll( { 
                order: [["name", "ASC"]]
            });
            //return res.status(200).json(everyAlbum);
            res.render('components/albumReport', { everyAlbum });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getEveryAlbumOrderByBirthday(req, res) {
        try{
            const everyAlbum = await database.DigitalAlbum.findAll( { 
                order: [["birthday", "ASC"]]
            });
            //return res.status(200).json(everyAlbum);
            res.render('components/albumReport', { everyAlbum });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getEveryAlbumOrderByCity(req, res) {
        try{
            const everyAlbum = await database.DigitalAlbum.findAll( { 
                order: [["city", "ASC"]]
            });
            //return res.status(200).json(everyAlbum);
            res.render('components/albumReport', { everyAlbum });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getSpecificAlbumByName(req, res) {
        const { name } = req.params;
        try{
            const { Op } = require("sequelize");
            const everyAlbum = await database.DigitalAlbum.findAll( { 
                where: { 
                    //name: name
                    //name: {[Op.substring]: name}
                    name: {[Op.iLike]: '%'+name+'%'}
                } 
            });
            //return res.status(200).json(everyAlbum);
            res.render('components/albumReport', { everyAlbum });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getSpecificAlbumByCity(req, res) {
        const { city } = req.params;
        try{
            const { Op } = require("sequelize");
            const everyAlbum = await database.DigitalAlbum.findAll( { 
                where: {
                    city: {[Op.iLike]: '%'+city+'%'}
                } 
            });
            //return res.status(200).json(everyAlbum);
            res.render('components/albumReport', { everyAlbum });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createAlbum(req, res) {
        const newAlbum = req.body;
        console.log(req.body);
        try{
            const newAlbumMade = await database.DigitalAlbum.create(newAlbum);
            return res.status(200).json(newAlbumMade);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateAlbum(req, res) {
        const newAlbumInfos = req.body;
        const { id } = req.params;
        try{
            await database.DigitalAlbum.update(newAlbumInfos, { where: { id: Number(id) } });
            const albumUpdated = await database.DigitalAlbum.findOne( { where: { id: Number(id) } });
            return res.status(200).json(albumUpdated);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteAlbum(req, res) {
        const { id } = req.params;
        try{
            await database.DigitalAlbum.destroy({ where: { id: Number(id) } });
            return res.status(200).json( { mensagem: `id ${id} deleted`} );
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
}

module.exports = DigitalAlbumController