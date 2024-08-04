import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth/users/sign-in",
  },
});

export const config = {
  matcher: ["/user/:path*", "/restaurant/:path*"],
};
