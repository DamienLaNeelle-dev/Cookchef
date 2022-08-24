const express = require("express");
const router = express.Router();
module.exports = router;

router.post("/addRecipe", async (req, res) => {
  console.log("Add Recipe");
  res.json("Add Recipes");
});
router.get("/getRecipes", async (req, res) => {
  console.log("Get Recipes");
  const id = req.params.id;
  res.json("Get recipe " + id);
});
router.get("/getRecipes/:id", async (req, res) => {
  console.log("Get Recipes by id");
});
router.patch("/updateRecipe/:id", async (req, res) => {
  console.log("update Recipe");
});
router.delete("/deleteRecipe/:id", async (req, res) => {
  console.log("Delete Recipe");
});
