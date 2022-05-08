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
      res.send(user).status(200);
    } catch (e) {
      res.send("Whoops!").status(500);
    }
  })
  .get("/recipes", async (_, res) => {
    try {
      const recipes = await getRecipes();
      res.send(recipes).status(200);
    } catch (e) {
      res.send("Whoops!").status(500);
    }
  })
  .get("/recipe/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      const recipes = await getRecipe(id);

      if (!recipes) {
        res.send(`Recipe ${id} not found`).status(404);
      }

      res.send(recipes).status(200);
    } catch (e) {
      res.send("Whoops!").status(500);
    }
  })
  .listen(PORT, () => {
    console.log(`The server is listening on http://localhost:${PORT}/`);
  });
