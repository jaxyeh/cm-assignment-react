import express from "express";
import cors from "cors";
import getUser from "./user/getUser";
import getRecipes from "./recipe/getRecipes";
import getRecipe from "./recipe/getRecipe";

const PORT = 8080;
const app = express();

app
  .use(cors())
  .get("/user", async (_, res) => {
    try {
      const user = await getUser();
      res.status(200).send(user);
    } catch (e) {
      res.status(500).send("Whoops!");
    }
  })
  .get("/recipes", async (_, res) => {
    try {
      const recipes = await getRecipes();
      res.send(recipes).status(200);
    } catch (e) {
      res.status(500).send("Whoops!");
    }
  })
  .get("/recipe/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      const recipes = await getRecipe(id);

      if (!recipes) {
        res.status(404).send(`Recipe ${id} not found`);
      }

      res.status(200).send(recipes);
    } catch (e) {
      res.status(500).send("Whoops!");
    }
  })
  .listen(PORT, () => {
    console.log(`The server is listening on http://localhost:${PORT}/`);
  });
