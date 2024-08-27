import getCurrentUser from "@/actions/getUser";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  const data = await request.json();
  const { totalPrice, items } = data; // Assuming items contain cart data

  if (!currentUser) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    // Create new order
    const newOrder = await prisma.orders.create({
      data: {
        total: totalPrice,
        email: currentUser?.email,
        phone: currentUser?.phoneNumber,
        address: currentUser?.address,
        status: "Pending",
        userId: currentUser.id,
        menuId: items[0]?.menuId,
        Item: {
          create: items.map((item: any) => ({
            productId: item.menuId,
            quantity: item.quantity,
            price: Number(item.price),
            name: item.name,
            type: item.type,
            rating: item.rating,
            description: item.description,
            image: item.image,
          })),
        },
      },
    });

    return NextResponse.json(newOrder);
  } catch (err: any) {
    console.error("Order creation failed: ", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
