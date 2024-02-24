import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="p-12 text-center bg-hero bg-cover lg:p-56  text-white">
      <h1 className="mb-2 text-2xl font-bold  lg:text-5xl ">
        Qu&apos;elle est votre prochain Chez vous?
      </h1>

      <p className="mb-8 text-lg text-center ">
        Des chambres modernes et confortables à deux pas de votre université,
        avec tous les équipements nécessaires pour simplifier votre vie
        étudiante.
      </p>

      <div className="flex items-center justify-center space-x-2">
        <a
          href="#"
          className="px-2 py-2 text-gray-800 text-gray-900 bg-gray-300 border rounded rounded-lg lg:px-8 lg:py-3 hover:bg-gray-100 hover:shadow"
        >
          Voir les biens
        </a>
        <a
          href="/contact"
          className="px-4 py-2 text-yellow-900 transition duration-300 bg-yellow-400 border border-gray-600 rounded-lg lg:px-8 lg:py-3 hover:bg-yellow-300 hover:shadow-xl"
        >
          Nous Contactez
        </a>
      </div>
    </section>
  );
};

export default Hero;
