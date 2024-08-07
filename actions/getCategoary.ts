import prisma from "@/lib/db";

interface Category {
  id: string;
  name: string;
}
const getCategory = async (): Promise<Category[]> => {
  try {
    const categories = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
      },
      distinct: ["name"],
    });
    return categories.length > 0 ? categories : [];
  } catch (error: any) {
    console.error(error);
    return [];
  }
};

export default getCategory;
