import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import getCurrentUser from "@/actions/getUser";

export async function POST(request: Request) {
  const data = await request.json();
  const CurrentUser = await getCurrentUser();
  const { OrderId, status } = data;
  try {
    if (!CurrentUser) {
      return new NextResponse("Unauthorize", { status: 401 });
    }

    if (!status || !OrderId) {
      return new NextResponse("Data Not Found", { status: 403 });
    }

    const Order = await prisma.orders.update({
      where: {
        id: OrderId,
      },
      data: {
        status: status,
      },
    });

    return new NextResponse("Status Updated", { status: 201 });
  } catch (error: any) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
