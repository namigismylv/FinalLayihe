const express = require("express")
const {GamesController} =require("../Controllers/ShopGames.controller")
const router=express.Router()
router.get("/",GamesController.getAll)
router.get("/:id",GamesController.getById)
router.post("/",GamesController.add)
router.delete("/:id",GamesController.delete)
module.exports = router
