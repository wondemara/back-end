import React from "react";

const ContactPage = () => {
  return (
    <div>
      <section className="p-8 text-center bg-gradient-to-r from-orange-100 to-secondary lg:p-20">
        <h1 className="mb-2 text-2xl font-bold text-gray-700 lg:text-5xl">
          Nous Contactez pour plus d&apos;informations
        </h1>
      </section>

      <section className="px-4 py-4 bg-gray-100 lg:px-20 lg:py-20">
        <div className="flex items-center justify-center bg-gray-100">
          <div className="w-full px-6 py-16 bg-white rounded-lg shadow-2xl lg:w-2/5">
            <h2 className="mb-4 text-xl antialiased font-semibold text-center text-gray-800">
              Send Us a Message
            </h2>
            <form className="mx-8 space-y-8">
              <div>
                <input
                  type="text"
                  className="w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-primary"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-primary"
                  placeholder="Your Email"
                />
                <span className="text-xs text-red-600">
                  Email field required
                </span>
              </div>
              <div>
                <input
                  type="text"
                  className="w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-primary"
                  placeholder="Subject"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  className="w-full p-6 text-sm border-b-2 border-gray-400 rounded-lg outline-none opacity-50 focus:border-primary"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button className="block w-full px-2 py-4 mt-2 text-white bg-black rounded-full">
                Send Form
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
