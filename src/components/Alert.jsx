import { motion } from "framer-motion";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";

const Alert = () => {
  const { alertMessage } = useContext(ShopContext);
  return (
    <motion.div
      className="fixed top-12 left-0 w-screen flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p className="bg-primaryRed p-6 text-white rounded-xl">{alertMessage}</p>
    </motion.div>
  );
};

export default Alert;
