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
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items.data.price.product"],
    });

    if (!session) {
      return NextResponse.json({ error: "Session not found" }, { status: 404 });
    }
    const customerEmail = session.customer_details?.email || "";
    const shippingAddress = session.shipping_details?.address || {};

    const orderData = {
      id: currentUser?.id || "",
      customer: session.customer_details?.email || "",
      totalAmount: (session.amount_total ?? 0) / 100,
      currency: session.currency,
      email: customerEmail,
      shippingAddress: shippingAddress,
      menuId: "66b08c1282f2fcc7d7848578",
      paymentStatus: session.payment_status,
      items:
        session.line_items?.data.map((item: any) => {
          const price = item.price;

          return {
            categoryId: price?.product?.metadata.categoryId || null,
            productId: price?.product?.id || "",
            quantity: item.quantity || 0,
            price: price?.unit_amount ? price.unit_amount / 100 : 0,
            name: item.description || "",
            type: price?.product?.metadata.type || "",
            image: price?.product?.metadata.image || "",
          };
        }) || [],
    };

    const newOrder = await prisma.orders.create({
      data: {
        userId: currentUser?.id || "",
        stripeSessionId: sessionId,
        email: orderData.email,
        address: JSON.stringify(orderData.shippingAddress),
        menuId: orderData.menuId,
        total: orderData.totalAmount,
        status: orderData.paymentStatus,
        Item: {
          create: orderData.items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
            name: item.name,
            type: item.type,
            image: item.image,
          })),
        },
      },
    });

    return NextResponse.json(newOrder);
  } catch (err: any) {
    console.error("Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
