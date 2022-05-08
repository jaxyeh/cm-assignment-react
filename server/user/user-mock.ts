import { NutrientName, Unit } from "../recipe/types";
import { Language, User } from "./types";

const userMock: User = {
  name: "Jon",
  email: "jon@doe.com",
  language: Language.En,
  units: {
    [NutrientName.Fat]: Unit.Gram,
    [NutrientName.Carbs]: Unit.Gram,
    [NutrientName.Proteins]: Unit.Gram,
    [NutrientName.Energy]: Unit.Kilojoule,
  },
};

export default userMock;
