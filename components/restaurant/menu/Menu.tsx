import getallRestaurant from "@/actions/getallRestaurant";
import React from "react";

const Menu = async () => {
  const data = await getallRestaurant();
  console.log({ data });
  return <div>Menu</div>;
};

export default Menu;
