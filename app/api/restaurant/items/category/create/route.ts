import getRestaurant from "@/actions/getRestaurant";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const getrestaurant = await getRestaurant();
    const data = await request.json();
    const { category } = data;

    if (!category) {
      return new NextResponse("Missing category", { status: 400 });
    }

    if (!getrestaurant) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const menu = await prisma.menu.create({
      data: {
        restaurantId: getrestaurant.id,
        category: category,
        items: {
          create: [],
        },
      },
    });
    return NextResponse.json(menu, { status: 201 });
  } catch (error: any) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
