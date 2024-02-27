import { prisma } from "@/db/prisma";
import { ContactForm } from "@/ui/components/FormContact";
import OptionProduct from "@/ui/components/OptionProduct";
import { Bed, Building2, Home, Landmark, LocateFixed } from "lucide-react";
import React from "react";

const SingleBienPage = async ({ params }: { params: { bienId: string } }) => {
  const property = await prisma.property.findUniqueOrThrow({
    where: { id: params.bienId },
  });
  return (
    <div>
      <section className="p-8 text-center bg-[url('https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')] bg-cover 00 lg:p-20">
        <h1 className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-neutral-800 py-4">
          Un bien pour votre confort
        </h1>
      </section>

      <section className="px-4 py-4 bg-gray-200 lg:px-20 lg:py-8">
        <div className="flex flex-wrap lg:space-x-12">
          <div className="lg:w-3/5">
            <h1 className="mb-4 text-2xl font-medium text-center text-gray-900 lg:text-3xl">
              {property.title}
            </h1>
            <img src={property.imageUrl} alt="property" className="w-full" />

            <div className="mt-4">
              <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                <div>
                  <h3 className="font-bold">Description</h3>

                  <div className="space-y-6">
                    <p className="text-base text-gray-900">
                      {property.description}
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-sm font-medium text-gray-900">Details</h3>

              <div className="flex flex-wrap ">
                <OptionProduct
                  title="Ville"
                  value={`${property.city}`}
                  Icon={Building2}
                />
                <OptionProduct
                  title="Quartier"
                  value={property.quartier}
                  Icon={Landmark}
                />
                <OptionProduct
                  title="Chambres"
                  value={property.rooms}
                  Icon={Bed}
                />
                <OptionProduct
                  value={property.adresse}
                  title="Adresse"
                  Icon={LocateFixed}
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 lg:mt-4">
            <h4 className="text-3xl my-4 font-bold text-center text-primary">
              Reservez maintenant ce bien
            </h4>
            <ContactForm propertyId={property.id} />
            <div className="mt-4 rounded-lg">
              <img src={property.imageUrl} alt="property" className="w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleBienPage;
