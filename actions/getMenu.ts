import prisma from "@/lib/db";

const getMenu = async (id: string) => {
  try {
    const restaurantWithMenu = await prisma.restaurant.findUnique({
      where: {
        id: id,
      },
      include: {
        menu: {
          include: {
            items: true,
          },
        },
      },
    });

    if (!restaurantWithMenu) {
      return "No Restaurant or Menu found!";
    }
    return restaurantWithMenu;
  } catch (error: any) {
    console.error("Error fetching restaurant and menu:", error);
    return null;
  }
};

export default getMenu;
