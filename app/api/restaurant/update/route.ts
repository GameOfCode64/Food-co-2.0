import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { z } from "zod";

const updateRestaurantSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  location: z.string(),
  rating: z.string(),
  image: z.string(),
  speciality: z.string(),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const data = updateRestaurantSchema.parse(json);

    const currentRestaurant = await prisma.restaurant.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!currentRestaurant) {
      return new NextResponse("Restaurant not found", { status: 404 });
    }

    const updatedRestaurant = await prisma.restaurant.update({
      where: { id: currentRestaurant.id },
      data: {
        name: data.name,
        phone: data.phone,
        location: data.location,
        rating: data.rating,
        image: data.image,
        speciality: data.speciality,
      },
    });
    return NextResponse.json(updatedRestaurant, { status: 200 });
  } catch (error: any) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
