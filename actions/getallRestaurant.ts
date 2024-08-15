import prisma from "@/lib/db";

const getallRestaurant = async () => {
  try {
    const restaurant = await prisma.restaurant.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        location: true,
        image: true,
        rating: true,
        speciality: true,
      },
    });
    return restaurant;
  } catch (error: any) {
    return null;
  }
};

export default getallRestaurant;
