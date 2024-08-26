import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function name(request: Request) {
  const data = await request.json();
}
