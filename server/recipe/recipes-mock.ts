import { Recipe, Unit } from "./types";

const recipesMock: Recipe[] = [
  {
    id: 1,
    name: "Italian Beef With Cabbage Noodles",
    rating: 5,
    image:
      "https://images.carbmanager.com/knMv-bq7bD_JzOQbrkzv29SoVqum09auAinhKt_bd3E/resize:fill:114:114/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmUyMmIyYjVlLTdiYjItNGE0Mi1iZDRiLTY2M2I5NDkxYTI0MC5qcGc_YWx0PW1lZGlh",
    isPremium: true,
    isFeatured: true,
    nutrients: {
      carbs: {
        value: 9,
        unit: Unit.Gram,
      },
      proteins: {
        value: 32,
        unit: Unit.Gram,
      },
      fats: {
        value: 24,
        unit: Unit.Gram,
      },
      energy: {
        value: 375,
        unit: Unit.Kilocalorie,
      },
    },
    tags: ["Keto"],
  },
  {
    id: 2,
    name: "Alfredo Chicken Bake",
    rating: 5,
    image:
      "https://images.carbmanager.com/P0gnJdpOi47RzeRjEpYw3VpVBrxnwSubPPJpfgdLq9A/resize:fill:114:114/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzhmMGZiNmE3LTYxNmYtMGFkOC1mM2VhLTllNGI0MGE4MGI0My5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1hMTE2MmZjNS0xMDQ0LTRmZGQtOGUzYS03OWRiMjZhMTliNGU",
    isPremium: false,
    isFeatured: true,
    nutrients: {
      carbs: {
        value: 4,
        unit: Unit.Gram,
      },
      proteins: {
        value: 22,
        unit: Unit.Gram,
      },
      fats: {
        value: 35,
        unit: Unit.Gram,
      },
      energy: {
        value: 1841,
        unit: Unit.Kilojoule,
      },
    },
    tags: ["Chicken", "Keto"],
  },
  {
    id: 3,
    name: "Chicken and Cauliflower Cheese Bake",
    rating: 5,
    image:
      "https://images.carbmanager.com/n6mnLoX2LF7I5qoaLPth8DmSiFRscgmvvLgvIrUQXdM/resize:fill:114:114/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjU3OTI5ZjA0LWI2OTgtNGM3OS1hZmZlLTIxYWI1ODg1YWNlZC5qcGc_YWx0PW1lZGlh",
    isPremium: false,
    isFeatured: true,
    nutrients: {
      carbs: {
        value: 7,
        unit: Unit.Gram,
      },
      proteins: {
        value: 53,
        unit: Unit.Gram,
      },
      fats: {
        value: 41,
        unit: Unit.Gram,
      },
      energy: {
        value: 2250,
        unit: Unit.Kilojoule,
      },
    },
    tags: ["Tasty", "Keto"],
  },
];

export default recipesMock;
