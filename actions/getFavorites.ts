import prisma from "@/lib/db";
import getSession from "./getsession";

const getFavorites = async () => {
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
        favorite: true,
      },
    });
    return user?.favorite ?? [];
  } catch (err: any) {
    return [];
  }
};

export default getFavorites;
