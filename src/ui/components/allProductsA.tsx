import React from "react";
import ProductCard from "./ProductCard";

type Props = {};

const AllProductsA = (props: Props) => {
  return (
    <section className="px-4 py-4 bg-gray-100 lg:px-32 lg:py-20">
      <div className="">
        <h1 className="text-2xl font-bold text-center  lg:text-4xl">
          Les plus Recents
        </h1>
        <div className="flex justify-center">
          <div className="w-40 h-1 bg-primary rounded"></div>
        </div>
      </div>
      <div className="mt-4 space-x-0 space-y-2 lg:flex lg:flex-nowrap lg:space-x-4 lg:space-y-0 lg:mt-20">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default AllProductsA;
