import Hero from "@/ui/components/Hero";
import Navigation from "@/ui/components/Navigation";
import ProductCard from "@/ui/components/ProductCard";
import Products from "@/ui/components/Products";
import SearchSection from "@/ui/components/SearchSection";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <SearchSection />

      <Products />

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
            <div className="px-6 py-8 bg-white rounded-md shadow-md">
              <h2 className="text-xl font-medium text-gray-800">Rent</h2>
              <p className="max-w-md mt-4 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
                volutpat, viverra magna risus aliquam massa.
              </p>
            </div>

            <div className="px-6 py-8 bg-white rounded-md shadow-md">
              <h2 className="text-xl font-medium text-gray-800">Sell</h2>
              <p className="max-w-md mt-4 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
                volutpat, viverra magna risus aliquam massa.
              </p>
            </div>

            <div className="px-6 py-8 bg-white rounded-md shadow-md">
              <h2 className="text-xl font-medium text-gray-800">Sell</h2>
              <p className="max-w-md mt-4 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
                volutpat, viverra magna risus aliquam massa.
              </p>
            </div>
            <div className="px-6 py-8 bg-white rounded-md shadow-md">
              <h2 className="text-xl font-medium text-gray-800">Resell</h2>
              <p className="max-w-md mt-4 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
                volutpat, viverra magna risus aliquam massa.
              </p>
            </div>
            <div className="px-6 py-8 bg-white rounded-md shadow-md">
              <h2 className="text-xl font-medium text-gray-800">Resell</h2>
              <p className="max-w-md mt-4 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
                volutpat, viverra magna risus aliquam massa.
              </p>
            </div>
            <div className="px-6 py-8 bg-white rounded-md shadow-md">
              <h2 className="text-xl font-medium text-gray-800">Buy</h2>
              <p className="max-w-md mt-4 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
                volutpat, viverra magna risus aliquam massa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-4 pt-12 pb-32 mt-12 bg-gray-200 border-t lg:0">
        <div className="lg:flex lg:justify-evenly">
          <div className="max-w-sm mt-6 text-center lg:mt-0">
            <h6 className="mb-4 text-4xl font-semibold text-gray-700">Dormz</h6>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              tenetur. Sint, vel sit molestiae velit doloribus aspernatur.
              Voluptate, necessitatibus. Inventore corrupti aliquid atque
              tempora quo eaque error voluptas et earum.
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
    </main>
  );
}
