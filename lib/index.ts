import {
  Heart,
  History,
  LayoutDashboard,
  Logs,
  Pizza,
  Soup,
  User,
  Utensils,
} from "lucide-react";

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

export const sidebar = [
  {
    label: "Dashboard",
    href: "/restaurant/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "View Orders",
    href: "/restaurant/view-orders",
    icon: Logs,
  },
  {
    label: "Order History",
    href: "/restaurant/order-history",
    icon: History,
  },
  {
    label: "View Items",
    href: "/restaurant/view-items",
    icon: Soup,
  },
  {
    label: "Add Items",
    href: "/restaurant/add-items",
    icon: Pizza,
  },
  {
    label: "Profile",
    href: "/restaurant/profile",
    icon: User,
  },
];

export const FoodType = [
  {
    name: "Veg",
    value: "veg",
  },
  {
    name: "Non Veg",
    value: "nonVeg",
  },
];

export const status = [
  {
    label: "Padding",
    value: "padding",
  },
  {
    label: "Preparing",
    value: "Preparing",
  },
  {
    label: "Out for Delivery",
    value: "Out for Delivery",
  },
  {
    label: "Delivered",
    value: "Delivered",
  },
];

// Props
export interface OrderTabelProps {
  data: {
    id: string;
    stripeSessionId: string | null;
    total: number | null;
    email: string | null;
    phone: string | null;
    address: string | null;
    status: string | null;
    paymentStatus: string | null;
    createdAt: Date;
    Item: {
      id: string;
      productId: string;
      quantity: number;
      type: string;
      price: number;
      name: string;
      rating: string | null;
      description: string | null;
      image: string | null;
      ordersId: string | null;
      cartId: string | null;
      favoritesId: string | null;
    }[];
  }[];
}
export interface OrderProps {
  data: {
    id: string;
    stripeSessionId: string | null;
    total: number | null;
    email: string | null;
    phone: string | null;
    address: string | null;
    status: string | null;
    paymentStatus: string | null;
    createdAt: Date;
    Item: {
      id: string;
      productId: string;
      quantity: number;
      type: string;
      price: number;
      name: string;
      rating: string | null;
      description: string | null;
      image: string | null;
      ordersId: string | null;
      cartId: string | null;
      favoritesId: string | null;
    }[];
  } | null;
}
