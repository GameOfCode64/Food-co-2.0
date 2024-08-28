import prisma from "@/lib/db";
import getRestaurant from "./getRestaurant";

const getRestaurantOrders = async () => {
  const currentRes = await getRestaurant();

  if (!currentRes) {
    return null;
  }

  try {
    const orders = await prisma.orders.findMany({
      where: {
        userId: currentRes.ownerId,
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
