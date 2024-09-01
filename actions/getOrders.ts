import prisma from "@/lib/db";
import getSession from "./getsession";

const getOrders = async () => {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return [];
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      include: {
        orders: {
          include: {
            Item: true,
          },
        },
      },
    });

    return user?.orders ?? [];
  } catch (error: any) {
    console.error(error);
    return [];
  }
};

export default getOrders;
