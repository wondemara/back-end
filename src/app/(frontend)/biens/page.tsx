import ProductCard from "@/ui/components/ProductCard";
import SearchSection from "@/ui/components/SearchSection";
import React from "react";

type Props = {};

const BiensPage = (props: Props) => {
  return (
    <div>
      <section className="p-8 text-center bg-biens bg-cover lg:p-20">
        <h1 className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-gray-500 to-neutral-400 py-4">
          Decouvrez votre futur logement
        </h1>
      </section>

      <SearchSection />

      <section className="px-4 py-4 bg-gray-100 lg:px-20 lg:py-8">
        <div className="mt-4 space-y-2 lg:gap-4 lg:flex lg:items-center lg:flex-wrap lg:mt-20">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </div>
  );
};

export default BiensPage;
