import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();
// http://localhost:3000/assets/pizzas/img-01.jpg
export function createDummyMeals() {
  const meals = Array.from({ length: 10 }, (_, i) => {
    return {
      title: faker.hacker.adjective() + faker.hacker.noun(),
      price: Math.floor(Math.random() * 100) + 150,
      ingredient: Array.from({ length: Math.floor(Math.random() * 4) }, () =>
        faker.hacker.noun()
      ).join(", "),
      imgURL: `http://localhost:3000/assets/pizzas/img-${
        i + 1 < 10 ? "0" + (i + 1) : "10"
      }.jpg`,
    };
  });

  meals.forEach(async (meal) => {
    try {
      await prisma.meal.create({ data: meal });
    } catch (error) {
      console.log({ error });
    }
  });
}

// (async function () {
//   try {
//     const thereIsData = (await prisma.meal.findMany({})).length;
//     if (thereIsData === 0) {
//       createDummyMeals();
//     }
//   } catch (error) {
//     console.log({ error });
//   }
// })();

export async function GET_MEALS() {
  try {
    const meals = await prisma.meal.findMany({});
    return meals;
  } catch (error) {
    console.log(error);
    return [];
  }
}
