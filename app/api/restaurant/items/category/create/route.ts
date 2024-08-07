import getRestaurant from "@/actions/getRestaurant";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const restaurant = await getRestaurant();
    const data = await request.json();
    const { categoryName } = data;

    if (!categoryName) {
      return new NextResponse("Missing category name", { status: 400 });
    }

    if (!restaurant) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    let menu = await prisma.menu.findFirst({
      where: {
        restaurantId: restaurant.id,
      },
    });

    if (!menu) {
      menu = await prisma.menu.create({
        data: {
          restaurantId: restaurant.id,
          category: {
            create: [],
          },
          items: {
            create: [],
          },
        },
      });
    }

    const category = await prisma.category.create({
      data: {
        name: categoryName,
        menuId: menu.id,
        foodItems: {
          create: [],
        },
      },
    });

    return NextResponse.json(category, { status: 201 });
  } catch (error: any) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
