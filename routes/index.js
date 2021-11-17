const router = require("express").Router();
const charApi = requires ("../services/APIHandler")


//GET home page

router.get("/", (req, res, next) => {
    res.render("index")
})

router.get("/characters", (req, res) => {
    charApi.getFullList()
    .then(characters=>res.render("index", {characters}))
})

module.exports = router;