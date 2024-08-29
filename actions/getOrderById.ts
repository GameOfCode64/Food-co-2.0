import prisma from "@/lib/db";
import getCurrentUser from "./getUser";

const getOrderById = async (OrderId: string) => {
  const currentUser = await getCurrentUser();
  try {
    if (!currentUser) {
      return null;
    }

    const order = await prisma.orders.findFirst({
      where: {
        id: OrderId,
      },
      include: {
        Item: true,
      },
    });

    return order;
  } catch (err: any) {
    return null;
  }
};
export default getOrderById;
