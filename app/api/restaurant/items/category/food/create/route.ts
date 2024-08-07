import getRestaurant from "@/actions/getRestaurant";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const currentRestaurant = await getRestaurant();
    const data = await request.json();
    const { name, categoryId, image, type, price, rating, description } = data;

    if (
      !name ||
      !categoryId ||
      !image ||
      !type ||
      !price ||
      !rating ||
      !description
    ) {
      return new NextResponse("Missing Data", { status: 400 });
    }

    if (!currentRestaurant) {
      return new NextResponse("Create Restaurant First", { status: 401 });
    }

    const menu = await prisma.menu.findFirst({
      where: {
        restaurantId: currentRestaurant.id,
      },
    });

    if (!menu) {
      return new NextResponse("No Menu Found for Current Restaurant", {
        status: 404,
      });
    }

    const category = await prisma.category.findUnique({
      where: {
        id: categoryId,
      },
    });

    if (!category) {
      return new NextResponse("Category Not Found", { status: 404 });
    }

    const createItem = await prisma.foodItem.create({
      data: {
        name: name,
        menuId: menu.id,
        categoryId: category.id,
        image: image,
        type: type,
        price: price,
        rating: rating,
        description: description,
      },
    });

    return new NextResponse(JSON.stringify(createItem), { status: 201 });
  } catch (error: any) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
