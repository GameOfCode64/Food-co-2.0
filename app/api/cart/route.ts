import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export default async function POST(request: Request) {
  try {
    const data = await request.json();
    const { userId, items } = data;
    const cart = await prisma.cart.create({
      data: { userId, items },
    });

    return NextResponse.json(cart, { status: 201 });
  } catch (error) {
    return new NextResponse("Failed to add item to cart", { status: 500 });
  }
}
