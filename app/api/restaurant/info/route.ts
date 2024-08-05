import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import getCurrentUser from "@/actions/getUser";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const data = await request.json();
    const { name, email, phoneNumber, address } = data;
    if (!name || !email || !phoneNumber || !address) {
      return new NextResponse("All Fides Required", { status: 400 });
    }
    const user = await prisma.user.findUnique({
      where: {
        email: currentUser?.email as string,
      },
    });
    if (!user) {
      return new NextResponse("Unauthorize", { status: 401 });
    }
    const restaurant = await prisma.restaurant.create({
      data: {
        email: email as string,
        name: name as string,
        phone: phoneNumber as string,
        location: address as string,
        ownerId: user.id,
      },
    });
    return NextResponse.json(restaurant);
  } catch (err: any) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
