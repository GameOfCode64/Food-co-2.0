import prisma from "@/lib/db";
import getCurrentUser from "./getUser";

const getRestaurantOrders = async () => {
  const currentRes = await getCurrentUser();

  if (!currentRes) {
    return null;
  }

  try {
    const orders = await prisma.orders.findMany({
      where: {
        userId: currentRes.id,
      },
      select: {
        id: true,
        stripeSessionId: true,
        total: true,
        email: true,
        phone: true,
        address: true,
        status: true,
        paymentStatus: true,
        createdAt: true,
        updatedAt: true,
        Item: true,
      },
    });

    return orders ?? [];
  } catch (err: any) {
    console.error("Error fetching restaurant orders:", err);
    return null;
  }
};

export default getRestaurantOrders;
