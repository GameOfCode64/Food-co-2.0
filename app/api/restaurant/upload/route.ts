import prisma from "@/lib/db";
import getCurrentUser from "@/actions/getUser";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const data = await request.json();
    const { idImage, idName } = data;

    if (!idImage || !idName) {
      return new NextResponse("All fields are required", { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: {
        email: currentUser?.email as string,
      },
      include: {
        restaurants: true,
      },
    });

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const restaurant = user.restaurants[0]; // Assuming one user can have one restaurant

    if (!restaurant) {
      return new NextResponse("Restaurant not found", { status: 404 });
    }

    const updatedRestaurant = await prisma.restaurant.update({
      where: {
        id: restaurant.id,
      },
      data: {
        identityName: idName,
        identityUrl: idImage,
      },
    });

    return NextResponse.json(updatedRestaurant);
  } catch (err: any) {
    console.error(err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
