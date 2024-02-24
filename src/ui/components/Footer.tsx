import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="px-4 pt-12 pb-32 mt-12 bg-gray-200 border-t lg:0">
      <div className="lg:flex lg:justify-evenly">
        <div className="max-w-sm mt-6 text-center lg:mt-0">
          <h6 className="mb-4 text-4xl font-semibold text-gray-700">Dormz</h6>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            tenetur. Sint, vel sit molestiae velit doloribus aspernatur.
            Voluptate, necessitatibus. Inventore corrupti aliquid atque tempora
            quo eaque error voluptas et earum.
          </p>
        </div>
        <div className="mt-6 text-center lg:mt-0">
          <h6 className="mb-4 font-semibold text-gray-700">Quick links</h6>
          <ul>
            <li>
              <a href="" className="block py-2 text-gray-600">
                Home
              </a>
            </li>
            <li>
              <a href="" className="block py-2 text-gray-600">
                About us
              </a>
            </li>
            <li>
              <a href="" className="block py-2 text-gray-600">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-6 text-center lg:mt-0">
          <h6 className="mb-4 font-semibold text-gray-700">Quick links</h6>
          <ul>
            <li>
              <a href="" className="block py-2 text-gray-600">
                Property
              </a>
            </li>
            <li>
              <a href="" className="block py-2 text-gray-600">
                About us
              </a>
            </li>
            <li>
              <a href="" className="block py-2 text-gray-600">
                Help
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-6 text-center lg:mt-0">
          <h6 className="mb-4 font-semibold text-gray-700">Quick links</h6>
          <ul>
            <li>
              <a href="" className="block py-2 text-gray-600">
                FAQ
              </a>
            </li>
            <li>
              <a href="" className="block py-2 text-gray-600">
                About us
              </a>
            </li>
            <li>
              <a href="" className="block py-2 text-gray-600">
                New Property
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
