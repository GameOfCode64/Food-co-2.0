import prisma from "@/lib/db";
import getCurrentUser from "./getUser";

const getRestaurant = async () => {
  try {
    const currentUser = await getCurrentUser();
    const user = await prisma.user.findUnique({
      where: {
        email: currentUser?.email as string,
      },
    });

    if (!user) {
      return null;
    }
    const restaurant = await prisma.restaurant.findFirst({
      where: {
        ownerId: user.id,
      },
    });

    return restaurant;
  } catch (error: any) {
    return null;
  }
};

export default getRestaurant;
