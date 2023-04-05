import { motion } from "framer-motion";

export default function Example() {
  return (
    <div id="why" className="bg-white">
      <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ y: 20, scale: 0, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Chart your course with confidence
            <br />
            powered by Chart Engineers.
          </motion.h2>
          <motion.p
            initial={{ y: 20, scale: 0, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 1.2 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600"
          >
            So why wait? Sign up for Chart Engineers today and take your Forex
            trading to the next level. Whether you are looking to trade for a
            living, or simply want to earn some extra income on the side, we
            have got the tools and expertise you need to succeed.
          </motion.p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <motion.a
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 10px #8082ea" }}
              transition={{ duration: 0.3 }}
              whileTap={{ scale: 0.9 }}
              href="https://chat.whatsapp.com/CuTDlmiXAB57pBczxDCCSk"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Join our Whatsapp Group
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}
