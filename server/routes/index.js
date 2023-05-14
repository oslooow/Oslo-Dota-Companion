const router = require("express").Router();
const { Controller } = require("../controllers/Controller");
const { authentication } = require("../middlewares/index");

router.post("/register", Controller.register);
router.get("/heroes", Controller.getAllHeroes);
router.get("/heroes/:heroname", Controller.getHeroById);
router.get("/memes", Controller.getMemes);
router.get("/freebies", Controller.getFreebies);

module.exports = { router };