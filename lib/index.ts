import { Heart, Soup, User, Utensils } from "lucide-react";

export const NavLinks = [
  {
    label: "My Orders",
    href: "/user/orders",
    icon: Soup,
  },
  {
    label: "favorites",
    href: "/user/favorites",
    icon: Heart,
  },
  {
    label: "My Profile",
    href: "/user/my-profile",
    icon: User,
  },
  {
    label: "Start Restaurant",
    href: "/restaurant",
    icon: Utensils,
  },
];

export const idList = [
  {
    name: "Aadhar Card",
    value: "Aadhar Card",
  },
  {
    name: "Pan Card",
    value: "Pan Card",
  },
  {
    name: "Driving Licence",
    value: "Driving Licence",
  },
];
