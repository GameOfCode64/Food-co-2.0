import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { userId, items } = data;

    if (!userId || !items || items.length === 0) {
      return new NextResponse("Invalid data", { status: 400 });
    }

    const getCart = await prisma.cart.findFirst({
      where: { userId: userId },
      include: { items: true },
    });

    if (!getCart) {
      const cart = await prisma.cart.create({
        data: {
          userId,
          items: {
            create: items.map((item: any) => ({
              name: item.name,
              description: item.description,
              price: item.price,
              rating: item.rating,
              type: item.type,
              image: item.image,
              quantity: item.quantity || 1,
              menu: { connect: { id: item.menuId } },
              category: { connect: { id: item.categoryId } },
            })),
          },
        },
      });
      return NextResponse.json(cart, { status: 201 });
    } else {
      const updatedItems = items.map((item: any) => {
        const existingItem = getCart.items.find(
          (cartItem) => cartItem.menuId === item.menuId
        );

        if (existingItem) {
          return prisma.foodItem.update({
            where: { id: existingItem.id },
            data: { quantity: { increment: 1 } },
          });
        } else {
          return prisma.foodItem.create({
            data: {
              name: item.name,
              description: item.description,
              price: item.price,
              rating: item.rating,
              type: item.type,
              image: item.image,
              quantity: item.quantity || 1,
              Cart: { connect: { id: getCart.id } },
              menu: { connect: { id: item.menuId } },
              category: { connect: { id: item.categoryId } },
            },
          });
        }
      });

      await Promise.all(updatedItems);

      const updatedCart = await prisma.cart.findUnique({
        where: { id: getCart.id },
        include: { items: true },
      });

      return NextResponse.json(updatedCart, { status: 200 });
    }
  } catch (error) {
    console.error("Failed to add item to cart:", error);
    return new NextResponse("Failed to add item to cart", { status: 500 });
  }
}
