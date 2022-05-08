export enum NutrientName {
  Carbs = "carbs",
  Fat = "fats",
  Proteins = "proteins",
  Energy = "energy",
}

export enum Unit {
  Gram = "gram",
  Kilojoule = "kilojoule",
  Kilocalorie = "kilocalorie",
}

export interface Nutrient {
  value: number;
  unit: Unit;
}

export interface Recipe {
  id: number;
  name: string;
  rating: number;
  image: string;
  isPremium: boolean;
  isFeatured: boolean;
  nutrients: Partial<Record<NutrientName, Nutrient>>;
  tags: string[];
}
