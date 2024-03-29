import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import bgforex from "../assets/fx2.png";
import logo from "../assets/logo.png";

// @ts-ignore
const navigation = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#services" },
  { name: "Why Us", href: "#why" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact Us", href: "#contact" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div id="home" className="bg-white">
      <header className="fixed bg-white inset-x-0 top-0 z-50">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image className="h-12 w-auto" src={logo} alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Chart Engineers</span>
                <Image className="h-12 w-auto" src={logo} alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <motion.h1
              // falling text characters animation
              initial={{ y: 50, opacity: 0, scaleY: 0 }}
              whileInView={{ y: 0, opacity: 1, scaleY: 1 }}
              transition={{ duration: 1 }}
              className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto"
            >
              The Genesis of financial freedom.
            </motion.h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-lg leading-8 text-gray-600"
              >
                Welcome to Chart Engineers, your go-to source for professional
                Forex trading services. We specialize in providing top-notch
                Forex trading strategies and tools to help you navigate the
                markets with ease and confidence.
              </motion.p>
              <div className="mt-10 flex items-center gap-x-6">
                <motion.a
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 10px #8082ea" }}
                  transition={{ duration: 0.3 }}
                  whileTap={{ scale: 0.9 }}
                  // whatsapp group link
                  href="https://chat.whatsapp.com/CuTDlmiXAB57pBczxDCCSk"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Join Our Whatsapp Group
                </motion.a>
                <motion.a
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  whileTap={{ scale: 0.9 }}
                  href="#services"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </motion.a>
              </div>
            </div>

            <Image
              src={bgforex}
              alt="hero"
              className="aspect-[6/5]
              hover:scale-110 transition duration-500 ease-in-out
              w-full max-w-lg rounded-2xl object-contain   lg:max-w-none xl:row-span-2 xl:row-end-2 "
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}
