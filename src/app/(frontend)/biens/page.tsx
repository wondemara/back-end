import { gellAllProperty } from "@/db/query/biens.query";
import ProductCard from "@/ui/components/ProductCard";
import SearchSection from "@/ui/components/SearchSection";
import React from "react";

type Props = {};

const BiensPage = async (props: Props) => {
  const biens = await gellAllProperty();
  return (
    <div>
      <section className="p-8 text-center bg-biens bg-cover lg:p-20">
        <h1 className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-gray-500 to-neutral-400 py-4">
          Decouvrez votre futur logement
        </h1>
      </section>

      <SearchSection />

      <section className="px-4  max-w-screen-3xl mx-auto py-4  lg:px-20 lg:py-8">
        <div className="mt-4 space-y-2 lg:gap-4 justify-center lg:flex lg:items-center lg:flex-wrap lg:mt-20">
          {biens.map((bien) => (
            <ProductCard key={bien.id} property={bien} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BiensPage;
