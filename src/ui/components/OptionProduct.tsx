import { LucideIcon } from "lucide-react";
import React from "react";

type Props = {
  Icon: LucideIcon;
  title: string;
  value: string;
};

const OptionProduct = ({ Icon, title, value }: Props) => {
  return (
    <div className="w-full p-2 lg:w-1/2">
      <div className="flex  gap-4 items-center h-full p-4 bg-gray-100 rounded">
        <Icon />
        <p className="flex gap-4 justify-start items-center">
          <span className="font-medium">{title} : </span>
          <span className="font-extrabold text-lg">{value}</span>
        </p>
      </div>
    </div>
  );
};

export default OptionProduct;
