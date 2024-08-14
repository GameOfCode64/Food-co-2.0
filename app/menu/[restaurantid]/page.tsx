import React from "react";
interface Params {
  params: {
    id: string;
  };
}
export const revalidate = 30;

const page = ({ params }: Params) => {
  return <div>{params.id}</div>;
};

export default page;
