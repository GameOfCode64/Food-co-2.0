import prisma from "@/lib/db";
import getCurrentUser from "./getUser";

const getallItems = async () => {
  const currentUser = await getCurrentUser();
  try {
    // Fetch the restaurant associated with the current user
    const restaurant = await prisma.restaurant.findFirst({
      where: {
        ownerId: currentUser?.id,
      },
    });

    if (!restaurant) {
      console.error("No restaurant found for the current user");
      return [];
    }

    console.log(`Current Restaurant ID: ${restaurant.id}`);

    // Fetch the menu associated with the restaurant
    const menu = await prisma.menu.findFirst({
      where: {
        restaurantId: restaurant.id,
      },
      include: {
        items: true,
      },
    });

    if (!menu) {
      console.error("No menu found for the current restaurant");
      return [];
    }

    // Return the items from the menu
    return menu.items ?? [];
  } catch (error: any) {
    console.error("Error fetching items:", error);
    return null;
  }
};

export default getallItems;
