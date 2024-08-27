import { NextResponse } from "next/server";
import Stripe from "stripe";
import prisma from "@/lib/db";
import getCurrentUser from "@/actions/getUser";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function GET(request: Request) {
  const currentUser = await getCurrentUser();

  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json(
      { error: "Session ID is required" },
      { status: 400 }
    );
  }

  try {
    // Retrieve session details from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items.data.price.product"],
    });

    if (!session) {
      return NextResponse.json({ error: "Session not found" }, { status: 404 });
    }

    // Fetch the order using the current user's email
    const order = await prisma.orders.findFirst({
      where: { email: currentUser?.email },
    });

    if (!order) {
      return NextResponse.json(
        { error: "Order not found for this user" },
        { status: 404 }
      );
    }

    // Update the order using the unique order id
    const updatedOrder = await prisma.orders.update({
      where: { id: order.id }, // Use the unique ID
      data: {
        paymentStatus: "Paid",
        stripeSessionId: sessionId,
      },
    });

    return NextResponse.json(updatedOrder);
  } catch (err: any) {
    console.error("Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
