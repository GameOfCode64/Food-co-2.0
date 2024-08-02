import prisma from "@/lib/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, Cpassword, fullName, phoneNumber } = body;

    if (!email || !password || !Cpassword || !fullName || !phoneNumber) {
      return new NextResponse("Missing Info", { status: 400 });
    }
    if (password !== Cpassword) {
      return new NextResponse("Password Not Matched", { status: 400 });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: {
        email,
        fullName,
        hashPassword,
        phoneNumber,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
