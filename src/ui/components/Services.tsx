import React from "react";

type Props = {};

const services = [
  { title: "Rent", description: "Lorem ipsum dolor sit amet..." },
  { title: "Sell", description: "Lorem ipsum dolor sit amet..." },
  { title: "Resell", description: "Lorem ipsum dolor sit amet..." },
  { title: "Buy", description: "Lorem ipsum dolor sit amet..." },
];

const ServiceCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="px-6 py-8 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-medium text-gray-800">{title}</h2>
      <p className="max-w-md mt-4 text-gray-400">{description}</p>
    </div>
  );
};

const Services = (props: Props) => {
  return (
    <section className="bg-white">
      <div className="px-6 py-16 mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-center text-blue-600 lg:text-4xl">
            Our Services
          </h1>
          <div className="flex justify-center">
            <div className="w-40 h-1 bg-indigo-400 rounded"></div>
          </div>
        </div>

        <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
