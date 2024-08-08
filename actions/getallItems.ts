import prisma from "@/lib/db";
import getRestaurant from "./getRestaurant";

const getallItems = async () => {
  try {
    const CurrentRestaurant = await getRestaurant();

    if (!CurrentRestaurant) {
      console.error("No current restaurant found");
      throw new Error("Unauthorized");
    }

    console.log(`Current Restaurant ID: ${CurrentRestaurant.id}`);

    const menu = await prisma.menu.findFirst({
      where: {
        restaurantId: CurrentRestaurant.id,
      },
      include: {
        items: true,
      },
    });

    if (!menu) {
      console.error("No menu found for the current restaurant");
      return [];
    }

    // console.log(`Menu ID: ${menu.id}, Items: ${menu.items}`);

    return menu.items ?? [];
  } catch (error: any) {
    console.error("Error fetching items:", error);
    return null;
  }
};

export default getallItems;
