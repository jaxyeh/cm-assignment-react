import { NutrientName, Unit } from "../recipe/types";

export enum Language {
  En = "en",
  Es = "es",
}

export interface User {
  name: string;
  email: string;
  language: Language;
  units: Record<NutrientName, Unit>;
}
