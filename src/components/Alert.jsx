import { motion } from "framer-motion";

const Alert = ({ alertMessage, onExit }) => {
  return (
    <motion.div
      className="fixed top-12 left-0 w-screen flex justify-center items-center"
      // Fade-in effect when the component enters
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // Fade-out effect when the component exits
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }} // Duration of the fade in/out effect
    >
      <p className="bg-primaryRed p-6 text-white rounded-xl">{alertMessage}</p>
    </motion.div>
  );
};

export default Alert;
