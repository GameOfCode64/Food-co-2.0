import { NextResponse } from "next/server";
import prisma from "@/lib/db";
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phoneNumber, email, address } = body;

    if (!name || !phoneNumber || !email || !address) {
      return new NextResponse("Missing Info", { status: 400 });
    }

    const updatedUser = await prisma.user.update({
      where: { email },
      data: { name, phoneNumber, address },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
